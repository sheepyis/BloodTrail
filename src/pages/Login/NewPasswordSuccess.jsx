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

const JoinBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.9896vw;
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw; /* 166.667% */
`
const BoxP = styled.div`
display: flex;
justify-content: center;
color: var(--Gray-Gray-900, #17191A);

/* Body/Headline/medium */
font-family: Pretendard;
font-size: 1.2500vw;
font-style: normal;
font-weight: 500;
line-height: 2.1875vw; /* 175% */
`
const BoxP2 = styled.div`
display: flex;
justify-content: center;
padding: 0.5208vw 0.0000vw 3.6458vw 0.0000vw;
color: var(--Gray-Gray-700, #464A4D);

/* Body/Body/medium */
font-family: Pretendard;
font-size: 0.7813vw;
font-style: normal;
font-weight: 500;
line-height: 1.0417vw; /* 133.333% */
letter-spacing: -0.0156vw;
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

                <JoinBox>
                    <BoxP>새로운 비밀번호가 이메일로 전송되었습니다.</BoxP>
                    <BoxP2>이메일을 확인해주세요.</BoxP2>
                    <NextButton>
                    <Link to="/">
                    <input className='newPasswordSuccess' type="submit" value="다시 로그인하기"/>
                    </Link>
                </NextButton>
                </JoinBox>
            </MainConationer>
        </Container>
    )
}

export default  NewPassword;