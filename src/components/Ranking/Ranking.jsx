import React from 'react';
import RankingData from './RankingItem';
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
  justify-content: space-between; // This will space out the children components
  align-items: flex-start; // This aligns the children at their start
  margin: 20px 0; // Adjust as needed for spacing around the containerg
  gap : 20px;
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
  const personalData = rankingData.filter(item => item.type === 'personal');
  const crewData = rankingData.filter(item => item.type === 'crew');
  return (
    <div className="ranking-container">
      <Ranktext>헌혈 랭킹</Ranktext>
      
      <FlexContainer>
        <div>
        <Ranktext2>개인 헌혈 포인트</Ranktext2>
        
        <IndividualPoints data={personalData.slice(0,3)} />
        {personalData.map(data => (
          <IndividualPoints key={data.id} rank={data.rank} name={data.name} score={data.score} />
        ))}
        </div>
        <div>
        <Ranktext2>크루 헌혈 포인트</Ranktext2>
        {crewData.map(data => (
          <RankingData key={data.id} rank={data.rank} name={data.name} score={data.score} />
        ))}
        </div>
      </FlexContainer>

      {Array.isArray(rankingData) && rankingData.map(data => (
        <RankingData key={data.id} rank={data.rank} name={data.name} score={data.score} />
        ))}
    </div>
  );
};

export default Ranking;
