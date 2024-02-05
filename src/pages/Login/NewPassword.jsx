import React from 'react'
import styled from "styled-components";
import colors from "../../styles/color";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2vw;
    margin-bottom: 4vw;
`
const SideBar = styled.div`
    width: 17%;
    padding-left: 2.5%;
`
const MainConationer =styled.div`
    width: 67%;
`

const Breadcrums = styled.div`
    display: flex;
    gap: 0.5vw;
    padding: 0.9375vw 0.0000vw 0.9375vw 0.2083vw;
`
const BreadcrumsP = styled.div`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`
const Title = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 1.2500vw;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1875vw; /* 175% */
    padding-left:0.5208vw;
`
const SubTitile = styled.div`
    color: var(--Gray-Gray-500, #9E9E9E);

    /* Body/Body_small/medium */
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 0.9375vw */
    letter-spacing: -0.0187vw;
`
const JoinBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.0417vw 0.0000vw 5.7292vw 0.5208vw;
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw; /* 166.667% */
`
const NewPasswordP = styled.div`
    padding-bottom: 1.6667vw;
    .name{
        display: flex;
        width: 61.4583vw;
        height: 3.1250vw;
        padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
        margin-top: 0.5208vw;
        align-items: center;
        gap: 0.8333vw;  
        flex-shrink: 0;
        border-radius: 0.2604vw;
        border: 0.0521vw solid var(--Gray-Gray-300, #D1D1D1);
        color: var(--Gray-Gray-500, #9E9E9E);

        font-family: Pretendard;
        font-size: 0.7813vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.0417vw; /* 133.333% */
        letter-spacing: -0.0156vw;
    }
`
const NewPasswordP2 = styled.div`
    padding-bottom: 1.6667vw;
    .email{
        display: flex;
        width: 61.4583vw;
        height: 3.1250vw;
        padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
        margin-top: 0.5208vw;
        align-items: center;
        gap: 0.8333vw;  
        flex-shrink: 0;
        border-radius: 0.2604vw;
        border: 0.0521vw solid var(--Gray-Gray-300, #D1D1D1);

        color: var(--Gray-Gray-500, #9E9E9E);
        font-family: Pretendard;
        font-size: 0.7813vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.0417vw; /* 133.333% */
        letter-spacing: -0.0156vw;
    }
`


const NextButton = styled.div`
    display: flex;
    justify-content: center;

.newPasswordSuccess{
    width: 17.7083vw;
    height: 2.0833vw;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    color: var(--Primary-Red-900, #E95458);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.0417vw; /* 133.333% */
    border-radius: 0.2604vw;
    background: var(--Primary-Red-200, #FFF6F7);
    }
`

const NewPassword = () => {

    return(
        <Container>
            <SideBar/>
            <MainConationer>
                <Breadcrums>
                    <BreadcrumsP>홈</BreadcrumsP>
                    <BreadcrumsP>{">"}</BreadcrumsP>
                    <BreadcrumsP>로그인</BreadcrumsP>
                    <BreadcrumsP>{">"}</BreadcrumsP>
                    <BreadcrumsP>비밀번호 찾기</BreadcrumsP>
                </Breadcrums>

                <Title>비밀번호 찾기</Title>
                <SubTitile>새 비밀번호를 입력해주세요</SubTitile>

                <JoinBox>
                    <NewPasswordP>
                        새 비밀번호 입력
                        <input className="name" type="text" placeholder="새 비밀번호를 입력해주세요"/>
                    </NewPasswordP>
                    <NewPasswordP2>
                        새 비밀번호 다시 입력
                        <input className="email" type="email" placeholder="새 비밀번호를 다시 입력해주세요"/>
                    </NewPasswordP2>
                </JoinBox>

                <NextButton>
                    <Link to="./success">
                    <input className='newPasswordSuccess' type="submit" value="비밀번호 변경하기"/>
                    </Link>
                </NextButton>
                
                
            </MainConationer>

            </Container>
    )
}

export default  NewPassword;