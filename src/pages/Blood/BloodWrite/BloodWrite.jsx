import styled from 'styled-components';
import colors from '../../../styles/color';
import { NavLink } from 'react-router-dom';
import React from 'react';
import ArrowDown from '../../../assets/images/arrow-down.png';
import Image from '../../../assets/images/image 1.png';
import Line from '../../../assets/images/divider_write.png';
import { css } from 'styled-components';
import { useState } from 'react';
import Mark from '../../../assets/images/alert-circle 1.png';
import Mark2 from '../../../assets/images/check-square 1.png';
import { useEffect } from 'react';
import { useRef } from 'react';
import CreditModal from '../../../components/Credit/CreditModal';
import Sidebar from '../../../components/Navigation/Sidebar';
import Breadcrums from '../../../components/Navigation/Breadcrums';
import axios from 'axios';

const CreditModalContainer = styled.div`
  position: fixed;
  left: 50%;
  z-index: 10;
  background-color: ${colors.white};
  border: 0.05vw solid #f2f2f2;
  border-radius: 0.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const RightMiddle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  gap: 0.5vw;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5vw;
`;

const TitleInput = styled.input`
  width: 40vw;
  flex-grow: 1;
  height: 2.5vw;
  flex-shrink: 0;
  border-bottom: 1px solid var(--Gray-Gray-300, #d1d1d1);
  background: var(--black-white-white-1000, #fff);
  color: var(--Gray-Gray-500, #9e9e9e);
  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.75vw;
  padding-left: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  padding-bottom: 0.75vw;

  &::placeholder {
    color: var(--Gray-Gray-500, #9e9e9e);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.75vw;
    padding-left: 0.75vw;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }
`;

