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
  margin-bottom: 2vw;
  background-image: url(${props => props.image});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
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

const DropdownMenu = styled.div`
  top-margin : 0.1vew
  font-size: 0.6vw;
  position: absolute;
  background-color: #fff;
  border: 0.1vw solid #d1d1d1;
  border-radius: 0.4vw;
  display: ${props => props.isVisible ? 'block' : 'none'};
  z-index: 10; 
`;

const DropdownItem = styled.div`
  padding: 0.6vw;
  &:hover {
    background-color: #f0f0f0;
  }
  cursor: pointer;
`;


const PostDetailPage = ({board,_id}) => {
  const [posts, setPosts] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const fetchPosts = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken');
          const response = await axios.patch(`https://bloodtrail.site/post/${_id}`, {}, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.data.isSuccess) { 
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

  const copyLink = async () => {
      const pathToCopy = " and other links";
      navigator.clipboard.writeText(window.location.href + pathToCopy)
        .then(() => {
          alert('링크가 복사되었습니다.');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
      };

  const deletePost = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.delete(`https://bloodtrail.site/post/${_id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      if (response.data.isSuccess) {
        alert('게시글이 삭제되었습니다.');
        window.location.href = "/community";
      } else {
        alert(response.data.message);
        console.error("Failed to delete post: ", response);
      }
    } catch (error) {
      console.error('게시글 삭제 중 오류가 발생했습니다.', error);
      alert('게시글 삭제에 실패했습니다.');
    }
  };


  const toggleLike = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const currentPostResponse = await axios.patch(`https://bloodtrail.site/post/${_id}`, {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const currentLikes = currentPostResponse.data.result.likes;
      
      const likeResponse = await axios.patch(`https://bloodtrail.site/post/${_id}/like`, {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      
      if (likeResponse.data.isSuccess){
          setPosts(currentPost => ({
            ...currentPost,
            likes: currentLikes + 1,
          }));
          alert(`공감 하였습니다.`);
        }
      else if (likeResponse.data.code==="BLOOD4002"){
        const unlikeResponse = await axios.patch(`https://bloodtrail.site/post/${_id}/unlike`, {}, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (unlikeResponse.data.isSuccess)
          setPosts(currentPost => ({
            ...currentPost,
            likes: currentLikes - 1,
          }));
          alert(`공감 취소 하였습니다.`);
        }
       else {
        alert(likeResponse.data.message);
      }
    } catch (error) {
      console.error('공감하기 요청 실패', error);
    }
  };

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
            <CopyButton onClick={copyLink}>
              URL 복사
            </CopyButton>
            <ReportButton onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
              <DotIcon />
              <DropdownMenu isVisible={isDropdownVisible}>
                <DropdownItem onClick={() => {/* Handle report action here */}}>신고하기</DropdownItem>
                <DropdownItem onClick={deletePost}>삭제하기</DropdownItem>
              </DropdownMenu>
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
      <ContentArea>
      {posts && posts.image && posts.image.map((image, index) => (
        <img key={index} src={image} alt={`Post Image ${index + 1}`} style={{ width: '100%'}} />
      ))}
      </ContentArea>
      <Details>
        {posts && posts.content}
      </Details>
      <FooterBar>
        <LeftContainer>
        <InteractionButtons>
          <HeartWrapper onClick={toggleLike}>
            <IconWrapper color="#F3777A" hoverColor="#E95458">
              <HeartIcon /> 
            </IconWrapper>
            {posts && posts.likes}
          </HeartWrapper>
          <IconWrapper onClick={copyLink} color="#464A4D" hoverColor="#464A4D">
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
