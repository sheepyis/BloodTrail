import React from 'react';
import styled from 'styled-components';

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 992px) {
    margin-top: 60px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

const BoardText = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: #17191A;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MoreText = styled.div`
  font-size: 12px;

  @media (max-width: 992px) {
    font-size: 11px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 120px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 모든 게시글을 한 열로 표시
    grid-gap: 15px; // 격자 간격 조정
    margin-bottom: 60px; // 하단 마진 조정
  }
`;

const PostContainer = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #EEE; // 테두리 추가: 색상은 예시이며, 원하는 색상으로 변경 가능
  border-radius: 5px; // 모서리 둥글기 변경
  width: 572px;
  height: 169px;
  margin: 8px auto;
  padding: 20px;

  transition: transform 0.2s; // 호버 애니메이션 효과 추가
  &:hover {
    transform: translateY(-5px); // 호버 시 위로 올라가는 효과
  }
  display: flex; // 컨테이너를 flex로 설정
  justify-content: space-between; // 내부 요소 사이에 공간을 만듦

  @media (max-width: 992px) {
    width: 90%; // 너비를 화면의 90%로 조정
    height: auto; // 높이를 자동으로 조정
  }

  @media (max-width: 768px) {
    width: 100%; // 너비를 화면의 100%로 조정
    flex-direction: column; // 컨테이너 내부를 세로 방향으로 정렬
    padding: 15px; // 패딩 조정
  }
`;

const HotLabel = styled.span`
  width: 50px;
  height: 21px;
  background-color: #FFF6F7; // "HOT" 라벨 배경색
  display: flex;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px; // 모서리 둥글기 변경
`;

const HotLabelText = styled.span`
  color: #E95458;
  font-size: 12px;
  font-style: bold;
  font-weight: 700;
`;

const TitleAndLabelContainer = styled.div`
  display: flex; // flexbox 레이아웃 적용
  gap: 10px; // 간격 조정
  @media (max-width: 768px) {
    flex-direction: column; // 세로 방향으로 변경
    align-items: flex-start; // 왼쪽 정렬
  }
`;

const TitleAndContentContainer = styled.div`
  gap: 10px; // 간격 조정
`;

const Placeholder = styled.div`
  width: 129px; // 기존 고정 너비
  height: 129px; // 기존 고정 높이
  background-color: #F0F0F0;
  border-radius: 5px;
  margin-left: auto; // 오른쪽 정렬

  @media (max-width: 992px) {
    width: 100px; // 너비 조정
    height: 100px; // 높이 조정
  }

  @media (max-width: 768px) {
    display: none; // 작은 화면에서는 숨김
  }
`;

const PostTitle = styled.h3`
  font-size: 18px;
  color: #17191A;
`;

const PostContent = styled.p`
  font-size: 15px; // 필요에 따라 폰트 크기를 조정하세요.
  color: #464A4D;
  margin-top: 10px;
  overflow: hidden;
  word-wrap: break-word;
  height: auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 최대 2줄 표시
  line-height: 1.5; // 줄 간격 조정
  max-width: 367px; // 한 줄에 들어갈 글자 수를 조절하기 위해 너비 조정
  
`;

const PostMeta = styled.div`
  font-size: 12px;
  color: #9E9E9E;
  display: flex;
  justify-content: space-between;
  
`;

const PostUser = styled.div`
  text-align: left;
`;

const PostDate = styled.div`
  text-align: right;
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 내부 요소들을 상하로 균등하게 분포
  flex: 1; // 남은 공간을 모두 차지하도록 설정
  margin-right: 20px; // Placeholder와의 간격을 위해 오른쪽 마진 추가
`;

const HotPost = ({ title, content, username, date }) => {
  return (
    <PostContainer>
      <PostDetails>
      <TitleAndContentContainer>
        <TitleAndLabelContainer>
          <HotLabel><HotLabelText>HOT</HotLabelText></HotLabel>
          <PostTitle>{title.slice(0,17)}</PostTitle>
        </TitleAndLabelContainer>
        <PostContent>{content}</PostContent>
      </TitleAndContentContainer>
      <PostMeta>
        <PostUser>{username}</PostUser>
        <PostDate>{date}</PostDate>
      </PostMeta>
      </PostDetails>
        <Placeholder />
    </PostContainer>
  );
};

const Board = ({ postsDatas }) => {
  const postsData = postsDatas.slice(0,4);
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