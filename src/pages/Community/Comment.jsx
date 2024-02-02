import React, { useState } from 'react';
import styled from 'styled-components';
import {Comments} from "./CommentData";
import Dot from "./Icons/Dot.svg";

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
  color:#464A4D;
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
  color: #464A4D;
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

const ConfirmButton = styled(Button)` // 확인 버튼에 대한 추가 스타일
  border-color: #FFB2B5; // 분홍색 테두리
  &:hover {
    background-color: #cc0000;
  }
`;

const CancelButton = styled(Button)` // 취소 버튼에 대한 추가 스타일
  border-color: #EEEEEE; // 분홍색 테두리
  &:hover {
    background-color: #0056b3;
  }
`;

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 1px solid #EEEEEE; // 구분선의 스타일 설정
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
const Comment = ({ text }) => {
  return (
    <CommentWrapper>
      {text}
      <DotIcon src={Dot} />
      <Divider />
    </CommentWrapper>
  );
};

// 댓글 목록과 입력 창을 포함하는 컴포넌트
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  // 댓글을 추가하는 함수
  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput(''); // 입력 창을 비웁니다.
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
        {comments.map((comment, name) => (
          <Comment username={name} text={comment} />
        ))}
      </CommentList>
    </CommentSectionWrapper>
  );
};

export default CommentSection;