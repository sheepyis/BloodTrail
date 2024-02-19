import React from 'react'
import styled from "styled-components";
import colors from "../../styles/color";
import group208 from "../../assets/images/Group 208.png"
import Breadcrums from '../../components/Navigation/Breadcrums';
import { useLocation, Link } from 'react-router-dom';


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

const BreadcrumsC = styled.div`
    display: flex;
    gap: 0.5vw;
    padding: 0.9375vw 0.0000vw 0.9375vw 0.2083vw;
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

const LineContainer = styled.div`
    margin: 1.0417vw 0.0000vw 1.5625vw 0.0000vw;
    display: flex;
    flex-direction: row;
    width: 67%;

`
const LineImg = styled.img`
    width: 0.7813vw;
    height: 0.7813vw;
    flex-shrink: 0;
    z-index:1;
`

const RedLine = styled.div`
    margin-top: 0.3646vw;
    height: 0vw;
    width: 32.5vw;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 0.0000vw;
    border-top: 0.0521vw solid var(--Primary-Red-700, #F3777A);
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

const SignupFinish = () => {
  const location = useLocation();

  const useQuery = () => {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();
  const name = query.get('name'); // Retrieve the name passed in URL

    return(
        <Container>
            <SideBar/>
            <MainConationer>
              <BreadcrumsC>
              <Breadcrums pageLabel="로그인" currentPage="회원가입" />
              </BreadcrumsC>
                <Title>회원가입</Title>

                <LineContainer>
                    <LineImg src={group208} alt="group 208"/>
                    <RedLine/>
                    <LineImg src={group208} alt="group 208"/>
                    <RedLine/>
                    <LineImg src={group208} alt="group 208"/>
                </LineContainer>

                <JoinBox>
                    <BoxP>축하합니다! {name}님의 회원가입이 완료되었습니다.</BoxP>
                    <BoxP2>가입한 계정으로 회원가입을 진행해보세요.</BoxP2>
                    <NextButton>
                    <Link to="/">
                    <input className='newPasswordSuccess' type="submit" value="홈으로 돌아가기"/>
                    </Link>
                </NextButton>
                </JoinBox>
            </MainConationer>
        </Container>
    )
}


export default  SignupFinish;