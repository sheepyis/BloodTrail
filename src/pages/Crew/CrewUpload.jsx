import styled from 'styled-components';
import colors from '../../styles/color';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import InputCrewUpload from '../../components/Input/input-crewupload';
import InputCrewUpload2 from '../../components/Input/input-crewupload2';
import axios from 'axios';
import io from 'socket.io-client'; 

const CrewContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const CrewP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const CrewP2 = styled.p`
  font-weight: 600;
  font-size: 0.75vw;
  color: ${colors.mainRed};
  margin-top: 1.5vw;
  cursor: pointer;
`;

const CrewP3 = styled(NavLink)`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;

const RightTop = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const RightMiddle = styled.div`
  margin-top: 2vw;
  padding-bottom: 1vw;
`;

const Upload = styled.button`
  width: 18.6vw;
  height: 2.5vw;
  border: none;
  border-radius: 0.25vw;
  background-color: ${colors.crewPink};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${colors.mainRed};
  font-size: 0.9vw;
  font-weight: 700;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${colors.lightGray};
    color: ${colors.gray};
    cursor: not-allowed;
`}
`;

const CrewUpload = () => {
  const refreshAccessToken = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken'); 
      const refreshToken = localStorage.getItem('refreshToken');
  
    if (!refreshToken) {
      console.log("no refresh!!!");
      return;
    }
  
    console.log(accessToken);
    console.log(refreshToken);
  
    const response = await axios.post(
        'https://bloodtrail.site/auth/regenerate-token',
        {}, // POST 요청 본문이 필요하지 않은 경우 빈 객체 전달
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'refresh': `Bearer ${refreshToken}`
          }
        }
    );
  
    console.log(response.data);
    
    } catch (error) {
    console.error('Error: ', error); // 에러 처리
    }
  };

  useEffect(() => {
    const init = async () => {
      await refreshAccessToken();
    };
    init();
  },[]);

  
  const [name, setCrewName] = useState('');
  const [goal_point, setTargetParticipationRate] = useState('');
  const [goal_rate, setTargetPoints] = useState('');
  const [description, setDescription] = useState('');
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [chat, setChat] = useState(''); 
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);
  }, []);

  const handleCrewNameChange = (name) => {
    setCrewName(name);
    console.log('크루 이름: ', name);
  };

  const handleAvailabilityChange = (availability) => {
    setIsNameAvailable(availability);
  };

  const handleTargetParticipationRateChange = (value) => {
    setTargetParticipationRate(value);
  };

  const handleTargetPointsChange = (value) => {
    setTargetPoints(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async () => {
    const formData = {
      name,
      goal_point,
      goal_rate,
      description,
    };
  
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  
    try {
      const response = await axios.post('https://bloodtrail.site/crew', formData, config);
  
      if (response.data.isSuccess === false) {
        alert("이미 크루에 가입했습니다.");
      } else {
        console.log(response.data);
        console.log('Success', formData);
  
        const chatRoomResponse = await axios.post(`https://bloodtrail.site/chatRoom`,
        { type: "crew", title: name }, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
        setChat(chatRoomResponse.data.result);

        const socket = io("https://bloodtrail.site");
        socket.emit("newRoom", { chatRoomId: chatRoomResponse.data.result.chatRoomId });

        window.location.href="/crew";
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <CrewContainer>
      <div className="left" style={{ width: '17%', paddingLeft: '2.5%' }}>
        <CrewP>헌혈크루</CrewP>
        <CrewP2>헌혈 크루 찾기</CrewP2>
      </div>

      <div className="right" style={{ width: '67%' }}>
        <RightTop>
          <CrewP3 to="/">홈</CrewP3>
          <CrewP3>{'>'}</CrewP3>
          <CrewP3>헌혈크루</CrewP3>
          <CrewP3>{'>'}</CrewP3>
          <CrewP3 to="/crew">헌혈 크루 찾기</CrewP3>
          <CrewP3>{'>'}</CrewP3>
          <CrewP3 to="/crewupload">헌혈 크루 등록하기</CrewP3>
        </RightTop>

        <RightMiddle>
          <CrewP style={{ fontSize: '1.2vw' }}>헌혈 크루</CrewP>
          <CrewP
            style={{
              fontSize: '0.6vw',
              color: colors.crewGray3,
              marginTop: '0.2vw',
            }}
          >
            헌혈 크루를 등록하거나 관리해보세요.
          </CrewP>
        </RightMiddle>

        <div
          className="crewBar"
          style={{
            width: '100%',
            height: '0.1vw',
            border: 'none',
            backgroundColor: colors.crewGray,
          }}
        />

        <div
          className="uploadBox"
          style={{ display: 'flex', marginTop: '1.5vw' }}
        >
          <div className="uploadLeft" style={{ width: '51.5%' }}>
            <div
              className="name"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5vw' }}
            >
              <CrewP style={{ fontWeight: '700', color: colors.black }}>
                크루 이름
              </CrewP>
              <CrewP
                style={{
                  fontWeight: '700',
                  color: colors.crewGray3,
                  fontSize: '0.6vw',
                }}
              >
                * 크루 이름은 최대 10자입니다.
              </CrewP>
            </div>

            <InputCrewUpload2
              type="text"
              placeholder="크루 이름을 입력하세요."
              onNameChange={handleCrewNameChange}
              onAvailabilityChange={handleAvailabilityChange}
            />

            <CrewP
              style={{
                fontWeight: '700',
                color: colors.black,
                marginTop: '2vw',
              }}
            >
              목표 헌혈 참여율
            </CrewP>
            <InputCrewUpload
              type="text"
              placeholder="목표 헌혈 참여율을 입력하세요."
              onChange={handleTargetParticipationRateChange}
            />
          </div>

          <div className="uploadRight" style={{ width: '48.5%' }}>
            <CrewP style={{ fontWeight: '700', color: colors.black }}>
              목표 헌혈 포인트
            </CrewP>
            <InputCrewUpload
              type="text"
              placeholder="목표 헌혈 포인트를 입력하세요."
              onChange={handleTargetPointsChange}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div
          className="introduce"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5vw',
            marginTop: '2vw',
          }}
        >
          <CrewP style={{ fontWeight: '700', color: colors.black }}>
            크루 설명
          </CrewP>
          <CrewP
            style={{
              fontWeight: '700',
              color: colors.crewGray3,
              fontSize: '0.6vw',
            }}
          >
            * 크루 설명은 최대 20자입니다.
          </CrewP>
        </div>
        <InputCrewUpload
          type="text"
          placeholder="크루 설명을 입력하세요."
          onChange={handleDescriptionChange}
          style={{ width: '100%' }}
        />

        <div
          className="crewBar"
          style={{
            width: '100%',
            height: '0.1vw',
            border: 'none',
            backgroundColor: colors.lightGray,
            margin: '2vw 0',
          }}
        />

        <div
          className="uploadBox"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '2vw 0',
          }}
        >
          <Upload
            disabled={
              !setIsNameAvailable || !goal_point || !goal_rate || !description
            }
            onClick={handleSubmit}
          >
            크루 등록하기
          </Upload>
        </div>
      </div>
    </CrewContainer>
  );
};

export default CrewUpload;
