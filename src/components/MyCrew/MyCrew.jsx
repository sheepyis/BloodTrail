import styled from 'styled-components';
import colors from '../../styles/color';
import Profile from '../../assets/images/profile.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyCrewDiv = styled.div`
    width: 30%;
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    padding: 1vw;
    margin-top: 1vw;
`;

const MyCrewP = styled.p`
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.crewGray};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ChatButton = styled.button`
    width: 100%;
    min-height: 2vw;
    border: none;
    border-radius: 0.25vw;
    background-color: #fff6f7;
    font-size: 0.75vw;
    font-weight: 600;
    color: ${colors.mainRed};
    margin-top: 1vw;
    cursor: pointer;
`;

const MyCrew = () => {
    const [myCrewData, setMyCrewData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then(response => {
                setMyCrewData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <MyCrewDiv>
            {myCrewData ? (
                <div className="crewBox" style={{ display: 'flex', gap: '0.65vw', alignItems: 'center' }}>
                    <img src={Profile} alt="profile" style={{ width: '2vw', height: '2vw' }} />
                    <div className="crewName" style={{ display: 'flex', flexDirection: 'column', gap: '0.1vw', width: "11.8vw" }}>
                        <MyCrewP>{myCrewData.title}</MyCrewP>
                        <MyCrewP style={{fontSize: "0.6vw", color: colors.crewGray2}}>{myCrewData.body}</MyCrewP>
                    </div>
                </div>
            ) : (
                <MyCrewP>크루 정보 없음</MyCrewP>
            )}
            <ChatButton>채팅하기</ChatButton>
        </MyCrewDiv>
    );
};

export default MyCrew;
