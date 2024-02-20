import styled from "styled-components";
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import React, { useState, useEffect } from 'react';

const ChatBox =styled.div`
    height: 5.4688vw;
    padding: 1.0417vw 1.0417vw 1.0417vw 1.0417vw;
    display: flex;
    flex-direction: row;
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

const ItemChat = ({ id, name, recentChat, onClick }) => {
    const handleClick = () => {
        onClick(id);
        console.log(id);
    };
    
    return (
        <ChatBox onClick={handleClick}>
            <ChatPerson src={Ellipse22} alt="chat_person" />
            <ChatBoxP>
                <ChatName>{name}</ChatName>
                <ChatP>{recentChat}</ChatP>
            </ChatBoxP>
        </ChatBox>
    )
}

export default ItemChat;