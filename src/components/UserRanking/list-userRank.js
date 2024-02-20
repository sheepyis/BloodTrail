import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCrewRank from './item-crewRank';

const CrewRankContainer = styled.div`
  width: 100%;
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-left: 0.7vw;
  overflow: hidden;
  gap: ${({ home }) => (home ? '0' : '0.6vw')};
`;

const CrewRank = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  cursor: pointer;
`;

const ListUserRank = () => {
    const [crewData, setCrewData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      axios
        .get(`https://bloodtrail.site/auth/rank`)
        .then((response) => {
          setCrewData(response.data.result || []);
          console.log("결과: ", response.data.result);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    }, [currentPage]);
  
    return (
      <CrewRankContainer>
        <StyleGrid>
          {Array.isArray(crewData) && crewData.length > 0 && crewData.slice(0, 3).map((crew, index) => (
            <ItemCrewRank
              key={index}
              id={index + 1 + (currentPage - 1) * 3}
              name={crew.name}
              point={crew.point}
              profileImage={crew.profile_image}
              isFirstPlace={index === 0}
            />
          ))}
        </StyleGrid>
      </CrewRankContainer>
    );
  };
  
  export default ListUserRank;
