import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PostDetail } from "./PostData";
import { ReactComponent as DotIcon } from './Icons/Dot.svg';
import { ReactComponent as HeartIcon } from './Icons/Heart.svg';
import { ReactComponent as ShareIcon } from './Icons/Share.svg';
import axios from 'axios';

const HeaderText = styled.div`
  font-size: 1.3vw;
  font-weight: 500;
  color: #17191A;
  margin-bottom: 1.5vw;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1vw;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  flex-direction: column;
  display: flex;
`;

const CopyButton = styled.button`
  height: 2vw;
  font-size: 0.6vw;
  border: 0.1vw solid #D1D1D1;
  color: #464A4D;
  cursor: pointer;
  padding: 0.6vw;
  border-radius: 0.4vw;
`;

const ReportButton = styled.button`
  color: #464A4D; 
  cursor: pointer;
  padding: 0.4vw;
  margin-left: 0.5vw;
  svg {
    width: 1vw;
    height: 1vw;
  }
`;

const TitleDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  color: #9E9E9E;
  padding: 0.5vw;
  font-size: 0.6vw;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.7vw;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 0.1vw solid #EEEEEE;
  margin-bottom: 0.5vw;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 10px; 
  margin: 10px;
  margin-bottom: 25px;
`;

const Tag = styled.div`
  display: flex;
  gap: 1vw;
  background-color: #FFFAFA;
  padding: 0.6vw 1vw;
  font-size: 0.7vw;
  border-radius: 12vw; 
  color: #17191A;
  white-space: nowrap;
  font-size: 0.7vw;
`;

const TagCategory = styled.div`
  font-weight: 600;
`;

const ContentArea = styled.div`
  width: 80%;
  background-color: #D9D9D9;
  min-height: 15vw;
  padding: 1vw;
  margin-bottom: 2vw;
`;

const Details = styled.div`
  white-space: normal;
  word-break: break-all; 
  width: 100%;
  margin-bottom: 2vw;
  font-size: 0.7vw;
`;

const InteractionBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  color: #9E9E9E;
  font-size: 0.7vw;
`;

const FooterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 0;
`;

const InteractionButtons = styled.div`
  display: flex;
  gap: 1.4vw;
  justify-content: flex-start;
`;

const HeartWrapper = styled.div`
  font-size: 0.9vw;
  display: flex;
  gap : 0.5vw;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0.1vw solid ${props => props.color || '#F3777A'};
  border-radius: 50%;
  padding: 0.6vw;
  cursor: pointer;

  svg {
    width: 1vw;
    height: 1vw;
    fill: none;
    stroke: ${props => props.color || '#F3777A'};
  }

  &:hover {
    transform: scale(1.1);

    svg {
      fill: ${props => props.hoverColor || 'none'};
      stroke: ${props => props.color || '#F3777A'};
    }
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ChatButton = styled.div`
  background-color: #FFF6F7;
  padding: 0.6vw 4vw;
  border-radius: 0.3vw;
  color: #E95458;
  font-size: 0.7vw;
  cursor: pointer;
  justify-content: center;
`;

const PostDetailPage = ({board,_id}) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const fetchPosts = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken');
          const response = await axios.patch(`https://bloodtrail.site/post/${_id}`, {}, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.data.isSuccess && response.data.code === 2000) { 
          console.log(response.data);      
          setPosts(response.data.result);
        } else {
          console.error("Failed to fetch posts: ", response.data.message);
        }
       } catch (error) {
        console.error('게시글을 불러오는 데 실패했습니다.', error);
      }
    };

    fetchPosts();
  }, [board,_id]);

  // const post = PostDetail[0]; // axios로 받아오기
  // const postss = PostDetail[0];

  // if (!postss) {
  //   return <div>Loading...</div>;
  // }

  return (
    <PageLayout>
      <Header>
        <HeaderText>
          {posts && posts.title}
        </HeaderText>
        <TitleDetail>
          <UserInfo>
            <div>{posts && posts.writer.nickname}</div>
          </UserInfo>
          <div>
            <CopyButton onClick={() => {
              const pathToCopy = " and other links";
              navigator.clipboard.writeText(window.location.href + pathToCopy)
                .then(() => {
                  alert('링크가 복사되었습니다.');
                })
                .catch(err => {
                  console.error('Failed to copy: ', err);
                });
              }}>
              URL 복사
            </CopyButton>
            <ReportButton onClick={() => {/* 신고 기능 구현 */}}>
              <DotIcon />
            </ReportButton>
          </div>
        </TitleDetail>
        <Divider />
        <InteractionBar>
          <div>조회수 {posts && posts.watch_count}</div>
          <div>공감수 {posts && posts.likes} </div>
        </InteractionBar>
      </Header>

      {board == 'blood' && (
        <TagContainer>
          {posts.tags && posts.tags.map((tag, index) => (
            <Tag key={index}>
              <TagCategory>{tag.category}</TagCategory>
              {tag.text}
            </Tag>
          ))}
        </TagContainer>
      )}

      <ContentArea />
      <Details>
        {posts && posts.content}
      </Details>
      <FooterBar>
        <LeftContainer>
        <InteractionButtons>
          <HeartWrapper>
            <IconWrapper color="#F3777A" hoverColor="#E95458">
              <HeartIcon /> 
            </IconWrapper>
            {posts && posts.likes}
          </HeartWrapper>
          <IconWrapper color="#464A4D" hoverColor="#464A4D">
            <ShareIcon /> 
          </IconWrapper>
        </InteractionButtons>
        </LeftContainer>
        {board == 'blood' && (
        <ChatButton>채팅하기</ChatButton>
        )}
        <RightContainer></RightContainer>
    </FooterBar>
    </PageLayout>
  );
};

export default PostDetailPage;
