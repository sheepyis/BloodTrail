import styled from 'styled-components';
import colors from '../../styles/color';
import logo from '../../assets/images/logo.png';

const FooterContainer = styled.div`
  width: 100%;
  height: 12vw;
  display: flex;
  justify-content: center;
`;

const FooterBox = styled.div`
  width: 64%;
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
`;

const FooterText = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5vw;
`;

const FooterText2 = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw;
  letter-spacing: -0.015vw;
`;

const FooterText3 = styled.p`
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.018vw;
`;

const FooterCon = styled.div`
  margin-left: 0.4vw;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <img src={logo} art="로고" style={{ width: '8.85vw' }} />
        <FooterCon>
          <FooterText>5th University Makers Challenge PROJECT</FooterText>
          <FooterText2>Team BLOOD TRAIL</FooterText2>
          <FooterText3 style={{ marginTop: '2.5vw' }}>
            https://www.instagram.com/uni_makeus_challenge/
          </FooterText3>
        </FooterCon>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
