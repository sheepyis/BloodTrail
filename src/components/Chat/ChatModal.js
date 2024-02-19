import styled from "styled-components";
import colors from "../../styles/color";
import React, { useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const ChatModalContainer = styled.div`
    width: 21.65vw;
    height: 14.5vw;
    background-color: ${colors.white};
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    position: absolute;
    z-index: 1;
    top: 7vw;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ChatButton = styled.button`
  width: 50%;
  background-color: ${colors.lightGray};
  border: none;
  height: 2.8vw;
  font-weight: 500;
  font-size: 0.75vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;

const ChatP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.black};
    margin-top: 2vw;
`

const ChatInput = styled.input`
    width: 20vw;
    height: 2.6vw;
    border: 0.05vw solid #F2F2F2;
    border-radius: 3vw;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.lightGray};
    padding: 1vw;
    margin-top: 1vw;

    &::placeholder {
        font-weight: 500;
        font-size: 0.75vw;
        color: ${colors.lightGray};
    }
`

const ChatButton2 = styled.button`
    width: 4.6vw;
    height: 2.5vw;
    border: 0.1vw solid ${colors.lightGray};
    background-color: ${colors.white};
    border-radius: 5vw;
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray2};
    margin-top: 1vw;
    cursor: pointer;
`

const ChatModal = ({ closeModal }) => {
    const [type, setType] = useState("crew");
    const [title, setTitle] = useState("");
    const [chat, setChat] = useState(null);
  
    const handleButtonClick = (value) => {
      setType(value);
      console.log("Button value:", value);
    };

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleConfirm = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.post(
          "https://bloodtrail.site/chatRoom",
          { type, title },
          config
        );

        setChat(response.data.result);
        console.log(response.data);

        const socket = io("https://bloodtrail.site");
        socket.emit("newRoom", { chatRoomId: response.data.result.chatRoomId });

        closeModal();

      } catch (error) {
        console.error("Error: ", error);
      }
    };

    return (
        <ChatModalContainer>
            <div className="ButtonContainer" style={{ display: "flex", width: "100%" }}>
                <ChatButton style={{background: type === "blood" ? "#FFE7E7" : "", color: type === "blood" ? colors.crewGray : ''}} onClick={() => handleButtonClick("blood")}>
                지정헌혈 신청
                </ChatButton>
                <ChatButton style={{background: type === "crew" ? "#FFE7E7" : "", color: type === "crew" ? colors.crewGray : ''}} onClick={() => handleButtonClick("crew")}>
                헌혈 크루
                </ChatButton>
            </div>

            <ChatP>생성할 채팅창 이름을 입력해주세요.</ChatP>
            <ChatInput placeholder="채팅창 이름을 입력하세요." value={title} onChange={handleTitleChange} />

            <div className="ButtonContainer2" style={{display: "flex", gap: "2vw"}}>
                <ChatButton2 onClick={closeModal} >취소</ChatButton2>
                <ChatButton2 style={{border: "0.1vw solid #FFB2B5"}} onClick={handleConfirm}>확인</ChatButton2>
            </div>
        </ChatModalContainer>
    );
};

export default ChatModal;
