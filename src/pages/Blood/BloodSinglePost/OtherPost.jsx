import React, { useState } from 'react';
import styled from 'styled-components';
import { OtherPostDetail } from "./PostData"; 
import leftArrow from '../Icons/LeftArrow.svg'; 
import rightArrow from '../Icons/RightArrow.svg'; 
import profileImage from '../../../assets/images/profile.png';
import CardTmp from '../CardTmp';
import { Link } from "react-router-dom";


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
          <Link to="../Blood" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          게시판 목록
          </Link>
        </BoardListButton>
      </HeaderContainer>

      <PostsLists>
      <ArrowButton left onClick={goToPrevPage} />
      <HorizontalScrollContainer>
        <CardTmp forOtherPost={true} cardType="type1" selectBloodType="A+" linkPath="/some-path" />
        <CardTmp forOtherPost={true} cardType="type2" selectBloodType="A+" linkPath="/some-path" />
        <CardTmp forOtherPost={true} cardType="type1" selectBloodType="A+" linkPath="/some-path" />
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