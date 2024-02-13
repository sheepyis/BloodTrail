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
  overflow: hidden; // 컨테이너 밖으로 내용물이 넘치는 것을 방지
`;

const StyledImage = styled.img`
  width: 100%; // 컨테이너 너비에 맞춤
  height: 100%; // 컨테이너 높이에 맞춤
  object-fit: cover; // 비율을 유지하면서 컨테이너를 채움
  // 필요한 경우 object-position을 추가하여 이미지 정렬 조정
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
  /* height: 2.393vw; */
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
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.1vw;
`;

const ScanButton = styled.button`
  color: var(--Gray-Gray-900, #17191a);
  text-align: center;
  /* Body/SubTitle/Medium */
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 500;
  display: flex;
  width: 12.5vw;
  padding: 0.5vw 1.5vw;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  border-radius: ${(props) => (props.primary ? '5vw' : '5vw')};
  border: ${(props) =>
    props.primary
      ? '2px solid var(--Primary-Red-500, #FFB2B5)'
      : '2px solid var(--Gray-Gray-200, #eee)'};
  background: var(--Blank-blank, rgba(255, 255, 255, 0));
`;

const ValueP = styled.p`
  border-radius: 2.5vw;
  background: var(--Gray-Gray-100, #f2f2f2);
  color: var(--Gray-Gray-500, #9e9e9e);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
  padding: 0.3vw 0.7vw;
  display: flex; // flex 컨테이너로 만듦
  justify-content: center; // 자식 요소를 중앙에 수평 정렬
  align-items: center;
`;

const DefaultValueP = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
  display: flex; // flex 컨테이너로 만듦
  justify-content: center; // 자식 요소를 중앙에 수평 정렬
  align-items: center;
  text-align: center;
`;

const MyDonation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지 상태
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRescan = () => {
    setSelectedImage(null);
    fileInputRef.current.value = null;
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const tableData = [
    { label: '헌혈 종류', value: '헌혈' },
    { label: '헌혈 일자', value: '0000년00월 00일' },
  ];

  const handleUploadAndScan = async () => {
    if (!selectedImage) {
      alert('먼저 이미지를 선택해주세요.');
      return;
    }

    // fileInputRef.current.files[0]을 사용하여 선택된 파일에 접근
    const file = fileInputRef.current.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // 로컬 스토리지에서 액세스 토큰을 가져옴
      const accessToken = localStorage.getItem('accessToken');

      try {
        const response = await fetch('https://bloodtrail.site/history/image', {
          method: 'POST',
          body: formData,
          headers: {
            // Authorization 헤더에 액세스 토큰을 추가
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // 성공적으로 응답을 받았을 때의 처리를 추가합니다.
        }
      } catch (error) {
        console.error('스캔 중 오류 발생:', error);
        alert('스캔 중 문제가 발생했습니다.');
      }
    }
  };

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
                {selectedImage ? (
                  <StyledImage
                    src={selectedImage}
                    alt="Selected Donation Certificate"
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
            <ScanContainer style={{ marginBottom: '3.8vw' }}>
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
                    {data.label === '헌혈 일자' ? (
                      <DefaultValueP>{data.value}</DefaultValueP>
                    ) : (
                      <ValueP>{data.value}</ValueP>
                    )}
                  </CellContainer>
                </GraphContainer>
              ))}
            </ScanContainer>
            <ButtonContainer>
              <ScanButton onClick={handleRescan}>다시 스캔하기</ScanButton>
              <ScanButton primary onClick={handleUploadAndScan}>
                헌혈 증서 등록하기
              </ScanButton>
            </ButtonContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default MyDonation;
