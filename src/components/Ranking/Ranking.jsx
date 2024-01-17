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

const Ranking = ({ rankingData }) => {
  return (
    <div className="ranking-container">
      <Ranktext>헌혈 랭킹</Ranktext>
      {rankingData.map(data => (
        <RankingData key={data.id} rank={data.rank} name={data.name} score={data.score} />
      ))}
    </div>
  );
};

export default Ranking;
