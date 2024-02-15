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
import Sidebar from "../../../components/Navigation/Sidebar";
import Breadcrums from "../../../components/Navigation/Breadcrums";

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
  gap: 15px;
  border-radius: 100px;
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

const BloodWrite = () => {
  const [imageFile, setImageFile] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [bloodProduct, setBloodProduct] = useState('');
  const [requireDay, setRequireDay] = useState('');
  const [requirePlace, setRequirePlace] = useState('');
  const [bloodType, setBloodType] = useState('');

  const handleRegistrationNumberChange = (e) =>
    setRegistrationNumber(e.target.value);
  const handleBloodProductChange = (e) => setBloodProduct(e.target.value);
  const handleRequireDayChange = (e) => setRequireDay(e.target.value);
  const handleRequirePlaceChange = (e) => setRequirePlace(e.target.value);
  const handleBloodTypeChange = (e) => setBloodType(e.target.value);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append(
      'title',
      document.querySelector('input[type="text"]').value
    );
    formData.append('content', contentEditableRef.current.innerText);
    formData.append('registrationNumber', registrationNumber);
    formData.append('bloodProduct', bloodProduct);
    formData.append('requireDay', requireDay);
    formData.append('requirePlace', requirePlace);
    formData.append('bloodType', bloodType);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch('여기에_백엔드_API_엔드포인트_입력', {
        method: 'POST',
        body: formData,
        // headers: {
        //   'Authorization': 'Bearer 여기에_토큰_입력'
        // },
      });

      if (response.ok) {
        // 요청이 성공적으로 처리됐을 때의 로직
        const data = await response.json(); // JSON 응답 처리
        console.log('성공:', data);
        alert('글이 성공적으로 등록되었습니다.');
      } else {
        // 서버 에러 처리
        console.error('서버 에러:', response.statusText);
        alert('글 등록에 실패했습니다.');
      }
    } catch (error) {
      // 네트워크 에러 처리
      console.error('네트워크 에러:', error);
      alert('글 등록 중 문제가 발생했습니다.');
    }
  };

  const [inputCompleted, setInputCompleted] = useState({
    registrationNumber: false,
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

  const changeImageOnEnter = (field, event) => {
    if (event.key === 'Enter') {
      setInputCompleted({ ...inputCompleted, [field]: true });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const contentEditableRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = '50%';
      contentEditableRef.current.appendChild(img);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleStrikethrough = () => setIsStrikethrough(!isStrikethrough);

  return (
    <CrewContainer>
      <Sidebar pageLabel="지정헌혈" currentPage="지정헌혈 요청하기"/>

      <div className="right" style={{ width: '67%' }}>
      <Breadcrums pageLabel="지정헌혈" currentPage="지정헌혈 요청하기"/>

        <RightMiddle>
          <CrewP style={{ fontSize: '1.2vw' }}>글 작성하기</CrewP>
        </RightMiddle>

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
          <TitleInput placeholder="제목을 입력하세요."></TitleInput>
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
                <InformBlock width="13.4vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.registrationNumber ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>수혈자 등록번호</InforText>
                    <ContentsText
                      placeholder="231117-3117"
                      style={{ width: '40%', marginLeft: '0.8vw' }}
                      onKeyDown={(event) =>
                        changeImageOnEnter('registrationNumber', event)
                      }
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
                <InformBlock width="11.15vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.bloodProduct ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>필요 혈액제제</InforText>
                    <ContentsText
                      placeholder="RBC"
                      style={{ width: '40%', marginLeft: '0.8vw' }}
                      onKeyDown={(event) =>
                        changeImageOnEnter('bloodProduct', event)
                      }
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>

                <InformBlock width="15vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.requireDay ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>요청기간</InforText>
                    <ContentsText
                      placeholder="2024/02/21~2024/03/21"
                      style={{ width: '100%', marginLeft: '0.2vw' }}
                      onKeyDown={(event) =>
                        changeImageOnEnter('requireDay', event)
                      }
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
              </InformBlocks>
              <RowContainer>
                <InformBlock width="11.15vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.requirePlace ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>요청 의료기관</InforText>
                    <ContentsText
                      placeholder="건국대병원"
                      style={{ width: '40%' }}
                      onKeyDown={(event) =>
                        changeImageOnEnter('requirePlace', event)
                      }
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
                <InformBlock width="10.5vw">
                  <TextContainer>
                    <img
                      src={inputCompleted.bloodType ? Mark2 : Mark}
                      style={{ width: '1.2vw', height: '1.2vw' }}
                    />
                    <InforText>혈액형 정보</InforText>
                    <ContentsText
                      placeholder="RH+ A형"
                      style={{ width: '40%' }}
                      onKeyDown={(event) =>
                        changeImageOnEnter('bloodType', event)
                      }
                    ></ContentsText>
                  </TextContainer>
                </InformBlock>
              </RowContainer>
            </BlockContainer>
          </PatientContainer>
        </InformContainer>

        <BlankBox>
          <ToolBox>
            <Imageplus onClick={triggerFileInput}>
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
          <Enroll>글 등록하기</Enroll>
        </EnrollContainer>
      </div>
    </CrewContainer>
  );
};

export default BloodWrite;
