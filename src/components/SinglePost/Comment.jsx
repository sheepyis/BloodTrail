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
  border-color: #FFB2B5; // 분홍색 테두리
  &:hover {
    background-color: #FFB2B5;
  }
`;

const CancelButton = styled(Button)` // 취소 버튼에 대한 추가 스타일
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


// 댓글을 표시할 컴포넌트
const Comment = ({username, date, text, commentId}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <CommentWrapper>
      <CommentHeader>
      <CommentWriter>user name</CommentWriter>
      <CommentDate>작성 날짜</CommentDate>
      <DotIcon src={Dot} onClick={() => setIsDropdownVisible(!isDropdownVisible)} />
      {isDropdownVisible && (
          <DropdownMenu isVisible={isDropdownVisible}>
            <DropdownItem onClick={() => {/* Handle report action here */}}>신고하기</DropdownItem>
          </DropdownMenu>
      )}
      </CommentHeader>
      <CommentContent>{text}</CommentContent>
      <Divider />
    </CommentWrapper>
  );
};

// 댓글 목록과 입력 창을 포함하는 컴포넌트
const CommentSection = ({board, _id}) => {

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  // 댓글을 추가하는 함수
  const handleAddComment = async () => {
    
    if (commentInput.trim()) {    
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.post(`https://bloodtrail.site/post/${_id}/comment`,
        { content: commentInput },
        { headers: { Authorization: `Bearer ${accessToken}` }, });
    
        if (response.data.isSuccess) {
          alert('댓글을 작성하였습니다.');
          setCommentInput('');
          window.reload();
        } else {
          alert(response.data.message);
          console.error("Failed to enroll comment: ", response);
        }
      } catch (error) {
        console.error('댓글 등록 중 오류가 발생했습니다.', error);
        alert('댓글 등록에 실패했습니다.');
      }
    };
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken');
          const response = await axios.get(`https://bloodtrail.site/post/${_id}/comment`, {}, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.data.isSuccess) { 
          setComments(response.data.result);
        } else {
          console.error("Failed to fetch comments: ", response.data.message);
          console.error(response.data);
        }
       } catch (error) {
        console.error('댓글을 불러오는 데 실패했습니다.', error);
      }
    };
    fetchComments();
  }, [board,_id]);

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
        {comments.map((comment, indeex) => (
          <Comment
            key={comment._id}
            username={comment.commenter.nickname}
            date={comment.created_at}
            text={comment.content}
            commentId={comment._id}
            />
        ))}
      </CommentList>
    </CommentSectionWrapper>
  );
};

export default CommentSection;