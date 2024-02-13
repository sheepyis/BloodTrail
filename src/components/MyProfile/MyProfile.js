import styled from 'styled-components';
import colors from '../../styles/color';
import MyProfileImage from '../../assets/images/myProfile.png';
import Dot2 from '../../assets/images/dot2.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyProfileContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ProfileBox = styled.div`
  width: 96%;
  height: 7.95vw;
  padding: 0.7vw 1vw;
  background-color: #fffafa;
  border: none;
  border-radius: 0.25vw;
  display: flex;
  align-items: center;
`;

const MyProfileP = styled.p`
  font-size: 0.9vw;
  color: ${colors.black};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const BloodBox = styled.div`
  height: 2.2vw;
  border: none;
  border-radius: 5vw;
  padding: 1vw;
  background-color: #ffe7e7;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const PointBox = styled.div`
  background-color: ${colors.white};
  border: none;
  border-radius: 2.5vw;
  height: 3.1vw;
  padding: 0.5vw 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 1.2vw;
  color: ${colors.black};
`;

const MyProfile = () => {
  const [userData, setUserData] = useState(null);

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
          console.log(response);
          const user = response.data.result;
  
          // 날짜 형식 변환
          const formattedBirth = new Date(user.birth).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\./g, '').split(' ').join('.');
  
          setUserData({
            name: user.nickname,
            username: user.name,
            birth: formattedBirth,
            email: user.email,
            phone: user.phone,
            point: user.point,
            whole: user.id,
            plasma: user.id,
            platelet: user.id,
            _id: user._id,
          });
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);  

  return (
    <MyProfileContainer>
      <div className="left" style={{ width: '50%' }}>
        <ProfileBox>
          <div
            className="Left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0.8vw',
              width: '50%',
            }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.7vw' }}
            >
              <img
                src={MyProfileImage}
                alt="profile"
                style={{ width: '3vw', height: '3vw' }}
              />
              <div
                className="detail1"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5vw',
                }}
              >
                <MyProfileP>
                  {userData ? userData.name : 'Loading...'}
                </MyProfileP>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3vw',
                  }}
                >
                  <MyProfileP style={{ fontSize: '0.75vw' }}>
                    {userData ? userData.username : 'Loading...'}
                  </MyProfileP>
                  <img
                    src={Dot2}
                    alt="dot"
                    style={{ width: '0.15vw', height: '0.15vw' }}
                  />
                  <MyProfileP style={{ fontSize: '0.75vw' }}>
                    {userData ? userData.birth : 'Loading...'}
                  </MyProfileP>
                </div>
              </div>
            </div>
            <div
              className="detail"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.3vw' }}
            >
              <Box>
                <MyProfileP
                  style={{
                    fontWeight: '600',
                    fontSize: '0.75vw',
                    color: colors.crewGray2,
                  }}
                >
                  Email
                </MyProfileP>
                <MyProfileP
                  style={{
                    fontWeight: '500',
                    fontSize: '0.75vw',
                    color: colors.crewGray2,
                  }}
                >
                  {userData ? userData.email : 'Loading...'}
                </MyProfileP>
              </Box>
              <Box>
                <MyProfileP
                  style={{
                    fontWeight: '600',
                    fontSize: '0.75vw',
                    color: colors.crewGray2,
                  }}
                >
                  Number
                </MyProfileP>
                <MyProfileP
                  style={{
                    fontWeight: '500',
                    fontSize: '0.75vw',
                    color: colors.crewGray2,
                  }}
                >
                  {userData ? userData.phone : 'Loading...'}
                </MyProfileP>
              </Box>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
              width: '50%',
              height: '100%',
              border: 'none',
              borderRadius: '0.25vw',
              padding: '0.5vw',
              background: '#FFE7E7',
            }}
          >
            <MyProfileP style={{ fontWeight: '500' }}>Point</MyProfileP>
            <PointBox>{userData ? userData.point : '0'}점</PointBox>
          </div>
        </ProfileBox>
      </div>
      <div className="right" style={{ width: '50%' }}>
        <ProfileBox style={{ marginLeft: '4%' }}>
          <div style={{ height: '6vw' }}>
            <MyProfileP style={{ fontSize: '0.8vw', fontWeight: 'bold' }}>
              나의 헌혈 횟수
            </MyProfileP>
            <div
              className="detail3"
              style={{ display: 'flex', gap: '0.5vw', marginTop: '1.4vw' }}
            >
              <BloodBox>
                <MyProfileP style={{ fontSize: '0.75vw' }}>
                  전혈 {userData ? userData.whole : '0'} 회
                </MyProfileP>
              </BloodBox>
              <BloodBox>
                <MyProfileP style={{ fontSize: '0.75vw' }}>
                  혈장 {userData ? userData.plasma : '0'} 회
                </MyProfileP>
              </BloodBox>
              <BloodBox>
                <MyProfileP style={{ fontSize: '0.75vw' }}>
                  혈소판 {userData ? userData.platelet : '0'} 회
                </MyProfileP>
              </BloodBox>
            </div>
          </div>
        </ProfileBox>
      </div>
    </MyProfileContainer>
  );
};

export default MyProfile;
