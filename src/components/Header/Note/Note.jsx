import React from "react";
import styled from "styled-components";
import colors from "../../../styles/color";
import { NavLink } from "react-router-dom";
import Ellipse22 from "../../../assets/images/Ellipse22.png";



const NoteContainer =styled.div`
    width: 27.0833vw;
    height: 46.2500vw;
    border-radius: 0.2604vw;
    position: absolute;
    top: 4.1146vw;
    right: 4.4792vw;
    left: 70.2083vw;
    width: 26.5625vw;
    height: 37.6042vw;
    background: #FFF;
    z-index:2;
`
const NoteTitle1 =styled.div`
    text-align: center;
    height: 3.5417vw;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
    padding-top: 0.9896vw;
     
`
const NoteTitle2 =styled.div`
    display: flex;
`
const NoteElement =styled(NavLink)`
    padding: 0.7813vw 0.7813vw 0.7813vw 0.7813vw;
    display: flex;
    font-size: 0.7813vw;
    justify-content: center;
    align-items: center;
    height: 2.6042vw;


    &:hover {
        font-weight: 700;
    }

    &.active {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: ${colors.mainRed};
        text-decoration-thickness: 0.1vw;
        text-underline-offset: 0.4vw;
    }
`

const ChatContainer =styled.div`
    display: flex;
    flex-direction: column;
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

const Note= () => {


    return(
        <NoteContainer>
            <NoteTitle1>쪽지</NoteTitle1>
            <NoteTitle2>
                <NoteElement>크루</NoteElement>
                <NoteElement>지정헌혈 요청글</NoteElement>
            </NoteTitle2>

            <ChatContainer>
                <ChatBox>
                    <ChatPerson src={Ellipse22} alt="chat_person" />
                    <ChatBoxP>
                        <ChatName>채팅방 이름</ChatName>
                        <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                    </ChatBoxP>
                </ChatBox>

                <ChatBox>
                    <ChatPerson src={Ellipse22} alt="chat_person" />
                    <ChatBoxP>
                        <ChatName>채팅방 이름</ChatName>
                        <ChatP>채팅 내용입니다. 최대 1줄 텍스트박스 길이 400px</ChatP>
                    </ChatBoxP>
                </ChatBox>
            </ChatContainer>
        </NoteContainer>
    )
}

export default Note;