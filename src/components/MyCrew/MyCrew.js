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

const MyCrewP2 = styled.p`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChatButton = styled.button`
  width: 100%;
  padding: 0.5vw;
  border: none;
  border-radius: 0.25vw;
  background-color: #fff6f7;
  font-weight: 600;
  color: ${colors.mainRed};
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75vw;
`;

const ProfileImage = styled.img`
  width: 2vw;
  height: 2vw;
`;

const MyCrew = () => {
  const [myCrewData, setMyCrewData] = useState(null);
  const [member, setMember] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bloodtrail.site/crew/mycrew', config);
        setMyCrewData(response.data.result);
        console.log(response.data.result);
        setMember(response.data.result.crew_member);
        console.log(member);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleCrewDetail = () => {
    window.location.href = `/crewdetail/${myCrewData._id}`;
  };

  return (
    <>
      {myCrewData ? (
        <MyCrewDiv>
          <div
            className="crewBox"
            style={{ display: 'flex', gap: '0.65vw', alignItems: 'center' }}
          >
            <ProfileImage src={Profile} alt="profile" />
            <div
              className="crewName"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '85%',
              }}
            >
              <MyCrewP style={{cursor: "pointer"}}>{myCrewData.crew_name}</MyCrewP>
              <MyCrewP2>{myCrewData.description}</MyCrewP2>
            </div>
          </div>
          <ChatButton onClick={handleCrewDetail}>크루 보기</ChatButton>
        </MyCrewDiv>
      ) : (
        <MyCrewP style={{marginTop: "1vw"}}>크루 정보 없음</MyCrewP>
      )}

    </>
  );
};

export default MyCrew;