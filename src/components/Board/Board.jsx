import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const BoardContainer = styled.div`
  width: 100%;
  margin-bottom: 5%;
`

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 1%;
  width: 100%;
`;

const BoardText = styled.div`
  align-items: left;
  font-size: 1.2vw;
  font-weight: 1000;
  color: #17191A;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;

const MoreText = styled.div`
  font-size: 1;
  color: #9E9E9E;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 열을 동일한 너비로 설정 */
  gap: 2%;
  padding : 2%;
`;

const PostContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border: 0.1vw solid #EEEEEE;
  border-radius: 0.5vw;
  width: 27vw;
  height: 7.97vw;
  padding: 3.5%;
  align-items: center;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: translateY(-2%);
  }
`;

const PostContentContainer = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HotLabel = styled.span`
  width: 17%;
  padding: 1%;
  background-color: #FFF6F7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const HotLabelText = styled.span`
  color: #E95458;
  font-size: 0.8vw;
  font-weight: 700;
`;

const TitleAndLabelContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 3%;
`;

const TitleAndContentContainer = styled.div`
  width: 100%;
  gap: 2%;
  display: flex;
  flex-direction: column;
`;

const Placeholder = styled.div`
  width: 6.2vw;
  height: 6.2vw;
  background-color: #F0F0F0;
  border-radius: 5px;
  margin-left: auto;
`;

const PostTitle = styled.h3`
  font-size: 1vw;
  color: #17191A;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostContent = styled.p`
  font-size: 0.8vw;
  color: #464A4D;
  margin-top: 3%;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.5;
`;

const PostMeta = styled.div`
  font-size: 0.8vw;
  color: #9E9E9E;
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* 메타 데이터가 아래쪽에 위치하도록 변경 */
`;

const PostUser = styled.div`
  text-align: left;
`;

const PostDate = styled.div`
  text-align: right;
`;

const HotPost = ({ title, content, username, date }) => {
  return (
    <Link to={"../SinglePost/SinglePost"} style={{ textDecoration: 'none', color: 'inherit' }}>
    <PostContainer>
      <PostContentContainer>
      <TitleAndContentContainer>
        <TitleAndLabelContainer>
          <HotLabel><HotLabelText>HOT</HotLabelText></HotLabel>
          <PostTitle>{title.slice(0, 17)}</PostTitle>
        </TitleAndLabelContainer>
        <PostContent>{content}</PostContent>
      </TitleAndContentContainer>
      <PostMeta>
        <PostUser>{username}</PostUser>
        <PostDate>{date}</PostDate>
      </PostMeta>
      </PostContentContainer>
      <Placeholder />
    </PostContainer>
    </Link>
  );
};

const Board = ({ postsDatas }) => {
  const postsData = postsDatas.slice(0,4);
  return (
    <BoardContainer>
      <BoardTop>
        <BoardText>자유게시판 HOT</BoardText>
        <MoreText>더보기</MoreText>
      </BoardTop>
      <GridContainer>
        {Array.isArray(postsData) && postsData.map(post => (
          <HotPost key={post.id} title={post.title} content={post.content} username={post.username} date={post.date} />
        ))}
      </GridContainer>
    </BoardContainer>
  );
};

export default Board;