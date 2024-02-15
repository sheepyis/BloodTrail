import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import colors from '../../styles/color';
import ItemCrew from './item-crew';
import InputCrew from '../Input/input-crew';
import Right from '../../assets/images/arrowRight.png';
import { NavLink } from 'react-router-dom';

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

const ListCrew = ({ excludeButton, searchInput2, itemsPerPage }) => {
  const ITEMS_PER_PAGE = itemsPerPage || 9;
  const PAGES_PER_VIEW = 10;

  const [crewData, setCrewData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
/*   const [searchedCrewData, setSearchedCrewData] = useState([]); */

/*   const handleSearch = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        `https://bloodtrail.site/crew?page=${currentPage}`,
        config
      );
      setSearchedCrewData(response.data.result.crewList);
      console.log(response.data.result.crewList);
    } catch (error) {
      console.error('Error:', error);
      setSearchedCrewData([]);
    }
  }; */

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

        if (
          response.data.result.currentPage &&
          response.data.result.totalPage
        ) {
        }
      } catch (error) {
        console.error('오류:', error);
        setCrewData([]);
      }
    };

    fetchCrewData();
  }, [currentPage]);
  
  /* const displayData = searchedCrewData.length > 0 ? searchedCrewData : crewData; */

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
  
  
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredCrewData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredCrewData.length / ITEMS_PER_PAGE);
  const totalPageViews = Math.ceil(totalPages / PAGES_PER_VIEW);
  const currentPageView = Math.ceil(currentPage / PAGES_PER_VIEW);

  const renderPageNumbers = () => {
    const startPage = (currentPageView - 1) * PAGES_PER_VIEW + 1;
    const endPage = Math.min(startPage + PAGES_PER_VIEW - 1, totalPages);
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          active={currentPage === i}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </PageNumber>
      );
    }

    return pageNumbers;
  };

  const goToNextPageView = () => {
    if (currentPageView < totalPageViews) {
      setCurrentPage(currentPageView * PAGES_PER_VIEW + 1);
    }
  };

  const goToPrevPageView = () => {
    if (currentPageView > 1) {
      setCurrentPage((currentPageView - 2) * PAGES_PER_VIEW + 1);
    }
  };

  const handleUpload = () => {
    window.location.href = '/crewupload';
  };

  const handleCrewClick = (crewId) => {
    console.log(`${crewId}`);
    window.location.href = `/crewdetail/${crewId}`;
  };

  return (
    <>
      <CrewContainer>
        <StyleGrid>
          {currentItems.map((item, index) => (
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
        <Arrow
          src={Right}
          alt="left"
          onClick={goToPrevPageView}
          style={{ transform: 'rotate(180deg)' }}
        />
        {renderPageNumbers()}
        <Arrow src={Right} alt="right" onClick={goToNextPageView} />
      </PaginationContainer>
    </>
  );
};

export default ListCrew;
