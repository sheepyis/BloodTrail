import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ItemBlood from './item-bloodchat';

const CrewContainer = styled.div`
    width: 100%;
`;

const ListBlood = ({handleChatroom}) => {
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
                const crewChatRooms = response.data.result ? 
                                        response.data.result.chatRoomsWithChat.filter(item => item.chatRoom.type === "blood") :[];
                setCrewData(crewChatRooms);
                console.log(crewChatRooms);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCrewData();
    }, []);

    return (
        <CrewContainer>
                {crewData.map((item, index) => (
                    <ItemBlood
                        key={item.chatRoom._id}
                        id={item.chatRoom._id}
                        name={item.chatRoom.title}
                        recentChat={item.recentChat}
                        onClick={() => handleChatroom(item.chatRoom._id)}
                    />
                ))}
        </CrewContainer>
    );
};

export default ListBlood;
