import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/images/arrow_12px2.png';
import profile2 from '../../../assets/images/profile2.png';
import image from '../../../assets/images/image 1.png';
import CrewChat from './CrewChat';
import dot from '../../../assets/images/dot.png';
import colors from '../../../styles/color';
import axios from 'axios';
import { io } from 'socket.io-client';

const Container = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 0vw 0vw 0.2604vw 0.2604vw;
  background: var(--Gray-Gray-50, #fafafa);
`;
const NoteTitle2 = styled.div`
  display: flex;
  background: var(--black-white-white-1000, #fff);
`;
const NoteElement = styled.div`
  padding: 0.7813vw 0.7813vw 0.7813vw 0.8vw;
  display: flex;
  font-size: 0.7813vw;
  justify-content: center;

  &.crew {
    font-weight: 700;
    border-bottom: 0.16vw solid var(--Primary-Red-700, #f3777a);
  }
  &:hover {
    font-weight: 700;
  }
`;
const ChatContainer = styled.div`
  height: 34.5vw;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const BackIcon = styled.img`
  margin: 0.9896vw;
  width: 1.25vw;
  height: 1.25vw;
`;
const HeaderLine = styled.div`
  display: flex;
  justify-content: center;
  width: 24.952vw;
  height: 0.1042vw;
  flex-shrink: 0;
  border-radius: 0.0521vw;
  background: var(--Gray-Gray-200, #eee);
`;
const HeaderP = styled.div`
  padding-top: 1.5625vw;
  color: var(--Gray-Gray-500, #9e9e9e);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
`;
const NotifyMenu = styled.div`
  display: flex;
  position: absolute;
  top: 10%;
  width: 7.92vw;
  padding: 0.42vw 0vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.26vw;
  border: 0.05vw solid var(--Gray-Gray-100, #f2f2f2);
  background: var(--black-white-white-1000, #fff);
`;
const HoverDiv = styled.div`
  display: flex;
  width: 7.81vw;
  padding: 0.78vw 1.04vw;
  align-items: center;
  gap: 0.52vw;
  &:hover {
    height: 2.6vw;
    background: var(--Gray-Gray-200, #eee);
  }
`;

const ChatBox = styled.div`
  margin: 0vw 1.0417vw 1.5625vw 1.0417vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: var(--Primary-Red-50, #fffafa);
`;
const ChatNotify = styled.img`
  width: 0.1042vw;
  height: 0.8333vw;
  flex-shrink: 0;
  margin: 0.7vw 0vw 0.7vw 16vw;
`;
const OtherUserInfo = styled.div`
  display: flex;
`;
const OtherUserName = styled.div`
  display: flex;
  padding-left: 0.5208vw;
  align-items: center;
  color: var(--Gray-Gray-500, #9e9e9e);

  /* Body/Body_small/medium */
  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 0.9375vw */
  letter-spacing: -0.0187vw;
`;
const OtherUserText = styled.div`
  margin-top: 0.625vw;
  margin-left: 1.0417vw;
  max-width: 80%;
  word-break: break-all;
  display: flex;
  padding: 0.7813vw 1.0417vw;
  align-items: center;
  gap: 0.5208vw;
  border-radius: 2.5521vw;
  background: var(--black-white-white-1000, #fff);
  color: var(--Gray-Gray-900, #17191a);

  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
`;

const Rectangle = styled.div`
  display: flex;
  align-items: center;
  height: 5.625vw;
  flex-shrink: 0;
  border-radius: 0vw 0vw 0.2604vw 0.2604vw;
  background: var(--black-white-white-1000, #fff);
`;
const ImageContainer = styled.div`
  width: 2.7031vw;
  height: 2.7083vw;
  margin-left: 0.7813vw;
  flex-shrink: 0;
  fill: var(--black-white-white-1000, #fff);
  border: 0.0521vw solid var(--Gray-Gray-100, #f2f2f2);
  border-radius: 3.125vw;
`;
const ImageIcon = styled.img`
  display: flex;
  padding: 0.5vw;
  position: absolute;
  left: 2.8%;
`;
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
`;
const BloodChatroom = ({ handleBloodChat, handleCrewChat, chatRoomId }) => {
  const [back, setBack] = useState(false);
  const [chats, setChats] = useState([]);
  const [notify, setNotify] = useState(false);
  const [notify2, setNotify2] = useState(false);
  const notifyMenuRef = useRef(null);
  const [chatInput, setChatInput] = useState('');
  //console.log(chatRoomId);
  const handleInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.on('chat', (newChat) => {
      setChats((prevChats) => [...prevChats, newChat]);
    });

    return () => {
      socket.off('chat');
    };
  }, []);

  const handleSendChat = async () => {
    console.log('handleSendChat called');
    if (!chatInput.trim()) return;

    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await axios.post(
        `https://bloodtrail.site/chatRoom/${chatRoomId}/chat`,
        { message: chatInput },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      if (response.status === 200) {
        const newChat = { message: chatInput };
        setChats((prevChats) => [...prevChats, newChat]);
        console.log(response.data);

        socket.emit('chat', {
          chatRoomId,
          message: chatInput,
        });

        setChatInput(''); // 입력 필드 초기화
      }
    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.post(
          `https://bloodtrail.site/chatRoom/${chatRoomId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setChats(response.result);
        console.log(chats);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchChats();
  }, [chatRoomId]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      notifyMenuRef.current &&
      !notifyMenuRef.current.contains(event.target)
    ) {
      setNotify(false);
      setNotify2(false);
    }
  };

  const handleNotify = () => {
    setNotify(true);
  };

  const handleNotify2 = () => {
    setNotify(false);
    setNotify2(true);
  };

  const handleBack = () => {
    setBack(true);
  };

  return (
    <Container ref={notifyMenuRef} onClick={handleClickOutside}>
      {!back && (
        <>
          <ChatContainer ref={notifyMenuRef} onClick={handleClickOutside}>
            <NoteTitle2 ref={notifyMenuRef} onClick={handleClickOutside}>
              <NoteElement className="crew">크루</NoteElement>
              <NoteElement className="blood" onClick={handleBloodChat}>
                지정헌혈 요청글
              </NoteElement>
            </NoteTitle2>

            <Header ref={notifyMenuRef} onClick={handleClickOutside}>
              <BackIcon src={arrow} alt="back_arrow" onClick={handleBack} />
              <HeaderLine />
            </Header>
            <HeaderP>채팅방이 개설되었습니다</HeaderP>
            {notify && (
              <NotifyMenu>
                <HoverDiv onClick={handleNotify2}>신고하기</HoverDiv>
              </NotifyMenu>
            )}
            {notify2 && (
              <NotifyMenu>
                <HoverDiv>불건전함</HoverDiv>
                <HoverDiv>욕설/비하</HoverDiv>
                <HoverDiv>사칭/사기</HoverDiv>
                <HoverDiv>금전적 요구</HoverDiv>
                <HoverDiv>기타</HoverDiv>
              </NotifyMenu>
            )}
            <ChatBox ref={notifyMenuRef} onClick={handleClickOutside}>
              <OtherUserInfo>
                <img
                  src={profile2}
                  alt="profile"
                  style={{ width: '2.0793vw', height: '2.0833vw' }}
                />
                <OtherUserName>ㅇㅇ</OtherUserName>
                <ChatNotify src={dot} alert="신고하기" onClick={handleNotify} />
              </OtherUserInfo>
              <OtherUserText>지정헌혈 요청글 채팅방입니다.</OtherUserText>
            </ChatBox>
          </ChatContainer>
          <Rectangle>
            <ImageContainer>
              <ImageIcon src={image} alt="사진 추가" />
            </ImageContainer>
            <InputText>
              <div className="inputText">
                <input
                  className="inputChat"
                  type="text"
                  placeholder="채팅을 입력해보세요. 텍스트박스  283px"
                  value={chatInput}
                  onChange={handleInputChange}
                />
                <button className="sendButton" onClick={handleSendChat}>
                  전송
                </button>
              </div>
            </InputText>
          </Rectangle>
        </>
      )}
      {back && (
        <CrewChat
          handleCrewChat={handleCrewChat}
          handleBloodChat={handleBloodChat}
        />
      )}
    </Container>
  );
};
export default BloodChatroom;
