import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/color';
import { Link } from 'react-router-dom';
import group208 from '../../assets/images/Group 208.png';
import group209 from '../../assets/images/Group 209.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  padding-left: 0.5208vw;
`;
const SubTitile = styled.div`
  color: var(--Gray-Gray-500, #9e9e9e);

  /* Body/Body_small/medium */
  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 0.9375vw */
  letter-spacing: -0.0187vw;
`;

const LineContainer = styled.div`
  margin: 1.0417vw 0vw 1.5625vw 0vw;
  display: flex;
  flex-direction: row;
  width: 67%;
`;
const LineImg = styled.img`
  width: 0.7813vw;
  height: 0.7813vw;
  flex-shrink: 0;
  z-index: 1;
`;
const Line = styled.div`
  margin-top: 0.3646vw;
  height: 0vw;
  width: 32.5vw;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0vw;
  border-top: 0.0521vw dashed var(--Gray-Gray-500, #9e9e9e);
`;
const RedLine = styled.div`
  margin-top: 0.3646vw;
  height: 0vw;
  width: 32.5vw;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0vw;
  border-top: 0.0521vw solid var(--Primary-Red-700, #f3777a);
`;
const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.0417vw 0vw 5.7292vw 0.5208vw;
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 0.9375vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625vw; /* 166.667% */
`;
const Name = styled.div`
  padding-bottom: 1.6667vw;
  .name {
    display: flex;
    width: 61.4583vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);
    color: var(--Gray-Gray-500, #9e9e9e);

    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const Nickname = styled.div`
  padding-bottom: 1.6667vw;
  .nickname {
    display: flex;
    width: 61.4583vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);

    color: var(--Gray-Gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const Birth = styled.div`
  padding-bottom: 1.6667vw;
  .birth {
    display: flex;
    width: 28.8021vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);

    color: var(--Gray-Gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const Password = styled.div`
  padding-bottom: 1.6667vw;
  .password {
    display: flex;
    width: 61.4583vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);

    color: var(--Gray-Gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const PasswordTitle = styled.div`
  display: flex;
  align-items: center;
`;
const PasswordInfo = styled.div`
  margin: 6px 10px 6px 10px;
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  letter-spacing: -0.36px;
`;
const PhoneNumber = styled.div`
  padding-bottom: 1.6667vw;
  .phoneNumber {
    display: flex;
    width: 61.4583vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);

    color: var(--Gray-Gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const VerificationBox = styled.div`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.9375vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625vw; /* 166.667% */
`;
const Verification = styled.div`
  display: flex;
  flex-direction: row;
  .register {
    display: flex;
    position: relative;
  }
  .verificationCode {
    display: flex;
    width: 28.8021vw;
    height: 3.125vw;
    padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
    margin-top: 0.5208vw;
    align-items: center;
    gap: 0.8333vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);

    color: var(--Gray-Gray-500, #9e9e9e);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }

  .registerButton {
    display: flex;
    position: absolute;
    height: 2.0833vw;
    top: 28%;
    right: 2%;
    padding: 0.5208vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 0.2604vw;
    background: var(--Primary-Red-50, #fffafa);

    color: var(--Primary-Red-900, #e95458);

    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
  }
`;
const Email = styled.div`
  display: flex;
  width: 28.8021vw;
  height: 3.125vw;
  padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
  margin-top: 0.5208vw;
  margin-left: 0.5208vw;
  align-items: center;
  gap: 0.8333vw;
  flex-shrink: 0;
  border-radius: 0.2604vw;
  border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);
`;
const EmailP = styled.div`
  width: 26.0417vw;
  color: var(--Gray-Gray-500, #9e9e9e);

  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
`;
const EmailBox = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 98%;
  right: 25.3%;
  z-index: 1;
  width: 27.2917vw;
  margin: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
  border: 0.05vw solid ${colors.lightGray};
  background-color: ${colors.white};
`;
const HoverDiv = styled.div`
  display: flex;
  width: 27.2917vw;
  height: 3.125vw;
  padding: 0.5208vw 0.5208vw 0.5208vw 0.7813vw;
  align-items: center;
  gap: 0.8333vw;
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
  &:hover {
    font-weight: 600;
    background-color: ${colors.lightGray};
  }
`;
const NextButton = styled.div`
  display: flex;
  justify-content: center;

  .nextButton {
    width: 17.7083vw;
    height: 2.0833vw;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    color: var(--Primary-Red-900, #e95458);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.0417vw; /* 133.333% */
    border-radius: 0.2604vw;
    background: var(--Primary-Red-200, #fff6f7);
  }
`;
const ErrorMessage = styled.div`
  height: 0.1w;
  color: #E95458;
  font-size: 0.7vw;
`;

const Signup = () => {
  const [selectedEmail, setSelectedEmail] = useState('email.com');
  const [isVisible, setIsVisible] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [birthError, setBirthError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleEmail = (email) => {
    setInputValue((prevState) => ({
      ...prevState,
      userEmail: prevState.userEmail + email
    }));
    setIsVisible(false);
  };

  const [inputValue, setInputValue] = useState({
    userName: '',
    userNickname: '',
    userBirth: '',
    userPassword: '',
    userPhoneNumber: '',
    userEmail: '',
  });

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, userName: e.target.value });
  };

  const handleInputChange2 = (e) => {
    setInputValue({ ...inputValue, userNickname: e.target.value });
  };

  const handleInputChange3 = (e) => {
    setInputValue({ ...inputValue, userBirth: e.target.value });
  };

  const handleInputChange4 = (e) => {
    setInputValue({ ...inputValue, userPassword: e.target.value });
  };

  const handleInputChange5 = (e) => {
    setInputValue({ ...inputValue, userPhoneNumber: e.target.value });
  };

  const handleInputChange6 = (e) => {
    setInputValue({ ...inputValue, userEmail: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError('');
    setNicknameError('');
    setBirthError('');
    setPasswordError('');
    setPhoneError('');
    setEmailMessage('');

    let isValid = true;
    if (!inputValue.userName.trim()) {
      setNameError('이름을 입력해주세요.');
      isValid = false;
    }
    if (!inputValue.userNickname.trim()) {
      setNicknameError('닉네임을 입력해주세요.');
      isValid = false;
    }
    if (!inputValue.userBirth.trim()) {
      setBirthError('생년월일을 입력해주세요.');
      isValid = false;
    }
    if (!inputValue.userPassword.trim()) {
      setPasswordError('비밀번호를 입력해주세요.');
      isValid = false;
    }
    if (!inputValue.userPhoneNumber.trim()) {
      setPhoneError('전화번호를 입력해주세요.');
      isValid = false;
    }
    if (!inputValue.userEmail.trim()) {
      setEmailMessage('이메일을 입력해주세요.');
      isValid = false;
    }
  
    if (!isValid) {
      return; // 입력값이 유효하지 않으면 여기서 함수 종료
    }
  

    try {
      const {
        userName,
        userNickname,
        userBirth,
        userPassword,
        userPhoneNumber,
        userEmail,
      } = inputValue;
      const userData = {
        name: userName,
        nickname: userNickname,
        birth: userBirth,
        password: userPassword,
        phone: userPhoneNumber,
        email: userEmail,
      };
      const response = await axios.post(
        'https://bloodtrail.site/auth/register',
        userData
      );

      console.log(response.data);
        
      if (response.data.isSuccess) {
        window.location.href = "/signupService/signup/finish";
      }
      else {
        switch (response.data.message) {
          case "올바른 이메일 주소를 입력해주세요.":
            setEmailMessage("올바른 이메일 주소를 입력해주세요.");
            break;
          case "이미 존재하는 이메일입니다.":
            setEmailMessage("이미 존재하는 이메일입니다.");
            break;
          case "이미 존재하는 닉네임입니다.":
            setNicknameError("이미 존재하는 닉네임입니다.");
            break;
          case "올바른 핸드폰 번호를 입력해주세요.":
            setPhoneError("올바른 핸드폰 번호를 입력해주세요.");
            break;
          case "올바른 비밀번호 형식을 지켜주세요.":
            setPasswordError("올바른 비밀번호 형식을 지켜주세요.");
            break;
          default:
            setEmailMessage("서버 에러, 관리자에게 문의 바랍니다");
            break;
        }
      }
    } catch (error) {
      console.error('에러: ', error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://bloodtrail.site/auth/check-email',
        { email: userEmail }
      );
      if (response.data.isSuccess){
        setEmailMessage('이메일 인증 완료');
      }
      else {
        setEmailMessage('이메일 인증 실패');
      }
      console.log(inputValue);
      console.log(response.data);
    } catch (error) {
      console.error('에러: ', error);
      setEmailMessage('이메일 인증 중 오류가 발생했습니다.')
    }
  };

  const {
    userName,
    userNickname,
    userBirth,
    userPassword,
    userPhoneNumber,
    userEmail,
  } = inputValue;

  return (
    <Container>
      <SideBar />
      <MainConationer>
        <Breadcrums>
          <BreadcrumsP>홈</BreadcrumsP>
          <BreadcrumsP>{'>'}</BreadcrumsP>
          <BreadcrumsP>로그인</BreadcrumsP>
          <BreadcrumsP>{'>'}</BreadcrumsP>
          <BreadcrumsP>회원가입</BreadcrumsP>
        </Breadcrums>

        <Title>회원가입</Title>
        <SubTitile>약관에 동의해주세요.</SubTitile>

        <LineContainer>
          <LineImg src={group208} alt="group 208" />
          <RedLine />
          <LineImg src={group208} alt="group 208" />
          <Line />
          <LineImg src={group209} alt="group 209" />
        </LineContainer>

        <JoinBox>
          <Name>
            이름
            <input
              className="name"
              type="text"
              placeholder="실명을 입력해주세요"
              name="userName"
              value={inputValue.userName}
              onChange={handleInputChange}
            />
          <ErrorMessage>{nameError}</ErrorMessage>
          </Name>
          <Nickname>
            닉네임
            <input
              className="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              nickname="userNickname"
              value={inputValue.userNickname}
              onChange={handleInputChange2}
            />
          <ErrorMessage>{nicknameError}</ErrorMessage>
          </Nickname>
          <Birth>
            생년월일
            <input
              className="birth"
              type="text"
              placeholder="00 년 00 월 00 일"
              birth="userBirth"
              value={inputValue.userBirth}
              onChange={handleInputChange3}
            />
            <ErrorMessage>{birthError}</ErrorMessage>
          </Birth>
          <Password>
            <PasswordTitle>
              비밀번호
              <PasswordInfo>* 8자 이상 작성해주세요</PasswordInfo>
            </PasswordTitle>
            <input
              className="password"
              type="password"
              placeholder="비밀번호를 선택해주세요"
              password="userPassword"
              value={inputValue.userPassword}
              onChange={handleInputChange4}
            />
            <ErrorMessage>{passwordError}</ErrorMessage>
          </Password>
          <PhoneNumber>
            전화번호
            <input
              className="phoneNumber"
              type="text"
              placeholder="전화번호를 입력해주세요"
              phoneNumber="userPhoneNumber"
              value={inputValue.userPhoneNumber}
              onChange={handleInputChange5}
            />
            <ErrorMessage>{phoneError}</ErrorMessage>
          </PhoneNumber>

          <VerificationBox>
            이메일
            <Verification>
              <div className="register">
                <input
                  className="verificationCode"
                  type="text"
                  placeholder="텍스트를 입력해주세요"
                  email="userEmail"
                  value={inputValue.userEmail}
                  onChange={handleInputChange6}
                />
                <button className="registerButton" onClick={handleSubmit2}>
                  인증하기
                </button>
              </div>
              <Email onClick={() => setIsVisible(!isVisible)}>
                <EmailP style={{ fontSize: '0.7813vw' }}>
                  {selectedEmail}
                </EmailP>
                <img
                  src={ArrowDown}
                  alt="arrow-down"
                  style={{ width: '1.2vw', height: '1.2vw' }}
                />
              </Email>
              {selectedEmail && (
                <EmailBox show={isVisible}>
                  <HoverDiv onClick={() => handleEmail('@gmail.com')}>
                    @gmail.com
                  </HoverDiv>
                  <HoverDiv onClick={() => handleEmail('@naver.com')}>
                    @naver.com
                  </HoverDiv>
                  <HoverDiv onClick={() => handleEmail('@email.com')}>
                    @email.com
                  </HoverDiv>
                  <HoverDiv onClick={() => handleEmail('@email.com')}>
                    @email.com
                  </HoverDiv>
                </EmailBox>
              )}{' '}
            </Verification>
            <ErrorMessage>{emailMessage}</ErrorMessage>
          </VerificationBox>
        </JoinBox>

        <NextButton onClick={handleSubmit}>
          <input className="nextButton" type="submit" value="회원가입" />
        </NextButton>
      </MainConationer>
    </Container>
  );
};

export default Signup;