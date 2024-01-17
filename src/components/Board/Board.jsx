import React from 'react';
import HotPost from './HotPost';
import styled from 'styled-components';


const BoardTop = styled.div`
  display: flex;
  justify-content: space-between; // 양쪽 끝에 요소를 배치
  align-items: center; // 세로 중앙 정렬
  margin-top: 80px;
  margin-bottom: 20px;
  width: 100%; // 전체 너비 사용
`;

const BoardText = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: #17191A;
`;

const MoreText = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.36px;
  color: #9E9E9E; // 색상
  cursor: pointer; // 마우스 오버 시 커서 변경
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2개의 열로 설정
`;

const Board = ({ postsData }) => {
  return (
    <div className="board-container">
      <BoardTop>
      <BoardText>자유게시판 HOT</BoardText>
      <MoreText>더보기</MoreText>
      </BoardTop>
      <GridContainer>
      {Array.isArray(postsData) && postsData.map(post => (
        <HotPost key={post.id} title={post.title} content={post.content} username={post.username} date={post.date} />
      ))}
      </GridContainer>
    </div>
  );
};

export default Board;
