import React, { useState } from 'react';
import styled from 'styled-components';

import { OtherPostDetail } from "./PostData"; 
import CardTmp from '../Card/Card';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from './Icons/LeftArrow.svg'; 
import rightArrow from './Icons/RightArrow.svg'; 


const OtherPostsSection = styled.section`
  position: relative;
  margin: 5% 0;
  max-width: 100%; 
  margin-left: auto;
  margin-right: auto;

  .slick-dots {
    top: 110%;
      li {
        margin: 0 0.25rem;
      }
      button {
        display: block;
        width: 1rem;
        height: 1rem;
        padding: 0;
        
        border: none;
        border-radius: 100%;
        background-color: #EEEEEE;
        text-indent: -9999px;
      }
    
      li.slick-active button {
        background-color: #E95458;
      }
  }
`;

const PostsLists = styled.div`
  width: 80%;
  margin: 0 auto;
  .slick-slide {
    margin: 0 1.5vw; // 좌우 마진을 추가하여 슬라이드 간 간격을 조정
    width : 100%;
    height: 10vw; // 높이를 자동으로 설정하여 컨텐츠에 맞게 조정
  }

  .slick-list {
    margin: 0 -1vw; // .slick-slide에 추가한 마진을 상쇄하기 위해 사용
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vw;
`;

const OtherPostsHeader = styled.h2`
  font-size: 1.3vw;
  font-weight: 500;
  color: #17191A;
  margin-bottom: 1vw;
`;

const BoardListButton = styled.button`
  height: 2vw;
  font-size: 0.6vw;
  border: 0.1vw solid #D1D1D1;
  color: #464A4D;
  cursor: pointer;
  padding: 0.6vw;
  border-radius: 0.4vw;
`;

const ArrowButton = styled.button`
  width: 4vw;
  height: 2vw;
  cursor: pointer;
  z-index: 10;
  background-color: transparent;
  background-image: url(${({ type }) => type === 'next' ? rightArrow : leftArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ type }) => type === 'next' ? `right: -6.5vw; background-size:2.5vw` : `left: -6.5vw; background-size:1.5vw`}
`;

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return <ArrowButton onClick={onClick} type="next" />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <ArrowButton onClick={onClick} type="prev" />;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const OtherPosts = () => {
  return (
    <OtherPostsSection>
      <HeaderContainer>
        <OtherPostsHeader>다른 글 보기</OtherPostsHeader>
        <BoardListButton>게시판 목록</BoardListButton>
      </HeaderContainer>

      <PostsLists>
        <Slider {...settings}>
          {OtherPostDetail.map((post, index) => (
            <CardTmp
            cardType = {`type${post.id/4 % 2 + 1}`}
            selectBloodType="B-"
            key="22"//{post.id}
            userId = "username" //{post.userId}
            title="title"//{post.title}
            body="bodydydddyydyd"//{post.body}
          />
          ))}
        </Slider>
      </PostsLists>
    </OtherPostsSection>
  );
};

export default OtherPosts;
