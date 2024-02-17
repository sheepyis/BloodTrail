import React, { useState } from 'react';
import styled from 'styled-components';
import { Comments } from './CommentData';
import Dot from './Icons/Dot.svg';
import axios from 'axios';
import { useEffect } from 'react';

const CommentSectionWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 자식 요소를 세로 방향으로 중앙 정렬
  margin-bottom: 4%;
`;

const InputUser = styled.div`
  padding: 1%;
  font-size: 16px; // 사이즈 증가
  font-weight: bold; // 굵은 글씨체
  margin-bottom: 8px; // 입력 필드와의 간격
  color: #464a4d;
`;

const Input = styled.input`
  flex-grow: 1; // 입력 필드가 가능한 모든 공간 차지
  padding: 8px;
  align-items: flex-start; // 자식 요소를 왼쪽 정렬
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 4px 16px;
  color: #464a4d;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 20px; // 타원 모양으로 만들기 위한 border-radius 값
  cursor: pointer;
  margin-left: 8px; // 버튼 사이 간격
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled(Button)`
  // 확인 버튼에 대한 추가 스타일
  border-color: #ffb2b5; // 분홍색 테두리
  &:hover {
    background-color: #cc0000;
  }
`;

const CancelButton = styled(Button)`
  // 취소 버튼에 대한 추가 스타일
  border-color: #eeeeee; // 분홍색 테두리
  &:hover {
    background-color: #0056b3;
  }
`;

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 1px solid #eeeeee; // 구분선의 스타일 설정
  margin-bottom: 10px; // 구분선 아래에 여백 추가
`;

const CommentList = styled.div`
  margin-top: 16px;
`;

const CommentWrapper = styled.div`
  padding: 8px 0;
`;

const DotIcon = styled.img`
  width: 12px; // Set the width as needed
  height: 12px; // Set the height as needed
  margin-left: auto; // Push the icon to the right
`;

// 댓글을 표시할 컴포넌트
const Comment = ({ nickname, content }) => {
  return (
    <CommentWrapper>
      <strong>{nickname}</strong>
      <DotIcon src={Dot} />
      {content}
      <Divider />
    </CommentWrapper>
  );
};

// 댓글 목록과 입력 창을 포함하는 컴포넌트
const CommentSection = ({ _id }) => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const fetchComments = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.get(
        `https://bloodtrail.site/post/${_id}/comment`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.isSuccess) {
        // 응답 데이터에서 댓글 목록을 추출하여 상태에 저장
        const fetchedComments = response.data.result.map((comment) => ({
          id: comment._id,
          nickname: comment.commenter.nickname,
          content: comment.comment,
        }));
        setComments(fetchedComments);
      }
    } catch (error) {
      console.error('댓글 데이터 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // 댓글을 추가하는 함수
  const handleAddComment = async () => {
    if (commentInput.trim()) {
      const accessToken = localStorage.getItem('accessToken');

      try {
        const response = await axios.post(
          `https://bloodtrail.site/post/${_id}/comment`,
          { comment: commentInput },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // 서버 응답에서 댓글 데이터 추출
        const { commenter, comment } = response.data.result;

        // 새 댓글 객체 생성
        const newComment = {
          id: commenter.id, // 댓글 작성자의 ID
          nickname: commenter.nickname, // 댓글 작성자의 닉네임
          content: comment, // 댓글 내용
        };

        // 새 댓글을 comments 상태에 추가
        setComments([...comments, newComment]);
        setCommentInput(''); // 입력 창을 비웁니다.

        console.log('댓글 등록 성공:', response.data);
      } catch (error) {
        console.error('댓글 등록 실패:', error);
      }
    }
  };

  // 댓글 입력 시 상태를 업데이트하는 함수
  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  // 엔터 키로 댓글 추가하는 함수
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  // '취소' 버튼 이벤트 핸들러
  const handleCancel = () => {
    setCommentInput(''); // 입력 창을 비웁니다.
  };

  return (
    <CommentSectionWrapper>
      <InputWrapper>
        <InputUser>user name</InputUser>
        <Input
          value={commentInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="댓글을 입력하세요"
        />
        <Divider />
        <ButtonWrapper>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <ConfirmButton onClick={handleAddComment}>확인</ConfirmButton>
        </ButtonWrapper>
      </InputWrapper>
      <CommentList>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            nickname={comment.nickname}
            content={comment.content}
          />
        ))}
      </CommentList>
    </CommentSectionWrapper>
  );
};

export default CommentSection;
