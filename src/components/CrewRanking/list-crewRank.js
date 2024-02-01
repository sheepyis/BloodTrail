import styled from "styled-components";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCrewRank from "./item-crewRank";
import Left from "../../assets/images/arrowLeft.png";

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
`

const CrewRank = styled.img`
    width: 1.2vw;
    height: 1.2vw;
    cursor: pointer;
`

const ListCrewRank = () => {
    const [crewData, setCrewData] = useState([]);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 6 });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const sortedData = response.data.sort((a, b) => b.id - a.id);
                sortedData[0] = { ...sortedData[0], isFirstPlace: true };
                setCrewData(sortedData);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }, []);

    // 오른쪽 화살표 맨 마지막 페이지 부분 수정해야 함
    const handleArrowClick = (direction) => {
        const step = 6;
        const maxStart = Math.max(0, crewData.length - step);
    
        if (direction === 'left' && visibleRange.start > 0) {
            setVisibleRange((prevRange) => ({
                start: Math.max(0, prevRange.start - step),
                end: Math.max(0, prevRange.end - step),
            }));
        } else if (direction === 'right') {
            setVisibleRange((prevRange) => {
                const newStart = Math.min(maxStart, prevRange.start + step);
                const newEnd = Math.min(crewData.length, newStart + step);

                const adjustedEnd = newStart === maxStart ? crewData.length : newEnd;
    
                return {
                    start: newStart,
                    end: adjustedEnd,
                };
            });
        }
    };    

    return (
        <CrewRankContainer>
            <CrewRank src={Left} alt="left" style={{ marginLeft: "1vw" }} onClick={() => handleArrowClick('left')} />
            <StyleGrid>
                {crewData.slice(visibleRange.start, visibleRange.end).map((item, index) => (
                    <ItemCrewRank
                        key={index}
                        id={visibleRange.start + index + 1}
                        point={item.id}
                        name={item.name}
                        isFirstPlace={item.isFirstPlace || false}
                    />
                ))}
            </StyleGrid>
            <CrewRank src={Left} alt="right" style={{ rotate: "180deg", marginRight: "1vw" }} onClick={() => handleArrowClick('right')} />
        </CrewRankContainer>
    );
};

export default ListCrewRank;