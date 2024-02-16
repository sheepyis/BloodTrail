import React, { useState } from 'react';
import styled from 'styled-components';
import Ellipse8 from '../../assets/images/Ellipse8.png';
import dot from '../../assets/images/dot.png';
import dot2 from '../../assets/images/dot2.png';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.forOtherPost ? '16.25vw' : ' 19.7917vw')};
  height: ${(props) => (props.forOtherPost ? '16.25vw' : '19.7917vw')};
  border-radius: 0.2604vw;
  border: 0.0521vw solid var(--Gray-Gray-200, #eee);
  background: var(--black-white-white-1000, #fff);
`;

const CardNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3.4375vw;
  justify-content: space-between;
`;

const CardUser = styled.div`
  display: flex;
  padding: 1.0417vw;
`;

const UserImg = styled.img`
  width: 1.3542vw;
  height: 1.3542vw;
  flex-shrink: 0;
`;

const UserName = styled.div`
  width: 10vw;
  height: 0.9375vw;
  margin: 0.2083vw 0vw 0vw 0.5729vw;
  color: var(--Gray-Gray-700, #464a4d);
  font-family: Pretendard;
  font-size: 0.625vw;
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
  color: var(--Gray-Gray-900, #17191a);
  font-family: Pretendard;
  font-size: 0.9375vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625vw;
  width: auto;
  padding-right: 0.5208vw;
`;

const CardP = styled.div`
  color: var(--Gray-Gray-700, #464a4d);
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8229vw;
  letter-spacing: -0.0156vw;
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 1vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BloodType = styled.div`
  min-width: 2vw;
  height: 1.5vw;
  font-size: 0.7vw;
  display: inline-flex;
  padding: 0.1563vw 0.4167vw;
  justify-content: center;
  gap: 0.5208vw;
  border-radius: 5.2083vw;
  border: 0.0521vw solid var(--Gray-Gray-300, #d1d1d1);
  background: var(--black-white-white-1000, #fff);
`;

const CardRequestPeriod = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9375vw;
  letter-spacing: -0.0187vw;
`;

const Period1 = styled.div`
  padding-right: 0.4187vw;
`;

const Period2 = styled.div``;

const CardPhoto = styled.div`
  width: 100%;
  height: ${(props) =>
    props.forOtherPost
      ? '6.5vw'
      : '8.5417vw'}; // forOtherPost가 true일 때는 높이를 조금 줄입니다.
  flex-shrink: 0;
  background: var(--image, #d9d9d9);
  margin-bottom: 0.7813vw;
`;

// CardTmp 컴포넌트 정의, selectBloodType을 prop으로 받음
const CardTmp = ({
  board,
  cardType,
  selectBloodType,
  title,
  body,
  userId,
  forOtherPost,
  thumb,
}) => {
  const displayTitle = forOtherPost ? title.slice(0, 20) : title.slice(0, 32);
  const displayBody =
    cardType === 'type2' ? body.slice(0, 40) : body.slice(0, 70);
  const linkPath = `../../components/SinglePost/Singlepost?board=${board}`;

  console.log({
    board,
    cardType,
    selectBloodType,
    title,
    body,
    userId,
    forOtherPost,
  });

  return (
    <Link
      to={linkPath}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <Card forOtherPost={forOtherPost}>
        <CardNameContainer>
          <CardUser>
            <UserImg src={Ellipse8} alt="UserImg" />
            <UserName>{userId.slice(0, 10)}</UserName>
          </CardUser>
          <DotImg src={dot} alt="DotImg" />
        </CardNameContainer>

        {cardType === 'type2' && (
          <CardPhoto forOtherPost={forOtherPost}></CardPhoto>
        )}

        <CardTitle>
          <CardTitleP>{displayTitle}</CardTitleP>
          {board == 'blood' && <BloodType>{selectBloodType}</BloodType>}
        </CardTitle>

        <CardContent>
        <CardP className={cardType}>{displayBody}</CardP>
        {!forOtherPost && board == 'blood' && (
            <CardRequestPeriod>
              <Period1>요청기간</Period1>
              <Period2>~2023.12.14</Period2>
            </CardRequestPeriod>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardTmp;
