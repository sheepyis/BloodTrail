import styled from 'styled-components';
import colors from '../../styles/color';
import Plus from '../../assets/images/plus.png';
import { useState } from 'react';
import close from '../../assets/images/close_24px.png';
import { useRef } from 'react';

const DonationContainer = styled.div`
  width: 100%;
  height: 10vw;
  border: none;
  border-radius: 0.25vw;
  background-color: ${colors.footerGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DonationP = styled.p`
  font-size: 0.6vw;
  color: #0c0b2c;
  opacity: 0.6;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 42.25vw;
  height: 39.6vw;
  border-radius: 5px;
  padding: 1.5vw;
  border: 1px solid var(--Gray-Gray-200, #eee);
  background: var(--black-white-white-1000, #fff);
  display: flex;
  flex-direction: column;
`;

const RegistContainer = styled.div`
  width: 100%;
  height: 1.5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5vw;
`;

const RegistP = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5vw;
`;

const ScanContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.75vw;
  flex-direction: column;
`;

const ScanP = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const RegistP2 = styled.p`
  color: var(--Gray-Gray-700, #464a4d);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw;
  letter-spacing: -0.3px;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5vw;
  background-color: white;
  border: 1px solid var(--Gray-Gray-200, #eee);
  border-bottom: none; // 하단 테두리 제외

  &:last-child {
    border-bottom: 1px solid var(--Gray-Gray-200, #eee);
  }
`;

const RowContainer = styled.div`
  background: var(--Gray-Gray-50, #fafafa);
  width: 8.05vw;
  height: 2.393vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GraphP = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  text-align: center;

  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw;
  letter-spacing: -0.3px;
`;

const CellContainer = styled.div`
  display: flex;
  padding-left: 1.2vw;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.1vw;
`;

const ScanButton = styled.button`
  display: flex;
  width: 12.5vw;
  padding: 0.5vw 1.5vw;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5vw;
  border-radius: ${(props) => (props.primary ? '100px' : '5vw')};
  border: ${(props) =>
    props.primary
      ? '2px solid var(--Primary-Red-500, #FFB2B5)'
      : '2px solid var(--Gray-Gray-200, #eee)'};
  background: var(--Blank-blank, rgba(255, 255, 255, 0));
`;

const MyDonation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 상태
  const fileInputRef = useRef(null);

  // 파일 선택기를 열기 위한 함수
  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  // 파일이 선택되었을 때 실행될 함수
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 파일로부터 이미지 URL 생성
      setSelectedImage(imageUrl); // 이미지 URL 상태 업데이트
    }
  };

  const tableData = [
    { label: '이름', value: '이름' },
    { label: '생년월일', value: '0000년 00월 00일' },
    { label: '헌혈 종류', value: '헌혈' },
    { label: '헌혈 일자', value: '0000년 00월 00일' },
  ];

  return (
    <>
      <DonationContainer>
        <div
          className="plusDonation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3vw',
          }}
        >
          <img
            src={Plus}
            alt="plus"
            style={{ width: '1.2vw', height: '1.2vw', cursor: 'pointer' }}
            onClick={toggleModal}
          />
          <DonationP>헌혈 증서를 등록하십시오</DonationP>
        </div>
      </DonationContainer>
      {isModalOpen && (
        <ModalBackground onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <RegistContainer>
              <RegistP>헌혈 증서 등록하기</RegistP>
              <img
                src={close}
                style={{ width: '0.7vw', height: '0.7vw', cursor: 'pointer' }}
                onClick={closeModal}
              />
            </RegistContainer>
            <ScanContainer>
              <ScanP style={{ marginLeft: '0.5vw' }}>헌혈 증서 스캔하기</ScanP>
              <RegistP2
                style={{
                  marginLeft: '0.5vw',
                  marginTop: '0.35vw',
                  marginBottom: '1vw',
                }}
              >
                헌혈 증서 사진을 등록해주세요.
              </RegistP2>
              <DonationContainer onClick={handleFileInputClick}>
                {' '}
                {/* DonationContainer 클릭 시 파일 입력 트리거 */}
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected Donation Certificate"
                    style={{ width: '100%', height: 'auto' }}
                  />
                ) : (
                  <div
                    className="plusDonation"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.3vw',
                    }}
                  >
                    <img
                      src={Plus}
                      alt="plus"
                      style={{
                        width: '1.2vw',
                        height: '1.2vw',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                )}
              </DonationContainer>
            </ScanContainer>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept="image/*" // 이미지 파일만 허용
            />
            <ScanContainer>
              <ScanP style={{ marginLeft: '0.5vw' }}>정보 확인하기</ScanP>
              <RegistP2
                style={{
                  marginLeft: '0.5vw',
                  marginTop: '0.35vw',
                  marginBottom: '1vw',
                }}
              >
                아래 내용을 확인해주세요.
              </RegistP2>
              {tableData.map((data, index) => (
                <GraphContainer key={index}>
                  <RowContainer>
                    <GraphP>{data.label}</GraphP>
                  </RowContainer>
                  <CellContainer>
                    <GraphP>{data.value}</GraphP>
                  </CellContainer>
                </GraphContainer>
              ))}
            </ScanContainer>
            <ButtonContainer>
              <ScanButton>다시 스캔하기</ScanButton>
              <ScanButton primary>헌혈 증서 등록하기</ScanButton>
            </ButtonContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default MyDonation;
