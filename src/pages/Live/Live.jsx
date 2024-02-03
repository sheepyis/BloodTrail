import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const LiveContainer = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ChatLayout = styled.div`
  width: 60%;
  height: 100%;
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

const ChatHeader = styled.div`
  padding: 1vw;
  color: black;
  font-size: 1.2em;
  text-align: center;
`;

const MessageList = styled.div`
  flex-grow: 1;
  padding: 1vw;
  overflow-y: auto;
`;

const InputArea = styled.div`
  height:1vw;
  display: flex;
  flex-grow: 1;
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

const Message = styled.div`
  width: auto;
  background: #FFFFFF;
  padding: 0.5vw;
  margin-bottom: 1vw;
  border-radius: 1vw;
  word-wrap: break-word;
  white-space: pre-wrap;
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

  return (
    <LiveContainer>
      <ChatLayout>
        <ChatContainer>
          <ChatHeader>자유라이브</ChatHeader>
          <MessageList>
            {messages.map((message, index) => (
            <Message key={index}>
              <strong>{message.sender}</strong>: {message.text}
            </Message>
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
};

export default ChatApp;