import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Rectangle = styled.div`
  width: 16.1vw;
  height: 16.1vw;
  border-radius: 5px;
  border: 1px solid var(--Gray-Gray-200, #EEE);
  background: var(--black-white-white-1000, #FFF);
  box-sizing: border-box; 
  display:flex;
  flex-direction: column;
`

const RecContent= styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:2.5vw;
`

const Recborder = styled.div`
  width: 15.96vw;
  height: 2.85vw;
  border-radius: 5px 5px 0 0; 
  background: var(--Gray-Gray-100, #F2F2F2);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative; 
  top: -1px; 
`

const Nextday = styled.p`
  color: var(--Gray-Gray-700, #464A4D);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
  letter-spacing: -0.36px;
`

const Dquestion = styled.p`
  color: var(--Primary-Red-700, #F3777A);
  font-family: Pretendard;
  font-size: 2.25vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Checkdate = styled.p`
  color: var(--Gray-Gray-900, #17191A);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw; 
  letter-spacing: -0.45px;
  margin: 0.5vw 0 1.75vw;
`

const LoginButton =styled.button`
  width: 13.5vw;
  height: 2vw;
  border-radius: 0.25vw;
  background: var(--Primary-Red-900, #E95458);
  color: var(--black-white-white-1000, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
`

const LoginContainer = styled.div`
  display:flex;
  flex-direction: space;
  justify-content: space-between;
  margin-top:1vw;
  margin-left:1vw;
  margin-right:1vw;
`

const FindP= styled.p`
  color: var(--Gray-Gray-700, #464A4D);
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
  letter-spacing: -0.36px;
`

const Dday=()=>{
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
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
          });
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);

    const handleLogout = () => {
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      setUserData(null);
      window.location.href='/';
    };

    const handleWithdraw = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.patch('https://bloodtrail.site/auth/withdraw', null, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        alert('탈퇴되었습니다.');
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        setUserData(null);
        console.log(response.data);
        window.location.href = '/';
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    return (
    <>
    <HomeContainer>
        <Rectangle>
            
            <Recborder>
                <Nextday>나의 다음 전혈 가능 날짜는?</Nextday>
            </Recborder>
            <RecContent>
            <Dquestion>
            {isLoggedIn ? (`D-${365}`) : ('D-?')}</Dquestion>
            <Checkdate>{userData ? `${userData.username}님 (${userData.birth})` : '나의 전혈 가능 날짜를 확인하세요'}</Checkdate>
            {isLoggedIn ? (
              <Link to="/mypage" style={{ textDecoration: 'none' }}>
                  <LoginButton>마이페이지</LoginButton>
              </Link>
              ) : (
              <Link to="/login" style={{ textDecoration: 'none' }}>
                  <LoginButton>로그인</LoginButton>
              </Link>
            )}
            </RecContent>
            {isLoggedIn ? (
            <LoginContainer>
              <FindP style={{cursor: "pointer"}} onClick={handleLogout}>로그아웃</FindP>
              <FindP style={{cursor: "pointer"}} onClick={handleWithdraw}>탈퇴하기</FindP>
            </LoginContainer>
            ) : (
            <LoginContainer>
                <Link to="./findPassword">
                    <FindP>비밀번호찾기</FindP>
                </Link>
                <Link to ="./signupService">
                    <FindP>회원가입</FindP>
                </Link>
            </LoginContainer>)}
        </Rectangle>
    </HomeContainer>
    </>
    );
}

export default Dday;