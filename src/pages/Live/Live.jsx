import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProfileImage from '../../assets/images/profile.png'
import axios from 'axios';



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
  const [chatRoomInfo, setChatRoomInfo] = useState(''); // 채팅방 정보
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatroomId, setChatroomId] = useState([
    {name : "자유 라이브", id : "65bfc7053498e7225dead3a0"},
    {name : "나 지금 헌혈 중 라이브", id : "65bfc72d3498e7225dead3a2"},
    {name : "헌혈 이야기 공유 라이브", id : "65bfc7543498e7225dead3a4"},
  ])
  const [currentChatRoomId, setCurrentChatRoomId] = useState("65bfc7053498e7225dead3a0"); // 현재 선택된 채팅방 ID
  const [currentUserNickname, setCurrentUserNickname] = useState("현재로그인한사용자ID"); // 현재 로그인한 사용자의 ID

  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get('https://bloodtrail.site/auth/profile', config)
      .then((response) => {
        if (response.data) {
          const user = response.data.result;
          setCurrentUserNickname(user.nickname);
          console.log(user.nickname);
        }
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, []);


  const handleSend = async () => {
    if (newMessage.trim()) {
      try {
        // 서버에 채팅 메시지를 보내는 API 호출
        const response = await axios.post(
          `https://bloodtrail.site/chatRoom/${currentChatRoomId}/chat`, // 채팅방 ID를 URL에 포함
          {
            message: newMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 인증 토큰
            },
          }
        );
  
        if (response.data) {
          setMessages([...messages, { sender: currentUserNickname, text: newMessage }]);
          setNewMessage('');
  
          fetchChatRoomDetails(currentChatRoomId);
        }
      } catch (error) {
        console.error("메시지 전송 실패:", error);
      }
    }
  };

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };


  const fetchChatRoomDetails = async (chatRoomId) => {
    try {
      const response = await axios.get(`https://bloodtrail.site/chatRoom/${chatRoomId}`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      
      if (response.data && response.data.result) {
        setChatRoomInfo(response.data.result.chatRoom);
        const formattedMessages = response.data.result.chats.map(chat => ({
          sender: chat.writer.nickname, // 채팅 작성자의 닉네임을 sender로 사용
          text: chat.message, // 채팅 메시지 내용
          id: chat._id, // 채팅 메시지의 고유 ID
          chatRoom: chat.chatRoom, // 채팅방 ID
          createdAt: chat.created_at, // 메시지 생성 시간
        }));
        setMessages(formattedMessages);
        console.log(response);
      }
    } catch (error) {
      console.error("채팅방 정보를 불러오는 데 실패했습니다.", error);
    }
  };
  
  useEffect(() => {
    if (currentChatRoomId) {
      fetchChatRoomDetails(currentChatRoomId);
    }
  }, [currentChatRoomId]);

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
              <MessageContainer key={index} isSender={message.sender === currentUserNickname}>
                  <UserMessageInfo>
                    <ProfilePic src={ProfileImage} alt="Profile" />
                    <UserName>{message.sender}</UserName>
                  </UserMessageInfo>
                <Message isSender={message.sender === currentUserNickname}>{message.text}</Message>
              </MessageContainer>
            ))}
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