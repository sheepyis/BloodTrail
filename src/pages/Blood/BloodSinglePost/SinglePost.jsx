import styled from "styled-components";
import UserPost from "./UserPost";
import OtherPost from "./OtherPost";

const Tmpblank = styled.div`
  margin-top: 100px;
`;

const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%; /* 통합된 width 속성 */
  margin: 0 auto; /* 상위 컨테이너를 중앙 정렬 */
`

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 10px solid #EEEEEE; // 구분선의 스타일 설정
  margin-bottom: 10px; // 구분선 아래에 여백 추가
`;

const SinglePost = () => {
    return (
        <Tmpblank>
        <Homecontainer>
          <UserPost/>
          <Divider />
          <OtherPost />
        </Homecontainer>
        </Tmpblank>
    )
}

export default SinglePost;