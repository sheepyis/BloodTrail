import React from 'react';
import styled from 'styled-components';

const RankingContainer = styled.div`
  width: 100%;
`;

const Ranktext = styled.div`
  align-items: left;
  font-size: 1.2vw;
  font-weight: 1000;
  color: #17191A;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const RankingsAndText = styled.div`
    width: 50%;
`;

const Ranktext2 = styled.div`
    font-size: 0.9vw;
    font-weight: bold;
    color: #464A4D;
`;

const PointsContainer = styled.div`
  width: 16vw;
  height: 9.3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.bgColor || '#FAFAFA'};
  border-radius: 0.4vw;
`;

const getBackgroundColor = (rank) => {
  if (rank==1) return '#FFF6F7';
};

const PointCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.75vw;
  padding : 1vw;
  align-items: center;
`;

const Rank = styled.div`
  font-size: 1.2vw;
  font-weight: bold;
  color: #17191A;
  margin-top: 0.6vw;
`;

const Avatar = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #C4C4C4;
  margin: 0.5vw 0;
`;

const Name = styled.div`
  font-size: 0.6vw;
  color: #464A4D;
  margin-top: 0.2vw;
`;

const Score = styled.div`

  align-items: center;
  font-size: 0.9vw;
  font-weight: bold;
  color: ${props => getTextColor(props.rank) || '#464A4D'};
`;

const getTextColor = (rank) => {
  if (rank==1) return '#E95458';
};

const PointText = styled.div`
  align-items: center;
  font-size: 0.75vw;
  color: #9E9E9E;
`;

const PointScoreContainer = styled.div`
  padding-top: 0.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25vw;
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
    <RankingContainer>
      <Ranktext>헌혈 랭킹</Ranktext>
      <FlexContainer>
        <RankingsAndText>
          <Ranktext2>개인 헌혈 포인트</Ranktext2>
          <IndividualPoints data={personalPointsData.slice(0,3)} />
        </RankingsAndText>
        <RankingsAndText>
          <Ranktext2>크루 헌혈 포인트</Ranktext2>
          <CrewPoints data={crewPointsData.slice(0,3)} />
        </RankingsAndText>
      </FlexContainer>
    </RankingContainer>
  );
};

export default Ranking;