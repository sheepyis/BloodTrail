import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../assets/images/profile.png'


const LiveContainer = styled.div`
  margin-top: 10vw;
  margin-bottom: 20vw;
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatLayout = styled.div`
  width: 60vw;
  height: 27.8vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #FAFAFA;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessageList = styled.div`
  font-size: 0.7vw;
  flex-grow: 1;
  padding: 1vw;
  overflow-y: auto;
`;

const InputArea = styled.div`
  display: flex;
  padding: 1vw;
  background-color: #FFE7E7;
`;

const InsideInputArea = styled.div`
  display: flex;
  justify-content: space-between; // Align items on both ends
  align-items: center; // Vertically align items in the middle
  width: 100%;
  background-color: #FFFFFF;
  padding: 0.3vw;
  border-radius: 5vw;
`;

const Input = styled.input`
  width: 94%;
  padding: 0vw 0.5vw;
  font-size: 0.7vw;
`;

const SendButton = styled.button`
  padding: 0.2vw 0.8vw;
  font-size: 0.7vw;
  border: 0.1vw solid #FFB2B5;
  border-radius: 5vw;
  cursor: pointer;

  &:hover {
    background-color: #fc7a8a;
  }
`;

const ProfilePic = styled.img`
  width: 2vw; // 프로필 사진 크기, 필요에 따라 조절
  height: 2vw; // 프로필 사진 크기, 필요에 따라 조절
  border-radius: 50%; // 원형으로 만들기
  margin-right: 0.5vw; // 유저네임과의 간격
`;

const UserName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const UserMessageInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  margin-bottom: 0.7vw;
`;

const Message = styled.div`
  max-width: 60%; // 메시지 최대 너비 설정
  background: ${({ isSender }) => (isSender ? '#FFE7E7' : '#FFFFFF')}; // 보낸 사람에 따른 배경색 변경
  padding: 0.5vw;
  margin-bottom: 0.5vw;
  border-radius: 1vw;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: ${({ isSender }) => (isSender ? 'right' : 'left')}; // 보낸 사람에 따른 텍스트 정렬
  color: #17191A;
`;

const DropDownContainer = styled.div`
  display: flex;
  justify-content: center; 
  position: relative;
  margin-top: 1vw;
  background-color: transparent;
`;

const DropDownButton = styled.button`
  padding: 0.5vw 2vw;
  font-size:0.7vw;
  border: none;
  background-color: #FFE7E7;
  color: #17191A; 
  border-radius: 1.5vw;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:after {
    content: '▼'; // 드롭다운 화살표 추가
    font-size: 0.8em;
    margin-left: 0.5vw;
  }
`;

const DropDownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column; 
  position: absolute;
  background-color: #FFFFFF;
  top: 2.5vw;
  border-radius: 0.6vw; 
  font-size: 0.7vw;
  text-align: center; // 이 항목으로 내부 텍스트들을 중앙 정렬합니다.
`;

const DropDownItem = styled.a`
  color: #17191A;
  padding: 0.5vw 1vw;
  text-decoration: none;
  display: block;
  margin: 0.5vw;
  &:hover {
    background-color: #FFFAFA;
    color: #F3777A;
    border-radius: 6vw;
  }
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hi there!" },
    { sender: "Bob", text: "Hello!" },
    // ... additional messages
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messageEndRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage('');
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <LiveContainer>
      <ChatLayout>
        <ChatContainer>

          <DropDownContainer>
            <DropDownButton onClick={toggleDropDown}>자유라이브</DropDownButton>
              <DropDownContent isOpen={isDropDownOpen}>
                <DropDownItem href="#">나 지금 헌혈 중 라이브</DropDownItem>
                <DropDownItem href="#">헌혈 이야기 공유 라이브</DropDownItem>
              </DropDownContent>
          </DropDownContainer>

          <MessageList>
            {messages.map((message, index) => (
              <MessageContainer key={index} isSender={message.sender === "You"}>
                  <UserMessageInfo>
                    <ProfilePic src={ProfileImage} alt="Profile" />
                    <UserName>{message.sender}</UserName>
                  </UserMessageInfo>
                <Message isSender={message.sender === "You"}>{message.text}</Message>
              </MessageContainer>
            ))}
            <div ref={messageEndRef} />
          </MessageList>

          <InputArea>
            <InsideInputArea>
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="채팅을 입력해보세요"
              />
              <SendButton onClick={handleSend}>전송</SendButton>
            </InsideInputArea>
          </InputArea>
        </ChatContainer>
      </ChatLayout>
    </LiveContainer>
  );
}

export default ChatApp;