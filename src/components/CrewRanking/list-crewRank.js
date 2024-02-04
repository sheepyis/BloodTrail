import styled from "styled-components";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCrewRank from "./item-crewRank";
import Left from "../../assets/images/arrowLeft.png";
import { NavLink } from 'react-router-dom';

const CrewRankContainer = styled.div`
    width: 100%;
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyleGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-left: 0.7vw;
    overflow: hidden;
    gap: ${({ home }) => home ? '0' : '0.6vw'};
`

const CrewRank = styled.img`
    width: 1.2vw;
    height: 1.2vw;
    cursor: pointer;
`

const ListCrewRank = ({home}) => {
    const [crewData, setCrewData] = useState([]);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 6 });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const sortedData = response.data.sort((a, b) => b.id - a.id);
                sortedData[0] = { ...sortedData[0], isFirstPlace: true };
                setCrewData(sortedData);
                if (home) setVisibleRange({start:0,end:3});
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }, []);

    const handleArrowClick = (direction) => {
        if (home) return;

        const step = 6;
        const totalDataLength = crewData.length;
        const maxStart = Math.max(0, totalDataLength - step);
        const isLastPage = visibleRange.end >= crewData.length;

    
        if (direction === 'left') {
            const newStart = Math.max(0, visibleRange.start - step);
            setVisibleRange({
                start: newStart,
                end: newStart + step,
            });
        } else if (direction === 'right' && !isLastPage) {
            const newStart = visibleRange.start + step;
            const newEnd = Math.min(totalDataLength, visibleRange.end + step);
            setVisibleRange({
                start: newStart,
                end: newEnd,
            });
        }
    };
    

    return (
      <CrewRankContainer>
          {!home && (
              <CrewRank src={Left} alt="left" style={{ marginLeft: "1vw" }} onClick={() => handleArrowClick('left')} />
          )}
          <StyleGrid>
              {crewData.slice(visibleRange.start, visibleRange.end).map((item, index) => (
                  <NavLink to={`/crewdetail/${item.id}`} key={index}>
                  <ItemCrewRank
                      key={index}
                      id={visibleRange.start + index + 1}
                      point={item.id}
                      name={item.name}
                      isFirstPlace={item.isFirstPlace || false}
                  />
                  </NavLink>
              ))}
          </StyleGrid>
          {!home && (
              <CrewRank src={Left} alt="right" style={{ rotate: "180deg", marginRight: "1vw" }} onClick={() => handleArrowClick('right')} />
          )}
      </CrewRankContainer>
  );
};

export default ListCrewRank;