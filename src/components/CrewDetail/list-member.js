import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from "../../styles/color";
import ItemMember from './item-member';
import ChatModal from '../Chat/ChatModal';

const CrewContainer = styled.div`
    width: 100%;
    margin: 1vw 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
`;

const StyleGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
`;

const DetailButton = styled.button`
    width: 13.6vw;
    height: 2.5vw;
    border: none;
    border-radius: 0.25vw;
    background-color: ${colors.crewPink};
    opacity: ${props => props.disabled ? "0.7" : "1"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    font-weight: 700;
    font-size: 0.9vw;
    color: ${colors.mainRed};
`;

const ListMember = ({ id, username }) => {
    const [crewData, setCrewData] = useState([]);
    const [crew, setCrew] = useState(null);
    const [isFull, setIsFull] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [userId, setUserId] = useState(null); 
    const [chatRoomId, setChatRoomId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get('https://bloodtrail.site/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                const user = response.data.result;

                setUserId(user._id);
            } catch (error) {
                console.error('Error: ', error);
            }
        };

        fetchUserId();
    }, []);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://bloodtrail.site/crew/detail/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.data.result && response.data.result.crew && response.data.result.crew.chat) {
                const chatRoomId = response.data.result.crew.chat.split("/")[2];
                setChatRoomId(chatRoomId);
                console.log(chatRoomId);
            }
            
            if (response.data.result && response.data.result.crew_member && response.data.result.crew_member.length > 0) {
                setCrewData(response.data.result.crew_member);
    
                const userIsMember = response.data.result.crew_member.some(member => member._id === userId);
                setIsJoined(userIsMember);
                //console.log(userIsMember);
            } else {
                window.location.href = '/crew';
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [id, userId]);

    const joinChatRoom = async (chatRoomId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.get(`https://bloodtrail.site/chatRoom/${chatRoomId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    
            console.log("채팅방 참여: ", response.data);
        } catch (error) {
            console.error('채팅방 참여 중 에러 발생:', error);
        }
    };
    

    const handleJoinCrew = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.post(`https://bloodtrail.site/crew/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    
            if(response.data.isSuccess == false) {
                alert("이미 크루에 가입했습니다.");
            } else {
                alert("크루에 가입하였습니다.");
                fetchData();
                setIsJoined(true);

                joinChatRoom(chatRoomId);
            }
    
            //console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const handleLeaveCrew = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await axios.patch(`https://bloodtrail.site/crew/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    
            if(response.data.isSuccess == true) {
                alert("크루를 탈퇴하셨습니다.");
                fetchData();
                setIsJoined(false);
            }

            //console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <CrewContainer>
                <StyleGrid>
                    {crewData.map((item, index) => (
                        <ItemMember
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            username={username}
                            participationRate={item.participationRate}
                        />
                    ))}
                </StyleGrid>
                
                <div className="button" style={{width: "100%", display: "flex", justifyContent: "center", gap: "0.65vw", margin: "3vw 0"}}>
                    <DetailButton>채팅하기</DetailButton>
                    {isJoined ? (
                    <DetailButton onClick={handleLeaveCrew}>크루 탈퇴하기</DetailButton>
                ) : (
                    <DetailButton disabled={isFull} onClick={handleJoinCrew}>크루 가입하기</DetailButton>
                )}
                </div>
            </CrewContainer>
        </>
    );
};

export default ListMember;
