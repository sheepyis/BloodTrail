import styled from "styled-components";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCrew from "./item-crew";

const CrewContainer = styled.div`
    width: 100%;
    margin-top: 1vw;
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

const ListCrew = () => {
    const [crewData, setCrewData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setCrewData(response.data);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }, []);

    return (
        <CrewContainer>
            <StyleGrid>
                {crewData.map((item, index) => (
                    <ItemCrew
                        key={index}
                        id={item.id}
                        name={item.name}
                        introduce={item.email}
                    />
                ))}
            </StyleGrid>
        </CrewContainer>
    );
};

export default ListCrew;