import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dot from "./Icons/Dot.svg";
import axios from "axios";


const CommentSectionWrapper = styled.div`
  width: 100%;
  padding: 1vw;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5vw;
`;

const InputUser = styled.div`
  font-size: 1vw;
  font-weight: bold;
  margin-bottom: 0.8vw;
  color:#464A4D;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5vw;
  align-items: flex-start;
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  font-size: 0.6vw;
  padding: 0.3vw 0.8vw;
  border: 0.1vw solid;
  background-color: white;
  border: 0.1vw solid;
  border-radius: 1vw;
  cursor: pointer;
  margin-left: 0.4vw; // 버튼 사이 간격
`;

const ConfirmButton = styled(Button)`
  border-color: #FFB2B5;
  &:hover {
    background-color: #FFB2B5;
  }
`;

const CancelButton = styled(Button)`
  font-size: 0.6vw;
  border: 0.1vw solid #EEEEEE;
  &:hover {
    background-color: #EEEEEE;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 0.1vw solid #EEEEEE;
  margin: 0.5vw 0; // 구분선 아래에 여백 추가
`;

const CommentList = styled.div`
  margin-top: 1vw;
  
`;

const CommentWrapper = styled.div`
  font-size: 0.6vw;
`;

const CommentHeader = styled.div`
  padding: 0.1vw;
  display : flex;
  gap : 0.5vw;
  margin : 1vw 0 0.2vw;
`

const CommentWriter = styled.div`
`

const CommentDate = styled.div`
  color : #9E9E9E;
`

const CommentContent = styled. div`
  padding: 0.1vw;
  margin-bottom : 1vw;
`

const DotIcon = styled.img`
  width: 1vw;
  height: 1vw;
  margin-left: auto;
`;

const DropdownMenu = styled.div`
  font-size: 0.6vw;
  position: absolute;
  right: 0;
  transform: translateX(-14vw) translateY(1.5vw);
  background-color: #fff;
  border: 0.1vw solid #d1d1d1;
  border-radius: 0.4vw;
  display: ${props => props.isVisible ? 'block' : 'none'};
  z-index: 10; 
`;

const DropdownItem = styled.div`
  padding: 0.6vw;
  &:hover {
    background-color: #f0f0f0;
  }
  cursor: pointer;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2); // months are 0-based
  const day = (`0${date.getDate()}`).slice(-2);
  const hours = (`0${date.getHours()}`).slice(-2);
  const minutes = (`0${date.getMinutes()}`).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// 댓글을 표시할 컴포넌트
const Comment = ({nickname, date, content}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <CommentWrapper>
      <CommentHeader>
      <CommentWriter>{nickname}</CommentWriter>
      <CommentDate>{formatDate(date)}</CommentDate>
      <DotIcon src={Dot} onClick={() => setIsDropdownVisible(!isDropdownVisible)} />
      {isDropdownVisible && (
          <DropdownMenu isVisible={isDropdownVisible}>
            <DropdownItem onClick={() => {/* Handle report action here */}}>신고하기</DropdownItem>
          </DropdownMenu>
      )}
      </CommentHeader>
      <CommentContent>{content}</CommentContent>
      <Divider />
    </CommentWrapper>
  );
};

// 댓글 목록과 입력 창을 포함하는 컴포넌트
const CommentSection = ({_id}) => {

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  // 댓글을 추가하는 함수
  const fetchComments = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(
          `https://bloodtrail.site/post/${_id}/comment`,
        { headers: { Authorization: `Bearer ${accessToken}` }, });
    
        if (response.data.isSuccess) {
          const fetchedComments = response.data.result.map((comment) => ({
            id: comment._id,
            nickname: comment.commenter.nickname,
            content: comment.comment,
            created_at: comment.created_at,
          }));
          setComments(fetchedComments);
        } else {
          alert(response.data.message);
          console.error("Failed to fetch comment: ", response);
        }
      } catch (error) {
        console.error('댓글 불러오는 중에 오류가 발생했습니다.', error);
        alert('댓글 불러오기에 실패했습니다.');
      }
    };

    useEffect(() => {
      fetchComments();
    }, []);
    
    const handleAddComment = async () => {
      if (commentInput.trim()) {
        setComments([...comments, commentInput]);
        setCommentInput(''); // 입력 창을 비웁니다.
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
          const { commenter, comment, created_at } = response.data.result;
  
          // 새 댓글 객체 생성
          const newComment = {
            id: commenter.id, // 댓글 작성자의 ID
            nickname: commenter.nickname, // 댓글 작성자의 닉네임
            content: comment, // 댓글 내용
            created_at: created_at,
          };
  
          // 새 댓글을 comments 상태에 추가
          setComments([...comments, newComment]);
          setCommentInput(''); // 입력 창을 비웁니다.
  
          console.log('댓글 등록 성공:', response.data);
          alert("댓글을 등록했습니다");
        } catch (error) {
          console.error('댓글 등록 실패:', error);
          alert("댓글을 등록하지 못했습니다");
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
        <Divider/>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            nickname={comment.nickname}
            date={comment.created_at}
            text={comment.content}
            content={comment.content}
            />
        ))}
      </CommentList>
    </CommentSectionWrapper>
  );
};

export default CommentSection;