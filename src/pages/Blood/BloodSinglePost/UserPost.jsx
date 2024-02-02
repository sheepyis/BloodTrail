import React from 'react';
import styled from 'styled-components';
import { PostDetail } from "../PostData";
import { ReactComponent as DotIcon } from './Icons/Dot.svg';
import { ReactComponent as HeartIcon } from './Icons/Heart.svg';
import { ReactComponent as ShareIcon } from './Icons/Share.svg';

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
  border: 1px solid #D1D1D1; // 테두리 없음
  color: #464A4D; // 글자색
  cursor: pointer; // 마우스 오버 시 커서 변경
  padding: 7px; // 패딩
  margin-left: 10px; // 왼쪽 여백
  border-radius: 5px;
`;

const ReportButton = styled.button`
  font-size: 8px;
  color: #464A4D; // 글자색
  cursor: pointer; // 마우스 오버 시 커서 변경
  padding: 7px; // 패딩
  margin-left: 5px; // 왼쪽 여백
  svg {
    // 호버되지 않은 상태에서는 내부 채움을 하지 않음
    width: 15px; // SVG 아이콘의 너비를 줄임
    height: 15px; // SVG 아이콘의 높이를 줄임
  }
`;

const TitleDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; // 세로 정렬
  color: #9E9E9E;
  padding: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 1px solid #E0E0E0; // 구분선의 스타일 설정
  margin-bottom: 10px; // 구분선 아래에 여백 추가
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // 태그들이 넘칠 때 다음 줄로 이동
  justify-content: center; // 태그들을 가운데 정렬
  gap: 10px; // 태그 사이의 간격
  margin: 10px; // 컨테이너의 마진
  margin-bottom: 25px;
`;

const Tag = styled.div`
  display: flex;
  gap: 10px;
  background-color: #FFFAFA; // 태그의 배경색
  padding: 5px 10px; // 태그 내부의 패딩
  font-size: 12px; // 폰트 사이즈
  border-radius: 15px; // 태그의 둥근 모서리
  color: #17191A; // 태그의 글자색
  white-space: nowrap; // 텍스트가 태그를 벗어나지 않도록 설정
`;

const TagCategory = styled.div`
  font-weight: 600;
`;

const ContentArea = styled.div`
  width: 80%;
  background-color: #D9D9D9; // Placeholder color
  min-height: 200px; // 최소 높이 설정
  margin-bottom: 20px;
  padding: 10px; // 내용과 테두리 사이에 여백 추가
  margin-bottom: 20px; // 구분선 아래에 여백 추가
`;

const Details = styled.div`
  white-space: normal; // 텍스트가 자동으로 줄바꿈
  word-break: break-all; // 글자 단위로 줄바꿈
  width: 100%;
  margin-bottom: 20px;
`;

const InteractionBar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end; // 모든 요소를 오른쪽 끝으로 정렬
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
  justify-content: space-between; // 양쪽으로 내용을 밀어냄
  align-items: center;
  padding: 10px 0;
`;

const InteractionButtons = styled.div`
  display: flex;
  gap: 30px; // 버튼 사이 간격
  justify-content: flex-start; // 왼쪽 정렬
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
  border: 1px solid ${props => props.color || '#F3777A'}; // 테두리 색상을 props로부터 받음
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  svg {
    // 호버되지 않은 상태에서는 내부 채움을 하지 않음
    width: 15px; // SVG 아이콘의 너비를 줄임
    height: 15px; // SVG 아이콘의 높이를 줄임
    fill: none;
    stroke: ${props => props.color || '#F3777A'}; // 선 색상을 props로부터 받음
  }

  &:hover {
    transform: scale(1.1);

    svg {
      // 호버 상태에서는 색상 채우기
      fill: ${props => props.hoverColor || 'none'};
      stroke: ${props => props.color || '#F3777A'}; // 테두리 색상을 유지
    }
  }
`;

const LeftContainer = styled.div`
  flex: 1; // 좌측 컨테이너에 유연성 부여
  display: flex;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  flex: 1; // 우측 컨테이너에 유연성 부여
  display: flex;
  justify-content: flex-end;
`;

const ChatButton = styled.div`
  background-color: #FFF6F7; // 배경색
  padding: 10px 74px;
  border-radius: 5px; // 둥근 모서리
  color: #E95458;
  font-size: 0.9em;
  cursor: pointer;
  justify-content: center; // 중앙 정렬
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
            <CopyButton onClick={() => {/* 복사 기능 구현 */}}>
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
