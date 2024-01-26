import React, { useRef } from 'react';
import styled from 'styled-components';
import { OtherPostDetail } from "./PostData"; // Adjust this path as needed

const OtherPostsSection = styled.section`
  position: relative;
  margin: 40px 0;
  max-width: 1024px; // Set a max width for the container
  margin-left: auto;
  margin-right: auto;
  
`;

const PostsLists = styled.div`
  padding: 20px;
  width: 60%; // Set width to 80% of the parent element
  margin: 0 10%; // Center the block
`;

const OtherPostsHeader = styled.h2`
  font-size: 20%;
`;

const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  gap: 20px; // Set gap between the cards
`;

const PostCard = styled.div`
  flex: none;
  width: 20%; // Set a fixed width for each card
  height: 60%; // Fixed height for each card
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

const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => left && `left: -40px;`}
  ${({ right }) => right && `right: -40px;`}
  font-size: 2em;
  color: #333;
  background-color: #fff;
  border-radius: 30px;
  padding: 0 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const OtherPosts = () => {
  const scrollContainerRef = useRef();

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <OtherPostsSection>
      <OtherPostsHeader>다른 글 보기</OtherPostsHeader>
      <PostsLists>
      <ArrowButton left onClick={() => scroll('left') }>&lt;</ArrowButton>
      <HorizontalScrollContainer ref={scrollContainerRef}>
        {OtherPostDetail.map((post) => (
          <PostCard key={post.id}>
            <PostHeader>
              <UserName>{post.user}</UserName>
              <PRMTag>PRM</PRMTag>
            </PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
          </PostCard>
        ))}
      </HorizontalScrollContainer>
      <ArrowButton right onClick={() => scroll('right')}>&gt;</ArrowButton>
      </PostsLists>
    </OtherPostsSection>
  );
};

export default OtherPosts;