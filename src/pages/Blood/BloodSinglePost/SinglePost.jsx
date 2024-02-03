import styled from "styled-components";
import UserPost from "./UserPost";
import OtherPost from "./OtherPost";

const Tmpblank = styled.div`
  margin-top: 5vw;
`;

const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin: 0 auto;
`

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 0.5vw solid #EEEEEE; // 구분선의 스타일 설정
  margin-bottom: 0.5vw; // 구분선 아래에 여백 추가
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