import React,{useState} from 'react'
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
const Email = styled.div`
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

const FindPassword = () => {

    const [inputValue, setInputValue] = useState({
        userName: '',
        userEmail: '',
      });
    
      const { userName, userEmail } = inputValue;
    
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
                <SubTitile>찾고자 하시는 비밀번호의 아이디(이메일)를 입력해주세요.</SubTitile>

                <JoinBox>
                    <Name>
                        이름
                        <input className="name" type="text" placeholder="실명을 입력해주세요"/>
                    </Name>
                    <Email>
                        이메일
                        <input className="email" type="email" placeholder="이메일을 입력해주세요"/>
                    </Email>
                    <VerificationCode>
                        인증번호 입력
                            <div className='register'>
                            <input className="verificationCode" type="text" placeholder="인증번호를 입력해주세요"/>
                            <button className="registerButton">등록하기</button>
                            </div>
                    
                    </VerificationCode>
                </JoinBox>

                <NextButton>
                    <Link to="./newPassword">
                    <input className='nextButton' type="submit" value="다음으로 넘어가기"/>
                    </Link>
                </NextButton>
                
                
            </MainConationer>

            </Container>
    )
}

export default  FindPassword;