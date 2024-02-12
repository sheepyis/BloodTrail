import React,{useState} from 'react'
import styled from 'styled-components';
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import CrewChatroom from './CrewChatroom'
import colors from '../../../styles/color';
import BloodChat from './BloodChat';

const ChatContainer =styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background: var(--black-white-white-1000, #FFF);
`
const NoteTitle2 =styled.div`
    display: flex;
    background: var(--black-white-white-1000, #FFF);
`
const NoteElement =styled.div`
    padding: 0.78vw 0.78vw 0.78vw 0.78vw;
    display: flex;
    font-size: 0.78vw;
    justify-content: center;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.78vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.04vw; /* 133.333% */

&.crew{
    font-weight: 700;
    border-bottom: 0.16vw solid var(--Primary-Red-700, #F3777A);
}
&:hover {
    font-weight: 700;
}
`

const ChatBox =styled.div`
    height: 5.4688vw;
    padding: 1.0417vw 1.0417vw 1.0417vw 1.0417vw;
    display: flex;
    flex-direction: row:
`
const ChatPerson= styled.img`
    width: 3.3789vw;
    height: 3.3854vw;
    cursor: pointer;
`
const ChatBoxP =styled.div`
    margin-left: 0.7797vw;
    align-item: center;
`

const ChatName =styled.div`
    display: flex;
    color: var(--Gray-Gray-700, #464A4D);
    width: 18.5938vw;
    height: 1.5104vw;
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
    align-items: center;
`

const ChatP =styled.div`
    display: flex;
    width: 20.8333vw;
    height: 1.5104vw;
    align-items: center;
`

const CrewChat =({handleBloodChat,handleCrewChat})=>{

    const [isChatroom,setIsChatroom] = useState(false);
    const [bloodChat,setBloodChat] = useState(false);    
    const [crewChat, setCrewChat] = useState(false);

    const handleChatroom =()=>{
        setIsChatroom(true);
    }

    return(
        <ChatContainer>
            {!isChatroom &&(
            <>
            <NoteTitle2>
                <NoteElement className="crew">크루</NoteElement>
                <NoteElement className="blood" onClick={handleBloodChat}>지정헌혈 요청글</NoteElement>
            </NoteTitle2>

            <ChatBox onClick={handleChatroom}>
                <ChatPerson src={Ellipse22} alt="chat_person" />
                <ChatBoxP>
                    <ChatName>채팅방 이름</ChatName>
                    <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                </ChatBoxP>
            </ChatBox>
            <ChatBox onClick={handleChatroom}>
                <ChatPerson src={Ellipse22} alt="chat_person" />
                <ChatBoxP>
                    <ChatName>채팅방 이름</ChatName>
                    <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                </ChatBoxP>
            </ChatBox>
            </>
            )}
            {isChatroom && <CrewChatroom handleCrewChat={handleCrewChat}
                                handleBloodChat={handleBloodChat}/>}
        </ChatContainer>
        
    )
}

export default CrewChat;

