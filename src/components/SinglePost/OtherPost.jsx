import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OtherPostDetail } from './PostData';
import CardTmp from '../Card/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from './Icons/LeftArrow.svg';
import rightArrow from './Icons/RightArrow.svg';

const OtherPostsSection = styled.section`
  margin: 4vw 0 10vw;
  max-width: 100%; 
  .slick-dots {
    top: 110%;
      li {
        width:2vw;
        margin: 0vw; 0.2vw;
      }
      button {
        display: block;
        width: 0.8vw;
        height: 0.8vw;
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
  color: #17191a;
  margin-bottom: 1vw;
`;

const BoardListButton = styled.button`
  height: 2vw;
  font-size: 0.6vw;
  border: 0.1vw solid #d1d1d1;
  color: #464a4d;
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
  background-image: url(${({ type }) =>
    type === 'next' ? rightArrow : leftArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-size: 1.5vw;
  ${({ type }) => (type === 'next' ? `right: -6.5vw;` : `left: -6.5vw;`)}
`;

const CardGap = styled.div`
  width: 100%;
  padding: 0 0.5vw;
  box-sizing: border-box;
`;

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

const OtherPosts = ({ board, _id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(
          `https://bloodtrail.site/post/${_id}/recommend`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (response.data.isSuccess) {
          console.log(response.data);
          setPosts(response.data.result);
        } else {
          console.error('Failed to fetch posts: ', response.data.message);
          console.error(response.data);
        }
      } catch (error) {
        console.error('게시글을 불러오는 데 실패했습니다.', error);
      }
    };
    fetchPosts();
  }, [board, _id]);

  return (
    <OtherPostsSection>
      <HeaderContainer>
        <OtherPostsHeader>다른 글 보기</OtherPostsHeader>
        <Link to={'/community'}>
          <BoardListButton>게시판 목록</BoardListButton>
        </Link>
      </HeaderContainer>
      <PostsLists>
        <Slider {...settings}>
          {posts.map((post) => (
            <CardGap key={post._id}>
              <CardTmp
                board="community"
                forOtherPost={true}
                _id={post._id}
                cardType={
                  post.image && post.image.length > 0 ? 'type2' : 'type1'
                }
                //userId={post.writer.nickname}
                thumb={
                  post.image && post.image.length > 0
                    ? post.image[0]
                    : undefined
                }
                title={post.title}
                body={post.content}
              />
            </CardGap>
          ))}
        </Slider>
      </PostsLists>
    </OtherPostsSection>
  );
};

export default OtherPosts;
