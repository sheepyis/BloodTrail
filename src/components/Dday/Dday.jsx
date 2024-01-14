import styled from "styled-components"

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Rectangle = styled.div`
    width: 16.1vw;
    height: 16.1vw;
    border-radius: 5px;
    border: 1px solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
    box-sizing: border-box; 
    display:flex;
    flex-direction: column;
`

const RecContent= styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top:2.5vw;
`

const Recborder = styled.div`
    width: 15.96vw;
    height: 2.85vw;
    border-radius: 5px 5px 0 0; 
    background: var(--Gray-Gray-100, #F2F2F2);
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative; 
    top: -1px; 
`

const Nextday = styled.p`
    color: var(--Gray-Gray-700, #464A4D);
text-align: center;
font-family: Pretendard;
font-size: 0.6vw;
font-style: normal;
font-weight: 500;
line-height: 150%; 
letter-spacing: -0.36px;
`

const Dquestion = styled.p`
    color: var(--Primary-Red-700, #F3777A);
font-family: Pretendard;
font-size: 2.25vw;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Checkdate = styled.p`
    color: var(--Gray-Gray-900, #17191A);
text-align: center;
font-family: Pretendard;
font-size: 0.7vw;
font-style: normal;
font-weight: 500;
line-height: 1vw; 
letter-spacing: -0.45px;
margin-top:0.5vw;
`

const LoginButton =styled.button`
    width:13.5vw;
    height:2vw;
    border-radius: 0.25vw;
background: var(--Primary-Red-900, #E95458);
color: var(--black-white-white-1000, #FFF);
text-align: center;
font-family: Pretendard;
font-size: 0.7vw;
font-style: normal;
font-weight: 600;
line-height: 1vw;
margin-top:1.75vw;
`

const LoginContainer = styled.div`
    display:flex;
    flex-direction: space;
    justify-content: space-between;
    margin-top:1vw;
    margin-left:1vw;
    margin-right:1vw;
`

const FindP= styled.p`
    color: var(--Gray-Gray-700, #464A4D);
font-family: Pretendard;
font-size: 0.6vw;
font-style: normal;
font-weight: 500;
line-height: 150%; 
letter-spacing: -0.36px;
&:nth-child(2) { 
        margin-right: 5.3vw; 
    }
`

const Dday=()=>{
    return (
    <>
    <HomeContainer>
        <Rectangle>
            
            <Recborder>
                <Nextday>나의 다음 전혈 가능 날짜는?</Nextday>
            </Recborder>
            <RecContent>
            <Dquestion>D-?</Dquestion>
            <Checkdate>나의 전혈 가능 날짜를 확인하세요</Checkdate>
            <LoginButton>로그인</LoginButton>
            </RecContent>
            <LoginContainer>
                <FindP>아이디찾기</FindP>
                <FindP>비밀번호찾기</FindP>
                <FindP>회원가입</FindP>
            </LoginContainer>
        </Rectangle>
    </HomeContainer>
    </>
    );
}

export default Dday;