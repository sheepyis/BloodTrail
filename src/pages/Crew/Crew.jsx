import styled from 'styled-components';
import colors from '../../styles/color';
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import SortBoxYes from '../../assets/images/sortbox_yes.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import MyCrew from '../../components/MyCrew/MyCrew';
import ListCrewRank from '../../components/CrewRanking/list-crewRank';
import ListCrew from '../../components/Crew/list-crew';

const CrewContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const CrewP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const CrewP2 = styled.p`
  font-weight: 600;
  font-size: 0.75vw;
  color: ${colors.mainRed};
  margin-top: 1.5vw;
  cursor: pointer;
`;

const CrewP3 = styled(NavLink)`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;

const RightTop = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const RightMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1vw;
    margin-top: 2vw;
    position: relative;
`;

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`;

const SortDiv = styled.div`
    width: 11.6vw;
    height: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5vw 0 0.5vw;
    border: 0.05vw solid ${colors.lightGray};
    cursor: pointer;
`;

const SortBox = styled.div`
    width: 11.6vw;
    min-height: 5.8vw;
    padding: 0.4vw 0;
    border: 0.05vw solid ${colors.lightGray};
    position: absolute;
    z-index: 1;
    background-color: ${colors.white};
    right: 0;
    margin-top: 2.7vw;
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
`

const HoverDiv = styled.div`
    width: 100%;
    height: 2.5vw;
    font-size: 0.75vw;
    font-weight: 500;
    color: ${colors.crewGray2};
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 0.5vw;

    &:hover {
        font-size: 0.75vw;
        font-weight: 600;
        color: ${colors.crewGray};
        background-color: ${colors.lightGray};
    }
`

const Crew = () => {
  const [selectedSort, setSelectedSort] = useState("신규순");
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);
    
  const handleSortSelection = (sortType) => {
    setSelectedSort(sortType);
    setIsSortBoxVisible(false);
  };

  return (
    <CrewContainer>
      <div className="left" style={{ width: '17%', paddingLeft: '2.5%' }}>
        <CrewP>헌혈크루</CrewP>
        <CrewP2>헌혈 크루 찾기</CrewP2>
      </div>

      <div className="right" style={{ width: '67%' }}>
        <RightTop>
          <CrewP3 to="/">홈</CrewP3>
          <CrewP3>{'>'}</CrewP3>
          <CrewP3>헌혈크루</CrewP3>
          <CrewP3>{'>'}</CrewP3>
          <CrewP3>헌혈 크루 찾기</CrewP3>
        </RightTop>

        <RightMiddle>
            <CrewP style={{ fontSize: '1.2vw' }}>헌혈 크루 찾기</CrewP>
            <SortContainer>
                <img src={SortBoxYes} alt="sortBox" style={{ width: '1.2vw', height: '1.2vw' }}/>
                <SortDiv onClick={() => setIsSortBoxVisible(!isSortBoxVisible)}>
                    <CrewP style={{ fontSize: '0.75vw', color: colors.crewGray2 }}>{selectedSort}</CrewP>
                    <img src={ArrowDown} alt="arrow-down" style={{ width: '1.2vw', height: '1.2vw' }}/>
                </SortDiv>
            </SortContainer>
            {selectedSort && (
                <SortBox show={isSortBoxVisible}>
                    <HoverDiv onClick={() => handleSortSelection("신규순")}>신규순</HoverDiv>
                    <HoverDiv onClick={() => handleSortSelection("공감순")}>공감순</HoverDiv>
                </SortBox>
            )}
        </RightMiddle>

        <div className="crewBar" style={{ width: '100%', height: '0.1vw', border: 'none', backgroundColor: colors.crewGray}}/>

        <CrewP style={{ fontWeight: '700', fontSize: '1.2vw', marginTop: '2.5vw' }}>나의 헌혈 크루</CrewP>
        <MyCrew />

        <CrewP style={{ fontWeight: '700', fontSize: '1.2vw', marginTop: '2.5vw' }}>헌혈 크루 순위</CrewP>
        <ListCrewRank />

        <CrewP style={{ fontWeight: '700', fontSize: '1.2vw', marginTop: '2.5vw' }}>헌혈 크루</CrewP>
        <ListCrew />
      </div>
    </CrewContainer>
  );
};

export default Crew;
