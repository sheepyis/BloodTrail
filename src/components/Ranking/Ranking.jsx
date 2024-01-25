import React from 'react';
import styled from 'styled-components';

const Ranktext = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: #17191A;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3.0208vw 5.1042vw 0;
  gap: 20px;
  max-width: 1200px; // 최대 너비 설정
  margin-left: auto; // 중앙 정렬을 위한 자동 왼쪽 마진
  margin-right: auto; // 중앙 정렬을 위한 자동 오른쪽 마진

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%; // 너비를 100%로 조정
  }
`;


const Ranktext2 = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #464A4D;
`;

const PointsContainer = styled.div`
  width: 175px;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.bgColor || '#FAFAFA'};
  border-radius: 8px;
  margin: 5px 0;
`;

const getBackgroundColor = (rank) => {
  if (rank==1) return '#FFF6F7';
};

const PointCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding : 10px;
  
`;

const Rank = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #17191A;
  margin-top: 12px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #C4C4C4;
  margin: 10px 0;
`;

const Name = styled.div`
  font-size: 12px;
  color: #464A4D;
`;

const Score = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${props => getTextColor(props.rank) || '#464A4D'};
`;

const getTextColor = (rank) => {
  if (rank==1) return '#E95458';
};

const PointText = styled.div`
  font-size: 15px;
  color: #9E9E9E;
`;

const PointScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

// Individual Points Component
const IndividualPoints = ({ data }) => (
  <PointCategory>
    {data.map(item => (
      <PointsContainer key={item.id} bgColor={getBackgroundColor(item.rank)}>
        <Rank>{item.rank}위</Rank>
        <Avatar />
        <Name>{item.name}</Name>
        <PointScoreContainer>
          <PointText>Point</PointText>
          <Score rank={item.rank}>{item.score} 점</Score>
        </PointScoreContainer>
      </PointsContainer>
    ))}
  </PointCategory>
);

// Crew Points Component
const CrewPoints = ({ data }) => (
  <PointCategory>
    {data.map(item => (
      <PointsContainer key={item.id} bgColor={getBackgroundColor(item.rank)}>
        <Rank>{item.rank}위</Rank>
        <Avatar />
        <Name>{item.name}</Name>
        <PointScoreContainer>
          <PointText>Point</PointText>
          <Score rank={item.rank}>{item.score} 점</Score>
        </PointScoreContainer>
      </PointsContainer>
    ))}
  </PointCategory>
);

const Ranking = ({ rankingData }) => {
  const personalPointsData = rankingData.filter(item => item.type === 'personal');
  const crewPointsData = rankingData.filter(item => item.type === 'crew');
  return (
    <div className="ranking-container">
      <Ranktext>헌혈 랭킹</Ranktext>
      <FlexContainer>
        <div>
          <Ranktext2>개인 헌혈 포인트</Ranktext2>
          <IndividualPoints data={personalPointsData.slice(0,3)} />
        </div>
        <div>
          <Ranktext2>크루 헌혈 포인트</Ranktext2>
          <CrewPoints data={crewPointsData.slice(0,3)} />
        </div>
      </FlexContainer>
    </div>
  );
};

export default Ranking;