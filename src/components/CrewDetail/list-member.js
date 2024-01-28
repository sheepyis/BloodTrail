import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemMember from './item-member';

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

const ListMember = ({ username }) => {
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
        <>
            <CrewContainer>
                <StyleGrid>
                    {crewData.map((item, index) => (
                        <ItemMember
                            key={item.id}
                            id={item.id}
                            name={item.username}
                            username={username}
                        />
                    ))}
                </StyleGrid>
            </CrewContainer>
        </>
    );
};

export default ListMember;
