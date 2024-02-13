import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/color';
import { Link } from 'react-router-dom';
import alert from '../../assets/images/alert-circle 1.png';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;
const SideBar = styled.div`
  width: 17%;
  padding-left: 2.5%;
`;
const MainConationer = styled.div`
  width: 67%;
`;

const Breadcrums = styled.div`
  display: flex;
  gap: 0.5vw;
  padding: 0.9375vw 0vw 0.9375vw 0.2083vw;
`;
const BreadcrumsP = styled.div`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;
const Title = styled.div`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 1.25vw;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1875vw; /* 175% */
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.4167vw;
`;
const LoginBox = styled.div`
  width: 24.4792vw;
  height: 22.2917vw;
  flex-shrink: 0;
  border-radius: 0.2604vw;
  border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .id {
    display: flex;
    width: 21.3542vw;
    margin-top: 4.8438vw;
    padding: 0.5208vw;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5208vw;
    border-bottom: 0.0521vw solid var(--Gray-Gray-500, #9e9e9e);
  }
  .password {
    display: flex;
    width: 21.3542vw;
    margin: 1.0417vw 0vw 4vw 0vw;
    padding: 0.5208vw;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5208vw;
    border-bottom: 0.0521vw solid var(--Gray-Gray-500, #9e9e9e);
  }
`;
const Alert = styled.div`
  display: inline-flex;
  position: absolute;
  top: 38%;
  left: 39.8%;
  padding: 0.5208vw;
  justify-content: center;
  align-items: center;
  gap: 0.5208vw;
  border-radius: 0.2604vw;
  background: var(--Primary-Red-200, #fff6f7);
`;
const AlertP = styled.div`
  color: var(--State-Red-500, #e31c22);

  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
  padding-left: 0.5208vw;
`;
const LoginButton = styled.button`
  width: 19.375vw;
  height: 2.6042vw;
  border-radius: 0.2604vw;
  background: var(--Primary-Red-900, #e95458);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375vw;
  font-style: normal;
  font-weight: 600;
  line-height: 1vw;
  margin-top: 1.75vw;
  .login {
    color: var(--black-white-white-1000, #fff);
  }
`;

const FindContainer = styled.div`
  display: flex;
  flex-direction: space;
  justify-content: space-between;
  margin: 1.0417vw 1.5625vw 1.5625vw 1.5625vw;
`;

const FindP = styled.p`
  color: var(--Gray-Gray-700, #464a4d);
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.0187vw;
`;

const Login = () => {
  const handleSubmit = async () => {
    console.log(userId);
    console.log(userPassword);
    try {
      const response = await axios.post('https://bloodtrail.site/auth/login', {
        email: inputValue.userId,
        password: inputValue.userPassword,
      });
      console.log(response.data);

      localStorage.setItem('accessToken', response.data.result.accessToken);
      localStorage.setItem('refreshToken', response.data.result.refreshToken);
      //   window.location.href = '/';
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPassword: '',
  });

  const { userId, userPassword } = inputValue;

  return (
    <Container>
      <SideBar />
      <MainConationer>
        <Breadcrums>
          <BreadcrumsP>홈</BreadcrumsP>
          <BreadcrumsP>{'>'}</BreadcrumsP>
          <BreadcrumsP>로그인</BreadcrumsP>
        </Breadcrums>
        <Title>로그인</Title>
        <LoginContainer>
          <LoginBox>
            <InputBox>
              <input
                className="id"
                type="text"
                placeholder="ID"
                value={inputValue.userId}
                onChange={(e) =>
                  setInputValue({ ...inputValue, userId: e.target.value })
                }
              />
              <input
                className="password"
                type="password"
                placeholder="PASSWORD"
                value={inputValue.userPassword}
                onChange={(e) =>
                  setInputValue({ ...inputValue, userPassword: e.target.value })
                }
              />
              {inputValue.userId === '' && inputValue.userPassword === '' && (
                <Alert>
                  <img
                    src={alert}
                    alt="alert-circle"
                    style={{ width: '1.2vw', height: '1.2vw' }}
                  ></img>
                  <AlertP>임시텍스트</AlertP>
                </Alert>
              )}
              {/* <LoginButton onClick ={()=>{
                                if (inputValue.userId===''&& inputValue.userPassword===''){
                                    return()};
                            }}> */}
              <LoginButton onClick={handleSubmit}>
                <input className="login" type="submit" value="로그인" />
              </LoginButton>
            </InputBox>

            <FindContainer>
              <Link to="/findPassword">
                <FindP>비밀번호찾기</FindP>
              </Link>
              <Link to="/signupService">
                <FindP>회원가입</FindP>
              </Link>
            </FindContainer>
          </LoginBox>
        </LoginContainer>
      </MainConationer>
    </Container>
  );
};

export default Login;
