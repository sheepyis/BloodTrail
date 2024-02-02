import styled from "styled-components";
import colors from "../../styles/color";
import { NavLink } from "react-router-dom";
import React from 'react';
import SortBoxYes from "../../assets/images/sortbox_yes.png";
import ArrowDown from "../../assets/images/arrow-down.png";
import MyCrew from "../../components/MyCrew/MyCrew";
import ListCrewRank from "../../components/CrewRanking/list-crewRank";
import ListCrew from "../../components/Crew/list-crew";

const CrewContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 2vw;
    margin-bottom: 4vw;
`

const CrewP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const CrewP2 = styled.p`
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
    margin-top: 1.5vw;
    cursor: pointer;
`

const CrewP3 = styled(NavLink)`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`

const RightTop = styled.div`
    display: flex;
    gap: 0.5vw;
`

const RightMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2vw;
    padding-bottom: 1vw;
`

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`

const SortDiv = styled.div`
    width: 11.6vw;
    height: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5vw 0 0.5vw;
    border: 0.05vw solid ${colors.lightGray};
    cursor: pointer;
`

const Crew = () => { 
    return (
        <CrewContainer>
            <div className="left" style={{width: "17%", paddingLeft: "3.85%"}}>
                <CrewP>헌혈크루</CrewP>
                <CrewP2>헌혈 크루 찾기</CrewP2>
            </div>

            <div className="right" style={{width: "67%"}}>
                <RightTop>
                    <CrewP3 to="/">홈</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3>헌혈크루</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3>헌혈 크루 찾기</CrewP3>
                </RightTop>

                <RightMiddle>
                    <CrewP style={{fontSize: "1.2vw"}}>헌혈 크루 찾기</CrewP>
                    <SortContainer>
                        <img src={SortBoxYes} alt="sortBox" style={{width: "1.2vw", height: "1.2vw"}}/>
                        <SortDiv>
                            <CrewP style={{fontSize: "0.75vw", color: colors.crewGray2}}>신규순</CrewP>
                            <img src={ArrowDown} alt="arrow-down" style={{width: "1.2vw", height: "1.2vw"}}/>
                        </SortDiv>
                    </SortContainer>
                </RightMiddle>

                <div className="crewBar" style={{width: "100%", height: "0.1vw", border: "none", backgroundColor: colors.crewGray}} />

                <CrewP style={{fontWeight: "700", fontSize: "1.2vw", marginTop: "2.5vw"}}>나의 헌혈 크루</CrewP>
                <MyCrew/>

                <CrewP style={{fontWeight: "700", fontSize: "1.2vw", marginTop: "2.5vw"}}>헌혈 크루 순위</CrewP>
                <ListCrewRank/>
                
                <CrewP style={{fontWeight: "700", fontSize: "1.2vw", marginTop: "2.5vw"}}>헌혈 크루</CrewP>
                <ListCrew/>
            </div>
        </CrewContainer>
    )
}

export default Crew;
