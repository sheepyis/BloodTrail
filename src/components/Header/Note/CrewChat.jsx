import React,{useState} from 'react'
import styled from 'styled-components';
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import CrewChatroom from './CrewChatroom'
import colors from '../../../styles/color';
import BloodChat from './BloodChat';
import ListChat from './list-crewchat';

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

            <ListChat handleChatroom={handleChatroom}/>
            </>
            )}
            {isChatroom && <CrewChatroom handleCrewChat={handleCrewChat}
                                handleBloodChat={handleBloodChat}/>}
        </ChatContainer>
        
    )
}

export default CrewChat;

