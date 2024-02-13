import styled from "styled-components";
import colors from "../../styles/color";

const MyUploadContainer = styled.div`
    width: 100%;
    height: 3vw;
    border: none;
    border-bottom: 0.1vw solid ${colors.crewGray3};
    border-top: 0.1vw solid ${colors.crewGray3};
    display: flex;
    align-items: center;
    text-align: center;
`

const MyUploadP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const MyUpload = () => {
    return (
        <MyUploadContainer>
            <div className="left" style={{width: "58%"}}>
                <MyUploadP>제목</MyUploadP>
            </div>
            <div className="right" style={{width: "38%", display: "flex", justifyContent: "space-between"}}>
                <MyUploadP>글쓴이</MyUploadP>
                <MyUploadP>작성일</MyUploadP>
                <MyUploadP>조회수</MyUploadP>
                <MyUploadP>공감수</MyUploadP>
            </div>
        </MyUploadContainer>
    )
}

export default MyUpload;