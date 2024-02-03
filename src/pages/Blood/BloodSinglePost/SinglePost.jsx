import styled from "styled-components";
import UserPost from "./UserPost";
import OtherPost from "./OtherPost";

const Tmpblank = styled.div`
  margin-top: 5vw;
  margin-bottom: 5vw;
`;

const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin: 0 auto;
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 0.5vw solid #EEEEEE;
  margin-bottom: 0.5vw;
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