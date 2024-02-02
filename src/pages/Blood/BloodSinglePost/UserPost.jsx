import React from 'react';
import styled from 'styled-components';
import { PostDetail } from "./PostData";
import { ReactComponent as DotIcon } from '../Icons/Dot.svg';
import { ReactComponent as HeartIcon } from '../Icons/Heart.svg';
import { ReactComponent as ShareIcon } from '../Icons/Share.svg';

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: #17191A;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
  display: flex;
`;

const CopyButton = styled.button`
  font-size: 8px;
  border: 1px solid #D1D1D1;
  color: #464A4D;
  cursor: pointer;
  padding: 7px; 
  margin-left: 10px; 
  border-radius: 5px;
`;

const ReportButton = styled.button`
  font-size: 8px;
  color: #464A4D; 
  cursor: pointer;
  padding: 7px;
  margin-left: 5px;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const TitleDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  color: #9E9E9E;
  padding: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
  margin-bottom: 10px; 
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
  gap: 10px;
  background-color: #FFFAFA;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 15px; 
  color: #17191A;
  white-space: nowrap;
`;

const TagCategory = styled.div`
  font-weight: 600;
`;

const ContentArea = styled.div`
  width: 80%;
  background-color: #D9D9D9;
  min-height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Details = styled.div`
  white-space: normal;
  word-break: break-all; 
  width: 100%;
  margin-bottom: 20px;
`;

const InteractionBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  color: #9E9E9E;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const InteractionButtons = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
`;

const HeartWrapper = styled.div`
  font-size: 15px;
  display: flex;
  gap : 10px;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.color || '#F3777A'};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
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
  padding: 10px 74px;
  border-radius: 5px;
  color: #E95458;
  font-size: 0.9em;
  cursor: pointer;
  justify-content: center;
`;

const PostDetailPage = () => {
  const postData = PostDetail[0];

  return (
    <PageLayout>
      <Header>
        <HeaderText>
          {postData.title}
        </HeaderText>
        <TitleDetail>
          <UserInfo>
            <div>{postData.user}</div>
          </UserInfo>
          <div>
            <CopyButton onClick={() => {
              const pathToCopy = " and other links";
              navigator.clipboard.writeText(window.location.href + pathToCopy)
                .then(() => {
                  alert('URL copied to clipboard!');
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
          <div>조회수 {postData.hit}</div>
          <div>공감수 {postData.like} </div>
        </InteractionBar>
      </Header>

      <TagContainer>
        {postData.tags.map((tag, index) => (
          <Tag key={index}>
            <TagCategory>{tag.category}</TagCategory>
            {tag.text}
          </Tag>
        ))}
      </TagContainer>

      <ContentArea />
      <Details>
        {postData.content}
      </Details>
      <FooterBar>
        <LeftContainer>
        <InteractionButtons>
          <HeartWrapper>
            <IconWrapper color="#F3777A" hoverColor="#E95458">
              <HeartIcon /> 
            </IconWrapper>
            {postData.like}
          </HeartWrapper>
          <IconWrapper color="#464A4D" hoverColor="#464A4D">
            <ShareIcon /> 
          </IconWrapper>
        </InteractionButtons>
        </LeftContainer>
        <ChatButton>채팅하기</ChatButton>
        <RightContainer></RightContainer>
    </FooterBar>
    </PageLayout>
  );
};

export default PostDetailPage;
