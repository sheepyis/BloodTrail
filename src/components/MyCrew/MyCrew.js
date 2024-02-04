import styled from 'styled-components';
import colors from '../../styles/color';
import Profile from '../../assets/images/profile.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MyCrewDiv = styled.div`
    width: 31%;
    min-height: 7vw;
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    padding: 1vw;
    margin-top: 1vw;
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
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
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyCrew = () => {
    const [myCrewData, setMyCrewData] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/3')
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
                <div className="crewBox" style={{ display: 'flex', gap: "0.65vw", alignItems: 'center'}}>
                    <img src={Profile} alt="profile" style={{ width: '1.5vw', height: "1.5vw" }} />
                    <div className="crewName" style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", width: "85%"}}>
                        <MyCrewP>{myCrewData.name}</MyCrewP>
                        <MyCrewP style={{fontSize: "0.6vw", color: colors.crewGray2}}>{myCrewData.email}</MyCrewP>
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
