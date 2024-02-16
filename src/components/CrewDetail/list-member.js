import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from "../../styles/color";
import ItemMember from './item-member';

const CrewContainer = styled.div`
    width: 100%;
    margin: 1vw 0;
    display: flex;
    flex-direction: column;
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

const DetailButton = styled.button`
    width: 13.6vw;
    height: 2.5vw;
    border: none;
    border-radius: 0.25vw;
    background-color: ${colors.crewPink};
    opacity: ${props => props.disabled ? "0.7" : "1"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    font-weight: 700;
    font-size: 0.9vw;
    color: ${colors.mainRed};
`;

const ListMember = ({ id, username }) => {
    const [crewData, setCrewData] = useState([]);
    const [crew, setCrew] = useState(null);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get(`https://bloodtrail.site/crew/detail/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("통신 성공");
                console.log(response.data);
                setCrewData(response.data.result.crew_member);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
    
        fetchData();
    }, [id]);

    return (
        <>
            <CrewContainer>
                <StyleGrid>
                    {crewData.map((item, index) => (
                        <ItemMember
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            username={username}
                            participationRate={item.participationRate}
                        />
                    ))}
                </StyleGrid>
                
                <div className="button" style={{width: "100%", display: "flex", justifyContent: "center", gap: "0.65vw", margin: "3vw 0"}}>
                    <DetailButton>채팅하기</DetailButton>
                    <DetailButton disabled={isFull}>크루 가입하기</DetailButton>
                </div>
            </CrewContainer>
        </>
    );
};

export default ListMember;
