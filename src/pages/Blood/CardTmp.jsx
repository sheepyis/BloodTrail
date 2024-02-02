import React,{useState} from "react";
import styled from "styled-components";
import Ellipse8 from "../../assets/images/Ellipse8.png";
import dot from "../../assets/images/dot.png";
import dot2 from "../../assets/images/dot2.png";
import { Link } from "react-router-dom";

const Card = styled.div`
    width: 19.7917vw;
    height: 19.7917vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
`;

const CardNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 3.4375vw;
`;

const CardUser = styled.div`
    display: flex;
    padding-left: 1.0417vw;
    padding-top: 1.0417vw;
    padding-right: 11.9271vw;
`;

const UserImg = styled.img`
    width: 1.3542vw;
    height: 1.3542vw;
    flex-shrink: 0;
`;

const UserName = styled.div`
    height: 0.9375vw;
    margin: 0.2083vw 0.0000vw 0.0000vw 0.5729vw;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
`;

const DotImg = styled.img`
    width: 0.1042vw;
    height: 0.8333vw;
    flex-shrink: 0;
    margin: 0.7813vw 0.7813vw;
`;

const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 1.0417vw;
`;

const CardTitleP = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw;
    width: 14.5833vw;
    padding-right: 0.5208vw;
`;

const CardP = styled.div`
    padding-left: 1.0417vw;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8229vw;
    letter-spacing: -0.0156vw;
    
    &.type1 {
        width: 17.7083vw;
        height: 11.2500vw;
    }
    &.type2{
      width: 17.7083vw; 
      height: 1.0417vw;
    }
`;

const BloodType = styled.div`
    display: inline-flex;
    padding: 0.1563vw 0.4167vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 5.2083vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #D1D1D1);
    background: var(--black-white-white-1000, #FFF);
`;

const CardRequestPeriod = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.0417vw 0.0000vw 1.0417vw 1.0474vw;
    color: var(--Gray-Gray-500, #9E9E9E);
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
`;

const Period1 = styled.div`
  padding-right: 0.4187vw;
`;

const Period2 = styled.div`
`;

const CardPhoto = styled.div`
    width: 19.6875vw;
    height: 8.5417vw;
    flex-shrink: 0;
    background: var(--image, #D9D9D9);
    padding-top: 0.7813vw;
    margin-bottom: 0.7813vw;
`;

// CardTmp 컴포넌트 정의, selectBloodType을 prop으로 받음
const CardTmp = ({ cardType, selectBloodType, linkPath }) => {
  return (
    <Link to={linkPath} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>      <Card>
      
        <CardNameContainer>
          <CardUser>
            <UserImg src={Ellipse8} alt="UserImg"/>
            <UserName>user name</UserName>
          </CardUser>
          <DotImg src={dot} alt="DotImg"/>
        </CardNameContainer>

        {cardType === "type2" && <CardPhoto></CardPhoto>}
        
        <CardTitle>
          <CardTitleP>지정헌혈 글 제목</CardTitleP>
          <BloodType>{selectBloodType}</BloodType>
        </CardTitle>

        <CardP className={cardType}>지정헌혈 글 내용입니다</CardP>
        <CardRequestPeriod>
          <Period1>요청기간</Period1>
          <Period2>~2023.12.14</Period2>
        </CardRequestPeriod>
        
      </Card>
    </Link>
  );
}

export default CardTmp;