const BlankBox = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 30.6vw;
  fill: var(--black-white-white-1000, #fff);
  stroke-width: 1px;
  stroke: var(--Gray-Gray-50, #fafafa);
`;

const ToolBox = styled.div`
  height: 3.65vw;
  background: var(--Gray-Gray-100, #f2f2f2);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 1vw;
`;

const Imageplus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1vw;
  margin-left: 0.75vw;
  cursor: pointer;
`;

const ImageP = styled.p`
  color: var(--Gray-Gray-700, #464a4d);

  /* Body/Body_small/medium */
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.36px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BoldText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Roboto;
  font-size: 0.9vw;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 166.667% */
`;

const ItalicText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  cursor: pointer;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

const UnderlineText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration-line: underline;
`;

const MidlineText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  text-decoration-line: strikethrough;
`;

const InputContent = styled.div`
  width: 100%;
  height: 78%;
  flex-shrink: 0;
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
  padding: 1.5vw;
  border: 1px solid #fafafa;
  background: #fff;
  outline: none;
  resize: none;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;

  &::placeholder {
    color: var(--Gray-Gray-500, #9e9e9e);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.75vw;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
  }

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: bold;
    `}
  ${({ isItalic }) =>
    isItalic &&
    css`
      font-style: italic;
    `}
  ${({ isUnderline }) =>
    isUnderline &&
    css`
      text-decoration: underline;
    `}
  ${({ isStrikethrough }) =>
    isStrikethrough &&
    css`
      text-decoration: line-through;
    `}
`;

const EnrollContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Enroll = styled.button`
  width: 18.6vw;
  height: 2.5vw;
  border-radius: 5px;
  background: var(--Primary-Red-200, #fff6f7);
  color: var(--Primary-Red-900, #e95458);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Body/SubTitle/Bold */
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 166.667% */
`;

const InformContainer = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 12.9vw;
  background: var(--Gray-Gray-50, #fafafa);
  padding-left: 1.5vw;
  padding-top: 1.5vw;
  padding-bottom: 2.5vw;
  padding-right: 1.5vw;
`;

const PatientContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const PatientP = styled.p`
  color: var(--Gray-Gray-900, #17191a);

  /* Body/SubTitle/Medium */
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 500;
`;

const BlockContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const InformBlock = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 2.7vw;
  padding: 0.75vw 0.3vw;
  align-items: center;
  gap: 1vw;
  border-radius: 5vw;
  background: var(--black-white-white-1000, #fff);
`;

const InformBlocks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

const TextContainer = styled.div`
  margin-left: 0.5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 0.2vw;
`;

const InforText = styled.p`
  margin-left: 0.2vw;
  color: var(--Gray-Gray-900, #17191a);
  /* Body/Body/Semi */
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
`;

const ContentsText = styled.input`
  margin-left: ${(props) => props.marginLeft};
  color: var(--Gray-Gray-700, #464a4d);
  width: ${(props) => props.width};
  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

const SelectInput = styled.select`
  height: 2.5vw;
  background: var(--black-white-white-1000, #fff);
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw;
  padding-left: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw;
  letter-spacing: -0.3px;
  margin-left: 0.5vw;
  -webkit-appearance: none;
`;

const DateInput = styled.input`
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 500;
  height: 1.5vw;
  padding: 0.375rem 0.75rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  -webkit-appearance: none;
`;

const BloodWrite = ({ isCredit }) => {
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
  
    console.log("refresh complete!!!!!!!!!!!!!!!!!!!!");
    console.log(response.data);
    
    } catch (error) {
    console.error('Error refreshing access token: ', error); // 에러 처리
    }
  };

  useEffect(() => {
    const init = async () => {
      await refreshAccessToken();
    };
    init();
  },[]);
  
  const [imageFile, setImageFile] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [bloodProduct, setBloodProduct] = useState('-');
  const [bloodType, setBloodType] = useState('-');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [receiver, setReceiver] = useState('');
  const [hospital, setHospital] = useState({
    name: '',
    number: '010-0001-0002',
  });

  const [showCreditModal, setShowCreditModal] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get('https://bloodtrail.site/auth/profile', config)
      .then((response) => {
        if (response.data) {
          const user = response.data.result;
          if (user.premium.payment) {
            setShowCreditModal(false);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSubmit = async () => {
    const title = titleEditableRef.current
      ? titleEditableRef.current.value
      : '';
    const content = contentEditableRef.current
      ? contentEditableRef.current.innerText
      : '';


    const formData = new FormData();

    formData.append('title', title);
    formData.append('content', content);
    formData.append('blood_type', bloodType);
    formData.append('blood_product', bloodProduct);
    formData.append('start_date', start_date);
    formData.append('end_date', end_date);
    formData.append('receiver', registrationNumber);
    formData.append('hospital', JSON.stringify(hospital));

    if (imageFile) {
      formData.append('files', imageFile);
    }

    try {
      console.log(formData);
      const response = await axios.post(
        'https://bloodtrail.site/blood',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 인증 토큰 추가
          },
        }
      );

      console.log(response);

      if (response.data.isSuccess) {
        console.log('성공:', response.data);
        alert('글이 성공적으로 등록되었습니다.');
        const _id = response.data.result._id;
        window.location.href = "/blood";
      } else {
        console.error('실패:', response.data.message);
        alert(`${response.data.message}`);
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      alert('글 등록 중 문제가 발생했습니다.');
    }
  };

  const [inputCompleted, setInputCompleted] = useState({
    bloodProduct: false,
    requireDay: false,
    requirePlace: false,
    bloodType: false,
  });

  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

  useEffect(() => {
    const allCompleted = Object.values(inputCompleted).every(
      (status) => status === true
    );
    setAllFieldsCompleted(allCompleted);
  }, [inputCompleted]);

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const titleEditableRef = useRef(null);
  const contentEditableRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(file);

      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = '50%';
      contentEditableRef.current.appendChild(img);
    }
  };

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleStrikethrough = () => setIsStrikethrough(!isStrikethrough);

  const bloodTypeOptions = [
    '-',
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ];
  const bloodProductOptions = [
    '-',
    'WB',
    'RBC',
    'F-RBC',
    'W-RBC',
    'WBC',
    'PLT',
    'A-PLT',
    'W-PLT',
    'FFP',
    'FP',
    'CRYO',
    'CR-P',
  ];
  const requirePlaceOptions = [
    '-',
    '건국대병원',
    '서울대병원',
    '연세대 세브란스병원',
    '가톨릭대학교 서울성모병원',
  ];

  const [bloodProductImage, setBloodProductImage] = useState(Mark);
  const [bloodTypeImage, setBloodTypeImage] = useState(Mark);
  const [dateImage, setDateImage] = useState(Mark);

  useEffect(() => {
    setInputCompleted((prevState) => ({
      ...prevState,
      bloodProduct: bloodProduct !== '-',
    }));
  }, [bloodProduct]);

  useEffect(() => {
    setInputCompleted((prevState) => ({
      ...prevState,
      bloodType: bloodType !== '-',
    }));
  }, [bloodType]);

  const handleBloodProductChange = (e) => {
    setBloodProduct(e.target.value);
    setBloodProductImage(e.target.value !== '-' ? Mark2 : Mark);
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
    setBloodTypeImage(e.target.value !== '-' ? Mark2 : Mark);
  };

  // 날짜 입력 핸들러
  const handleStart_dateChange = (e) => {
    setStart_date(e.target.value);
  };

  const handleEnd_dateChange = (e) => {
    setEnd_date(e.target.value);
  };

  useEffect(() => {
    const isDateCompleted = start_date !== '' && end_date !== '';
    setDateImage(Mark2);
    setInputCompleted((prevInputCompleted) => ({
      ...prevInputCompleted,
      requireDay: isDateCompleted,
    }));
  }, [start_date, end_date]);

  const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  useEffect(() => {
    setInputCompleted((prevInputCompleted) => ({
      ...prevInputCompleted,
      registrationNumber: registrationNumber !== '',
    }));
  }, [registrationNumber]);

  const handleHospitalChange = (e) => {
    const { value } = e.target;
    setHospital((prevHospital) => ({
      ...prevHospital,
      name: value,
    }));
    setInputCompleted((prevInputCompleted) => ({
      ...prevInputCompleted,
      requirePlace: true,
    }));
  };

  return (
    <CrewContainer>
      <Sidebar pageLabel="지정헌혈" currentPage="지정헌혈 요청하기" />

      <div className="right" style={{ width: '67%' }}>
        <Breadcrums pageLabel="지정헌혈" currentPage="지정헌혈 요청하기" />
        <RightMiddle>
          <CrewP style={{ fontSize: '1.2vw' }}>글 작성하기</CrewP>
        </RightMiddle>
        {showCreditModal && (
          <CreditModalContainer>
            <CreditModal onClose={() => setShowCreditModal(false)} />
          </CreditModalContainer>
        )}

        <div
          className="crewBar"
          style={{
            width: '100%',
            height: '0.1vw',
            border: 'none',
            backgroundColor: colors.crewGray,
            marginTop: '1.7vw',
          }}
        />

        <TitleContainer>
          <TitleInput
            ref={titleEditableRef}
            placeholder="제목을 입력하세요."
          ></TitleInput>
        </TitleContainer>

        <InformContainer
          style={{
            background: allFieldsCompleted
              ? 'var(--Primary-Red-50, #FFFAFA)'
              : 'var(--Gray-Gray-50, #fafafa)',
          }}
        >
          <PatientContainer>
            <PatientP>환자 정보</PatientP>
            <BlockContainer>
              <InformBlocks>
                <InformBlock width="14.4vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.registrationNumber ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>수혈자 등록번호</InforText>

                    <ContentsText
                      placeholder="231117-3117"
                      style={{ width: '40%', marginLeft: '0.8vw' }}
                      onChange={handleRegistrationNumberChange}
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
                <InformBlock width="12.15vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.bloodProduct ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>필요 혈액제제</InforText>
                    <SelectInput
                      value={bloodProduct}
                      onChange={handleBloodProductChange}
                    >
                      {bloodProductOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectInput>
                  </TextContainer>
                </InformBlock>

                <InformBlock width="24vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.requireDay ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>요청기간</InforText>
                    <DateInput
                      type="date"
                      value={start_date}
                      onChange={handleStart_dateChange}
                    />
                    ~
                    <DateInput
                      type="date"
                      value={end_date}
                      onChange={handleEnd_dateChange}
                    />
                  </TextContainer>
                </InformBlock>
              </InformBlocks>
              <RowContainer>
                <InformBlock width="auto">
                  <TextContainer>
                    <img
                      src={inputCompleted.requirePlace ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>요청 의료기관</InforText>
                    <ContentsText
                      placeholder="건국대병원"
                      style={{ width: '40%' }}
                      onChange={handleHospitalChange}
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
                <InformBlock width="10vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.bloodType ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>혈액형 정보</InforText>
                    <SelectInput
                      value={bloodType}
                      onChange={handleBloodTypeChange}
                    >
                      {bloodTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectInput>
                  </TextContainer>
                </InformBlock>
              </RowContainer>
            </BlockContainer>
          </PatientContainer>
        </InformContainer>

        <BlankBox>
          <ToolBox>
            <Imageplus onClick={() => fileInputRef.current.click()}>
              <img
                src={Image}
                alt="사진 추가"
                style={{ width: '1.2vw', height: '1.2vw' }}
              />
              <ImageP>사진추가</ImageP>
            </Imageplus>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
              accept="image/*"
            />
            <img src={Line} alt="구분선" style={{ height: '1.5vw' }} />
            <BoldText onClick={toggleBold}>B</BoldText>
            <ItalicText onClick={toggleItalic}>I</ItalicText>
            <UnderlineText onClick={toggleUnderline}>U</UnderlineText>
            <MidlineText onClick={toggleStrikethrough}>T</MidlineText>
          </ToolBox>

          <InputContent
            ref={contentEditableRef}
            contentEditable
            placeholder="내용을 입력하세요."
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            isStrikethrough={isStrikethrough}
          />
        </BlankBox>

        <EnrollContainer>
          <Enroll onClick={handleSubmit}>글 등록하기</Enroll>
        </EnrollContainer>
      </div>
    </CrewContainer>
  );
};

export default BloodWrite;
