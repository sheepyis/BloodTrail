import styled from "styled-components";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import colors from "../../styles/color";
import ItemCrew from "./item-crew";
import InputCrew from "../Input/input-crew"

const CrewContainer = styled.div`
    width: 100%;
    margin: 1vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
`

const StyleGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
`

const Upload = styled.button`
    width: 13.5vw;
    height: 2vw;
    border: 0.05vw solid #FFB2B5;
    border-radius: 0.25vw;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
`


const ListCrew = () => {
    const [crewData, setCrewData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setCrewData(response.data);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }, []);

    const filteredCrewData = crewData.filter(item => item.name.toLowerCase().startsWith(searchInput.toLowerCase()));

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <>
            <CrewContainer>
            <StyleGrid>
                {filteredCrewData.map((item, index) => (
                    <ItemCrew
                        key={index}
                        id={item.id}
                        name={item.name}
                        introduce={item.email}
                    />
                ))}
            </StyleGrid>
            </CrewContainer>

            <div className="button" style={{display: "flex", margin: "0 1vw", alignItems: "center", justifyContent: "space-between", marginBottom: "1.3vw"}}>
                <InputCrew
                    type="text"
                    placeholder="크루 이름을 입력하세요"
                    onChange={handleInputChange}
                    value={searchInput}
                />
                <Upload>헌혈 크루 등록하기</Upload>
            </div>
        </>
    );
};

export default ListCrew;
