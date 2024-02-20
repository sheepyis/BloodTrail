import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ItemChat from './item-crewchat';

const CrewContainer = styled.div`
    width: 100%;
`;

const ListChat = ({handleChatroom}) => {
    const [crewData, setCrewData] = useState([]);

    useEffect(() => {
        const fetchCrewData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get('https://bloodtrail.site/chatRoom/all', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                console.log(response.data);
                const crewChatRooms = response.data.result.chatRoomsWithChat.filter(item => item.chatRoom.type === "crew");
                setCrewData(crewChatRooms);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCrewData();
    }, []);

    return (
        <CrewContainer>
                {crewData.map((item, index) => (
                    <ItemChat
                        key={item.chatRoom._id}
                        id={item.chatRoom._id}
                        name={item.chatRoom.title}
                        recentChat={item.recentChat}
                        onClick={handleChatroom}
                    />
                ))}
        </CrewContainer>
    );
};

export default ListChat;
