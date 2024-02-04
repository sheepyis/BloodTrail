import React from 'react';
import styled from 'styled-components';
import CrewRankingData from '../CrewRanking/list-crewRank';
import UserRankingData from '../UserRanking/list-userRank';

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

const Ranking = ({ home }) => {
  return (
    <RankingContainer>
      <Ranktext>헌혈 랭킹</Ranktext>
      <FlexContainer>
        <RankingsAndText>
          <Ranktext2>개인 헌혈 포인트</Ranktext2>
          <UserRankingData home={home} />
        </RankingsAndText>
        <RankingsAndText>
          <Ranktext2>크루 헌혈 포인트</Ranktext2>
          <CrewRankingData home={home} />
        </RankingsAndText>
      </FlexContainer>
    </RankingContainer>
  );
};

export default Ranking;