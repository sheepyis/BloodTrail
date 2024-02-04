import styled from 'styled-components';
import colors from '../../styles/color';
import Plus from '../../assets/images/plus.png';
import { useState } from 'react';
import close from '../../assets/images/close_24px.png';
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
  flex-direction: column;
  margin-bottom: 1.75vw;
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
  flex-direction: column;
  height: 10vw;
  background-color: white;
  border: 1px solid var(--Gray-Gray-300, #d1d1d1);
`;

const MyDonation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
              <img src={close} style={{ width: '0.7vw', height: '0.7vw' }} />
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
                    style={{
                      width: '1.2vw',
                      height: '1.2vw',
                      cursor: 'pointer',
                    }}
                    onClick={toggleModal}
                  />
                </div>
              </DonationContainer>
            </ScanContainer>
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
              <GraphContainer />
            </ScanContainer>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default MyDonation;
