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

const ListCrewRank = () => {
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
        console.log(response.data.result.crewList);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, [currentPage]);

  const handleArrowClick = (direction) => {
    if (direction === 'left' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === 'right' && !isLastPage()) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  
  const isLastPage = () => {
    return crewData.length === 0 || crewData.length < 6;
  };

  return (
    <CrewRankContainer>
        <>
          <CrewRank src={Left} alt="left" onClick={() => handleArrowClick('left')}/>

          <StyleGrid>
            {crewData.map((crew, index) => (
              <ItemCrewRank
                key={index}
                id={index + 1 + (currentPage - 1) * 6} // 순위 계산
                name={crew.crew_name}
                point={crew.now[1]}
                isFirstPlace={index === 0 && currentPage === 1}
              />
            ))}
          </StyleGrid>

          <CrewRank src={Left} alt="right" style={{ transform: 'rotate(180deg)' }} onClick={() => handleArrowClick('right')}/>
        </>
    </CrewRankContainer>
  );
};

export default ListCrewRank;
