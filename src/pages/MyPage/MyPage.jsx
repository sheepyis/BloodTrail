import styled from "styled-components";
import colors from "../../styles/color";
import { NavLink } from "react-router-dom";

const MyPageContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 2vw;
    margin-bottom: 4vw;
`

const MyPageP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const MyPageP2 = styled.p`
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
    margin-top: 1.5vw;
    cursor: pointer;
`

const MyPageP3 = styled(NavLink)`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`

const RightTop = styled.div`
    display: flex;
    gap: 0.5vw;
`

const MyPage = () => {
    return (
        <MyPageContainer>
            <div className="left" style={{width: "23.5%", paddingLeft: "3.85%"}}>
                <MyPageP>내 정보</MyPageP>
                <MyPageP2>내 프로필</MyPageP2>
                <MyPageP style={{marginTop: "1.5vw"}}>개인정보 처리방침</MyPageP>
                <MyPageP style={{marginTop: "1.5vw"}}>서비스 이용약관</MyPageP>
                <MyPageP style={{marginTop: "1.5vw"}}>회원탈퇴</MyPageP>
            </div>

            <div className="right" style={{width: "55%"}}>
                <RightTop>
                    <MyPageP3 to="/">홈</MyPageP3>
                    <MyPageP3>{">"}</MyPageP3>
                    <MyPageP3>내 정보</MyPageP3>
                    <MyPageP3>{">"}</MyPageP3>
                    <MyPageP3>내 프로필</MyPageP3>
                </RightTop>
            </div>
        </MyPageContainer>
    )
}

export default MyPage;