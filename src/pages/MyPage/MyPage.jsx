import styled from 'styled-components';
import colors from '../../styles/color';
import { NavLink } from 'react-router-dom';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyDonation from '../../components/MyDonation/MyDonation';
import MyCrew from '../../components/MyCrew/MyCrew';
import Credit from '../../components/Credit/Credit';
import MyUpload from '../../components/MyUpload/MyUpload';
import ListMyUpload from '../../components/MyUpload/list-myupload';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Navigation/Sidebar';
import Breadcrums from '../../components/Navigation/Breadcrums';

const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const MyPageP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const MyPageP2 = styled.p`
  font-weight: 600;
  font-size: 0.75vw;
  color: ${colors.mainRed};
  margin-top: 1.5vw;
  cursor: pointer;
`;

const MyPageP3 = styled(NavLink)`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;

const RightTop = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const EditButton = styled.button`
  border: none;
  border-radius: 0.25vw;
  background-color: #fffafa;
  color: ${colors.mainRed};
  font-size: 0.75vw;
  padding: 0.5vw;
`;

const MyPage = ({ isCredit }) => {
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
          const formattedBirth = new Date(user.birth)
            .toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\./g, '')
            .split(' ')
            .join('.');

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
            premium: user.premium,
          });
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);

  return (
    <MyPageContainer>
      <div className="left" style={{ width: '17%', paddingLeft: '2.5%' }}>
        <MyPageP>내 정보</MyPageP>
        <MyPageP2>내 프로필</MyPageP2>
        <MyPageP style={{ marginTop: '1.5vw', fontSize: '0.75vw' }}>
          개인정보 처리방침
        </MyPageP>
        <MyPageP style={{ marginTop: '1.5vw', fontSize: '0.75vw' }}>
          서비스 이용약관
        </MyPageP>
        <MyPageP style={{ marginTop: '1.5vw', fontSize: '0.75vw' }}>
          회원탈퇴
        </MyPageP>
      </div>

      <div className="right" style={{ width: '67%' }}>
        <RightTop>
          <MyPageP3 to="/">홈</MyPageP3>
          <MyPageP3>{'>'}</MyPageP3>
          <MyPageP3>내 정보</MyPageP3>
          <MyPageP3>{'>'}</MyPageP3>
          <MyPageP3>내 프로필</MyPageP3>
        </RightTop>

        {userData && !userData.premium && <Credit />}

        <div
          className="profile"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '2vw 0 1vw 0',
          }}
        >
          <MyPageP style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>
            내 프로필
          </MyPageP>
          <EditButton>정보 수정하기</EditButton>
        </div>
        <MyProfile userData={userData}/>

        <div className="blood" style={{ width: '100%', marginTop: '2vw' }}>
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: '1vw',
            }}
          >
            나의 헌혈 증서
          </MyPageP>
          <MyDonation />
        </div>

        <div className="upload" style={{ width: '100%', marginTop: '2vw' }}>
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: '1vw',
            }}
          >
            내가 쓴 글
          </MyPageP>
          <MyUpload />
          <ListMyUpload />
        </div>

        <div
          className="mycrew"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2vw',
          }}
        >
          <MyPageP
            style={{
              fontSize: '0.8vw',
              fontWeight: 'bold',
              color: colors.black,
            }}
          >
            나의 헌혈 크루
          </MyPageP>
          <EditButton>크루 관리하기</EditButton>
        </div>
        <MyCrew />
      </div>
    </MyPageContainer>
  );
};

export default MyPage;
