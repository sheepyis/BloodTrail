import React,{useState} from 'react'
import styled from "styled-components";
import colors from "../../styles/color";
import {Link} from "react-router-dom";
import group208 from "../../assets/images/Group 208.png";
import group209 from "../../assets/images/Group 209.png";

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
const Line = styled.div`
    margin-top: 0.3646vw;
    height: 0vw;
    width: 32.5vw;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 0.0000vw;
    border-top: 0.0521vw dashed var(--Gray-Gray-500, #9E9E9E);
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
    justify-content: flex-start;
    padding: 1.0417vw 0.0000vw 5.7292vw 0.5208vw;
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw; /* 166.667% */
`
const Name = styled.div`
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
const Nickname = styled.div`
    padding-bottom: 1.6667vw;
    .nickname{
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
const Birth = styled.div`
    padding-bottom: 1.6667vw;
    .birth{
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
const Password = styled.div`
    padding-bottom: 1.6667vw;
    .password{
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
const PhoneNumber = styled.div`
    padding-bottom: 1.6667vw;
    .phoneNumber{
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

const VerificationCode = styled.div`
    color: var(--Gray-Gray-500, #9E9E9E);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw; /* 166.667% */
.register{
    display: flex;
    position: relative;
}
.verificationCode{
    display: flex;
    width: 28.8021vw;
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

.registerButton{
    display: flex;
    position: absolute;
    height: 2.0833vw;
    top:28%;
    left: 37%;
    padding: 0.5208vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 0.2604vw;
    background: var(--Primary-Red-50, #FFFAFA);

    color: var(--Primary-Red-900, #E95458);

    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
}
`
const NextButton = styled.div`
    display: flex;
    justify-content: center;

.nextButton{
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

const Signup = () =>{

    return(
        <Container>
            <SideBar/>
            <MainConationer>
                <Breadcrums>
                    <BreadcrumsP>홈</BreadcrumsP>
                    <BreadcrumsP>{">"}</BreadcrumsP>
                    <BreadcrumsP>로그인</BreadcrumsP>
                    <BreadcrumsP>{">"}</BreadcrumsP>
                    <BreadcrumsP>회원가입</BreadcrumsP>
                </Breadcrums>

                <Title>회원가입</Title>
                <SubTitile>약관에 동의해주세요.</SubTitile>   

                <LineContainer>
                    <LineImg src={group208} alt="group 208"/>
                    <RedLine/>
                    <LineImg src={group208} alt="group 208"/>
                    <Line/>
                    <LineImg src={group209} alt="group 209"/>
                </LineContainer>

                <JoinBox>
                    <Name>
                        이름
                        <input className="name" type="text" placeholder="실명을 입력해주세요"/>
                    </Name>
                    <Nickname>
                        닉네임
                        <input className="nickname" type="text" placeholder="닉네임을 입력해주세요"/>
                    </Nickname>
                    <Birth>
                        생년월일
                        <input className="birth" type="text" placeholder="00 년 00 월 00 일"/>
                    </Birth>
                    <Password>
                        비밀번호
                        <input className="password" type="text" placeholder="비밀번호를 선택해주세요"/>
                    </Password>
                    <PhoneNumber>
                        전화번호
                        <input className="phoneNumber" type="text" placeholder="전화번호를 입력해주세요"/>
                    </PhoneNumber>

                    <VerificationCode>
                        이메일
                            <div className='register'>
                            <input className="verificationCode" type="text" placeholder="텍스트를 입력해주세요"/>
                            <button className="registerButton">인증하기</button>
                            </div>
                    </VerificationCode>
                </JoinBox>

                <NextButton>
                    <Link to="./finish">
                    <input className='nextButton' type="submit" value="회원가입"/>
                    </Link>
                </NextButton>

            </MainConationer>
        </Container>


    )
}

export default Signup;