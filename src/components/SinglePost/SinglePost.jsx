import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styled from "styled-components";
import UserPost from "./UserPost";
import OtherPost from "./OtherPost";
import Comment from "./Comment";
import Sidebar from '../../components/Navigation/Sidebar';
import Breadcrums from '../../components/Navigation/Breadcrums';


const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 통합된 width 속성 */
  margin: 0 auto; /* 상위 컨테이너를 중앙 정렬 */
  margin-top: 4vw;

`

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 10px solid #EEEEEE; // 구분선의 스타일 설정
  margin-bottom: 10px; // 구분선 아래에 여백 추가
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const MainConationer = styled.div`
  width: 67%;
`;


const SinglePost = () => {
    const location = useLocation();
    const { board, _id } = queryString.parse(location.search);

    const pageLabel = board === 'community' ? '커뮤니티' : '지정헌혈';
    const currentPage = board === 'community' ? '자유게시판' : '지정헌혈 요청 글';

    return (
      <Container>
        <Sidebar pageLabel={pageLabel} currentPage={currentPage} />
        <MainConationer>
          <Breadcrums pageLabel={pageLabel} currentPage={currentPage} />
        <Homecontainer>
          <UserPost board={board} _id={_id}/>
          <Divider />
          {board === 'community' && <>
            <Comment board={board} _id={_id}/>
            <Divider />
          <OtherPost board={board} _id={_id}/>
          </>}
        </Homecontainer>
        </MainConationer>
    </Container>
    )
}
export default SinglePost;