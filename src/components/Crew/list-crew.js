import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import colors from '../../styles/color';
import ItemCrew from './item-crew';
import InputCrew from '../Input/input-crew';
import { NavLink } from 'react-router-dom';
import Right from "../../assets/images/arrowRight.png";

const CrewContainer = styled.div`
  width: 100%;
  margin: 1vw 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1vw;
`;

const StyleGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`;

const Upload = styled.button`
  width: 13.5vw;
  min-height: 2vw;
  border: 0.05vw solid #ffb2b5;
  border-radius: 0.25vw;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75vw;
  white-space: nowrap;
  color: ${colors.mainRed};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.3vw;
  align-items: center;
  gap: 0.4vw;
`;

const PageNumber = styled.div`
  cursor: pointer;
  margin: 0 0.5vw;
  font-weight: 500;
  font-size: 0.6vw;
  color: ${(props) => (props.active ? colors.mainRed : colors.crewGray2)};
  position: relative;

  &:before {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1vw;
    height: 1.15vw;
    background-color: ${colors.crewPink};
    border-radius: 50%;
    z-index: -1;
  }
`;

const Arrow = styled.img`
  width: 0.25vw;
  cursor: pointer;
  margin: 0 0.2vw;
`;

const ListCrew = ({ excludeButton, searchInput2 }) => {
  const [crewData, setCrewData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCrewData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await axios.get(
          `https://bloodtrail.site/crew?page=${currentPage}`,
          config
        );

        if (
          response.data &&
          response.data.result &&
          Array.isArray(response.data.result.crewList)
        ) {
          setCrewData(response.data.result.crewList);
        } else {
          console.error('배열을 예상했지만 받은 것:', response.data);
          setCrewData([]); // 응답이 예상과 다르면 빈 배열로 설정
        }
      } catch (error) {
        console.error('오류:', error);
        setCrewData([]);
      }
    };

    fetchCrewData();
  }, [currentPage]);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);
  };

  // 백엔드 api 쓰지 않음 -> 한글은 ㅋ 검색하면 안나오고 크까지 쳐야 검색이 됨
  const filteredCrewData = crewData.filter(item => {
    const nameLowerCase = item.crew_name.toLowerCase();
    const searchInputLowerCase = searchInput?.toLowerCase();
    const searchInput2LowerCase = searchInput2?.toLowerCase();
    
    if (searchInputLowerCase && searchInput2LowerCase) {
      return nameLowerCase.includes(searchInputLowerCase) || nameLowerCase.includes(searchInput2LowerCase);
    } else if (searchInputLowerCase) {
      return nameLowerCase.includes(searchInputLowerCase);
    } else if (searchInput2LowerCase) {
      return nameLowerCase.includes(searchInput2LowerCase);
    } else {
      return true;
    }
  });

  const handleUpload = () => {
    window.location.href = '/crewupload';
  };

  const handleCrewClick = (crewId) => {
    console.log(`${crewId}`);
    window.location.href = `/crewdetail/${crewId}`;
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <CrewContainer>
        <StyleGrid>
          {filteredCrewData.map((item, index) => (
            <ItemCrew
              key={index}
              id={item._id}
              name={item.crew_name}
              introduce={item.description}
              points={item.now[1]}
              participationRate={item.now[0]}
              memberCount={item.crew_count}
              onClick={handleCrewClick}
            />
          ))}
        </StyleGrid>
      </CrewContainer>

      {!excludeButton && (
        <div
          className="ListCrewButton"
          style={{
            display: 'flex',
            margin: '0 1vw',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '2vw',
          }}
        >
          <InputCrew
            type="text"
            placeholder="크루 이름을 입력하세요"
            onChange={handleInputChange}
            value={searchInput}
            /* onSearchClick={handleSearch} */
          />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Upload onClick={handleUpload}>헌혈 크루 등록하기</Upload>
          </div>
        </div>
      )}

      <PaginationContainer>
        <Arrow src={Right} alt="left" onClick={goToPrevPage} style={{rotate: "-180deg"}}/>
        {[...Array(10)].map((_, index) => (
          <PageNumber
            key={index}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageNumber>
        ))}
        <Arrow src={Right} alt="right" onClick={goToNextPage} />
      </PaginationContainer>
    </>
  );
};

export default ListCrew;
