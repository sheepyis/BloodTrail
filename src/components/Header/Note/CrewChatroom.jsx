import React,{useState} from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/images/arrow_12px2.png';
import profile2 from '../../../assets/images/profile2.png';
import image from '../../../assets/images/image 1.png';
import CrewChat from './CrewChat';
import dot from "../../../assets/images/dot.png";

const Container = styled.div`
    width: 100%;
    flex-shrink: 0;
    border-radius: 0.0000vw 0.0000vw 0.2604vw 0.2604vw;
    background: var(--Gray-Gray-50, #FAFAFA);
`
const ChatContainer = styled.div`
    height: 34.5vw;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
`
const BackIcon = styled.img`
    margin: 0.9896vw;
    width: 1.2500vw; 
    height: 1.2500vw;
`
const HeaderLine = styled.div`
    display: flex;
    justify-content: center;
    width: 24.9520vw;
    height: 0.1042vw;
    flex-shrink: 0;
    border-radius: 0.0521vw;
    background: var(--Gray-Gray-200, #EEE);
`
const HeaderP = styled.div`
    padding-top: 1.5625vw;
    color: var(--Gray-Gray-500, #9E9E9E);
    text-align: center;

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
`

const ChatBox = styled.div`
    margin: 0vw 1.0417vw 1.5625vw 1.0417vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background: var(--Primary-Red-50, #FFFAFA);
`
const ChatNotify = styled.img`
    width: 0.1042vw;
    height: 0.8333vw;
    flex-shrink: 0;
    margin: 0.7vw 0vw 0.7vw 16vw;
`
const OtherUserInfo = styled.div`
    display: flex;
`
const OtherUserName = styled.div`
    display: flex;
    padding-left: 0.5208vw;
    align-items: center;
    color: var(--Gray-Gray-500, #9E9E9E);

    /* Body/Body_small/medium */
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 0.9375vw */
    letter-spacing: -0.0187vw;
`
const OtherUserText = styled.div`
    margin-top: 0.6250vw;
    margin-left: 1.0417vw;
    max-width: 80%;
    word-break: break-all;
    display: flex;
    padding: 0.7813vw 1.0417vw;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 2.5521vw;
    background: var(--black-white-white-1000, #FFF);
    color: var(--Gray-Gray-900, #17191A);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
`

const Rectangle = styled.div`
    display: flex;
    align-items: center;
    height: 5.6250vw;
    flex-shrink: 0;
    border-radius: 0.0000vw 0.0000vw 0.2604vw 0.2604vw;
    background: var(--black-white-white-1000, #FFF);
`
const ImageContainer = styled.div`
    width: 2.7031vw;
    height: 2.7083vw;
    margin-left: 0.7813vw;
    flex-shrink: 0;
    fill: var(--black-white-white-1000, #FFF);
    border: 0.0521vw solid var(--Gray-Gray-100, #F2F2F2);
    border-radius: 3.1250vw;
`
const ImageIcon = styled.img`
    display: flex;
    padding: 0.5vw;
    position: absolute;
    left: 2.8%;
`
const InputText = styled.div`
    margin-left: 0.83vw;
    width: 20.8973vw;
    height: 2.7083vw;
    flex-shrink: 0;
    border-radius: 3.1250vw;
    border: 0.0521vw solid var(--Gray-Gray-100, #F2F2F2);
    background: var(--black-white-white-1000, #FFF);
.inputText{
    display: flex;
    position: relative;

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
}
.inputChat{
    width: 14.7396vw;
    height: 1.0417vw;
    display: flex;
    align-items: center;
    placeholderTextColor: var(--Gray-Gray-200, #EEE);,
    flex-shrink: 0;
    margin: 0.83vw 0vw 0.83vw 1.04vw;
    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
}

.sendButton{
    display: inline-flex;
    padding: 0.2083vw 1.0417vw;
    margin: 0.5vw 0vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 5.2083vw;
    border: 0.1042vw solid var(--Primary-Red-500, #FFB2B5);
  }
}
`
const BloodChatroom=()=>{
    const [back, setBack] = useState(false);

    const handleBack =()=>{
        setBack(true);
    }
    return(
       
        <Container>
            {!back &&(
            <>
            <ChatContainer>
                <Header>
                    <BackIcon src={arrow} alt="back_arrow" onClick={handleBack}/>
                    <HeaderLine/>
                </Header>
                <HeaderP>채팅방이 개설되었습니다</HeaderP>

                <ChatBox>
                    <OtherUserInfo>
                        <img src= {profile2} alt="profile" style ={{width: '2.0793vw', height: '2.0833vw'}}/>
                        <OtherUserName>other user name</OtherUserName>
                        <ChatNotify src ={dot} alert="신고하기"/>
                    </OtherUserInfo>
                    <OtherUserText>지정헌혈 요청글 채팅방입니다.</OtherUserText>
                </ChatBox>
            </ChatContainer>
            <Rectangle>
                <ImageContainer>
                    <ImageIcon src={image} alt="사진 추가"/>
                </ImageContainer>
                <InputText>
                    <div className='inputText'>
                    <input className="inputChat" type="text" placeholder="채팅을 입력해보세요. 텍스트박스  283px"/>
                    <button className="sendButton">전송</button>
                    </div>
                </InputText>
            </Rectangle>
            </> )}
            {back&&(<CrewChat/>)}
        </Container>
    )
}
export default BloodChatroom;
