import React from 'react';
import styled from 'styled-components';


const PostContainer = styled.div`
  width: 572px;
  height: 169px;
  background-color: #FFFFFF; // 자유롭게 변경 가능
  border-radius: 5px; // 모서리 둥글기 변경
  margin: 8px 16px; // 상하 마진 조정
  padding: 20px; // 내부 패딩 조정
  border: 1px solid #EEE; // 테두리 추가: 색상은 예시이며, 원하는 색상으로 변경 가능
  transition: transform 0.2s; // 호버 애니메이션 효과 추가
  &:hover {
    transform: translateY(-5px); // 호버 시 위로 올라가는 효과
  }
  display: flex; // 컨테이너를 flex로 설정
  justify-content: space-between; // 내부 요소 사이에 공간을 만듦
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
`

const TitleAndLabelContainer = styled.div`
  display: flex; // flexbox 레이아웃 적용
  gap: 10px; // 간격 조정
`;

const TitleAndContentContainer = styled.div`
  gap: 10px; // 간격 조정
`;

const Placeholder = styled.div`
  width: 129px; // 정사각형 크기로 설정
  height: 129px; // 정사각형 크기로 설정
  background-color: #F0F0F0; // 회색 사각형 배경색
  border-radius: 5px;
  margin-left: auto; // 자동 마진으로 오른쪽 정렬
`;

const PostTitle = styled.h3`
  font-size: 18px;
  color: #17191A;
`

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
`
const PostUser = styled.div`
  text-align: left;
`
const PostDate = styled.div`
  text-align: right;
`

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

export default HotPost;
