import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCrewRank from './item-crewRank';
import Left from '../../assets/images/arrowLeft.png';
import { NavLink } from 'react-router-dom';

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

// 통신안됨 500에러뜸

const ListCrewRank = ({ home }) => {
  const [crewData, setCrewData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // accessToken을 localStorage에서 가져옵니다.
    const accessToken = localStorage.getItem('accessToken');

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .get(`https://bloodtrail.site/crew/rank?page=${currentPage}`, config)
      .then((response) => {
        setCrewData(response.data.result.crewList);
      })
      .catch((error) => {
        console.error('Error fetching crew rank data:', error);
      });
  }, [currentPage]);

  const handleArrowClick = (direction) => {
    if (direction === 'left' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === 'right') {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <CrewRankContainer>
      <StyleGrid home={home}>
        {crewData.map((crew, index) => (
          <ItemCrewRank
            key={crew.id}
            id={index + 1 + (currentPage - 1) * crewData.length} // 순위 계산
            name={crew.name}
            point={crew.point}
            isFirstPlace={index === 0}
          />
        ))}
      </StyleGrid>
      {!home && (
        <>
          <CrewRank
            src={Left}
            alt="left"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <CrewRank
            src={Left}
            alt="right"
            style={{ transform: 'rotate(180deg)' }}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </>
      )}
    </CrewRankContainer>
  );
};

export default ListCrewRank;
