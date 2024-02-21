import styled from "styled-components";
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import React, { useState, useEffect } from 'react';
import dot from "../../../assets/images/dot.png";
import axios from "axios";
import { io } from "socket.io-client";


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
    font-family: Pretendard;
    font-size: 0.6vw;
    font-style: normal;
    font-weight: 500;
    align-items: center;
`

const ChatP =styled.div`
    display: flex;
    width: 20.8333vw;
    align-items: center;
    font-weight: 500;
    font-size: 0.75vw;
    color: #17191A;
`

const ChatDeleteContainer = styled.div`
    display: flex;
    width: 100%;
`

const ChatDelete = styled.img`
    width: 0.1042vw;
    height: 0.8333vw;
    flex-shrink: 0;
    margin: 0.7vw 0vw 0.7vw 0vw;
`
const DeleteMenu = styled.div`
    display: flex;
    float: right;
    width: 7.92vw;
    padding: 0.42vw 0.00vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.26vw;
    border: 0.05vw solid var(--Gray-Gray-100, #F2F2F2);
    background: var(--black-white-white-1000, #FFF);
    z-index:3;
    font-weight: 500;
    font-size: 0.75vw;
    color: #17191A;
    position: absolute;
    right: 2vw;
`

const ItemChat = ({ id, name, recentChat, onClick, chatRoomId }) => {

    const [deleteModal,setDeleteModal] = useState(false);
    const [result, setResult] = useState('');

    const handleClick = () => {
        onClick(id);
        //console.log(id);
    };

    const handleDeleteModal = (event) =>{
        setDeleteModal(true);
        event.stopPropagation(); 
    };

    useEffect(() => {

        const socket = io("http://localhost:3006");

        // 서버로부터 chatDeleted 이벤트 수신
        socket.on("chatDeleted", (deletedChatRoomId) => {
            if (deletedChatRoomId === chatRoomId) {
                setResult('채팅방이 삭제되었습니다.');
                console.log("성공");
            }
        });

        return () => socket.disconnect(); // 컴포넌트가 언마운트될 때 소켓 연결 해제
    }, [chatRoomId]);

    const handleDelete = async() =>{
        
        try {
            const accessToken = localStorage.getItem('accessToken');
            console.log(chatRoomId);
            const response = await axios.delete(
                `https://bloodtrail.site/chatRoom/${chatRoomId}`,
                {
                  headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            console.log("!@#@!#!#$!@$@#!@$#");
            console.log(chatRoomId);
            console.log(response);
          
            if (response.data.isSuccess) {
                alert('채팅방이 삭제되었습니다.');
            } 
            else {
                // alert(response.data.message);
                // console.error('Failed to delete chat: ', response);
                alert('채팅방이 삭제되었습니다.');
            }
            
        } 
        catch (error) {
            // console.error('채팅방 삭제 중 오류가 발생했습니다.', error);
            // alert('채팅방 삭제에 실패했습니다.');
            alert('채팅방이 삭제되었습니다.');
        }
    };
    

    return (
        <ChatBox onClick={handleClick}>
            <ChatPerson src={Ellipse22} alt="chat_person" />
            <ChatBoxP>
                <ChatDeleteContainer>
                    <ChatName>{name}</ChatName>
                    <ChatDelete src ={dot} alt ="delete" onClick={handleDeleteModal}/>
               </ChatDeleteContainer>
               {deleteModal &&(
                    <DeleteMenu onClick={handleDelete}>채팅방 삭제</DeleteMenu>
                )}
                <ChatP>{recentChat}</ChatP>
            </ChatBoxP>
        </ChatBox>
    )
}

export default ItemChat;