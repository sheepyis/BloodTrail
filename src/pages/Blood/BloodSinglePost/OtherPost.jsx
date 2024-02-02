import React, { useState } from 'react';
import styled from 'styled-components';
import { OtherPostDetail } from "./PostData"; 
import leftArrow from '../Icons/LeftArrow.svg'; 
import rightArrow from '../Icons/RightArrow.svg'; 
import profileImage from '../../../assets/images/profile.png';
import CardTmp from '../CardTmp';

const OtherPostsSection = styled.section`
  position: relative;
  margin: 40px 0;
  max-width: 100%; 
  margin-left: auto;
  margin-right: auto;
`;

const PostsLists = styled.div`
  padding: 20px;
  width: 80%; // Set width to 80% of the parent element
  margin: 0 10%; // Center the block
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; // Adjust padding as needed
`;

const OtherPostsHeader = styled.h2`
  font-size: 20%;
`;

const BoardListButton = styled.button`
  font-size: 8px;
  border: 1px solid #D1D1D1; // 테두리 없음
  color: #464A4D; // 글자색
  cursor: pointer; // 마우스 오버 시 커서 변경
  padding: 7px; // 패딩
  margin-left: 10px; // 왼쪽 여백
  border-radius: 5px;
`;

const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 10px; // Set gap between the cards
`;

const PostCard = styled.div`
  min-width: 31.5%; 
  height: 260px; 
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Distribute space between items
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const UserName = styled.span`
  margin-right: auto;
`;

const ProfilePic = styled.img`
  width: 20px; // Adjust size as needed
  height: 20px; // Adjust size as needed
  border-radius: 50%;
  margin-right: 12px;
`;

const PRMTag = styled.span`
  background-color: #eee; // Light grey background for the PRM tag
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75em;
`;

const PostTitle = styled.h3`
  font-size: 1em;
  margin-bottom: 8px;
`;

const PostContent = styled.p`
  font-size: 5%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ImagePlaceholder = styled.div`
  background-color: #C4C4C4; // This is the grey background for the placeholder
  height: 60%; // Adjust the height as needed
  width: 100%; // This will make it as wide as the PostCard
  margin-bottom: 12px; // Space between the image and the text content
`;

const ArrowButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${({ left }) => left && `left: 10px;`}
  ${({ right }) => right && `right: 10px;`}
  width: 20px; // Width of the arrow
  height: 20px; // Height of the arrow
  background-image: ${({ left }) => left ? `url(${leftArrow})` : `url(${rightArrow})`};
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? '#E95458' : '#EEEEEE'};
  margin: 0 5px;
  cursor: pointer;
`;

const OtherPosts = () => {
  const [selectBloodType, setSelectBloodType] = useState("A+");
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 2;
  const totalPages = Math.ceil(OtherPostDetail.length / postsPerPage);

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevPage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const goToNextPage = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : totalPages - 1));
  };

  return (
    <OtherPostsSection>
      <HeaderContainer>
        <OtherPostsHeader>다른 글 보기</OtherPostsHeader>
        <BoardListButton onClick={() => {/* Navigate to board list logic here */}}>
          게시판 목록
        </BoardListButton>
      </HeaderContainer>
      <CardTmp selectBloodType={selectBloodType} />
      <PostsLists>
      <ArrowButton left onClick={goToPrevPage} />
      <HorizontalScrollContainer>
        {OtherPostDetail.map((post) => (
          <PostCard key={post.id}>
            <PostHeader>
              <ProfilePic src={profileImage} alt="Profile" />
              <UserName>{post.user}</UserName>
              <PRMTag>PRM</PRMTag>
            </PostHeader>
            <ImagePlaceholder />
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostCard>
        ))}
      </HorizontalScrollContainer>
      <ArrowButton right onClick={goToNextPage} />
      </PostsLists>
      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot key={index} active={index === currentIndex} onClick={() => goToPage(index)} />
        ))}
      </DotsContainer>
    </OtherPostsSection>
  );
};

export default OtherPosts;