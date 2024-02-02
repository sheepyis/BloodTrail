import styled from "styled-components";
import colors from "../../styles/color";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dot from "../../assets/images/dot.png";
import PostBar from "../../assets/images/postBar.png";
import ListMember from "../../components/CrewDetail/list-member";
import InputCrewDetail from "../../components/Input/input-crewdetail";
import ListCrew from "../../components/Crew/list-crew";

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

const CopyButton = styled.button`
    height: 100%;
    border: 0.05vw solid #D1D1D1;
    border-radius: 0.25vw;
    padding: 0.5vw;
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray};
    cursor: pointer;
`;

const DotDiv = styled.div`
    width: 7.6vw;
    height: 3.3vw;
    border: 0.05vw solid #F2F2F2;
    border-radius: 0.05vw;
    padding: 0.4vw 0;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.crewGray};
    position: absolute;
    justify-content: center;
    cursor: pointer;
    margin-left: 4.8vw;
    margin-top: 6vw;
`

const DetailBox = styled.div`
    width: 100%;
    padding: 1.4vw 3.4vw;
    margin-top: 1vw;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PointDiv = styled.div`
    width: 5vw;
    padding: 0.5vw 1vw;
    border-radius: 5vw;
    border: none;
    background-color: #FFE7E7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1vw;
`

const DetailButton = styled.button`
    width: 13.6vw;
    height: 2.5vw;
    border: none;
    border-radius: 0.25vw;
    background-color: ${colors.crewPink};
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9vw;
    color: ${colors.mainRed};
`

const SearchDiv = styled.div`
    height: 1.9vw;
    border: 0.05vw solid #D1D1D1;
    border-radius: 0.25vw;
    padding: 0.5vw;
    display: flex;
    align-items: center;
`

const CrewDetail = () => {
    const { id } = useParams();
    const [crew, setCrew] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showReport, setShowReport] = useState(false);
    const [searchInput2, setSearchInput2] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setCrew(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error: ', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (crew === null) {
        return null;
    }

    const handleCopyUrl = () => {
        const el = document.createElement('textarea');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('URL이 클립보드에 복사되었습니다.');
    };

    const toggleReport = () => {
        setShowReport(!showReport);
    };

    const handleInputChange = (e) => {
        setSearchInput2(e.target.value);
    }

    return (
        <CrewContainer>
            <div className="left" style={{ width: "17%", paddingLeft: "3.85%" }}>
                <CrewP>헌혈크루</CrewP>
                <CrewP2>헌혈 크루 찾기</CrewP2>
            </div>

            <div className="right" style={{ width: "67%" }}>
                <RightTop>
                    <CrewP3 to="/">홈</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3 to="/crew">헌혈크루</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3>{crew && crew.name}</CrewP3>
                </RightTop>

                <div className="rightTop" style={{marginTop: "1vw"}}>
                    <div className="top" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="name" style={{display: "flex", alignItems: "center", gap: "0.5vw"}}>
                            <CrewP style={{fontWeight: "700", fontSize: "1.2vw"}}>{crew && crew.name}</CrewP>
                            <CrewP style={{fontSize: "0.75vw", color: colors.crewGray3}}>{crew && crew.username}</CrewP>
                        </div>
                        <div className="copy" style={{display: "flex", alignItems: "center", gap: "0.5vw"}}>
                            <CopyButton onClick={handleCopyUrl}>URL 복사</CopyButton>
                            <img src={Dot} alt="dot" style={{width: "1.15vw", height: "1.2vw", cursor: "pointer", position: "relative"}} onClick={toggleReport}/>
                            {showReport && <DotDiv>신고하기</DotDiv>}
                        </div>
                    </div>
                    <CrewP style={{fontSize: "0.75vw", marginTop: "0.2rem"}}>{crew && crew.email}</CrewP>

                    <DetailBox>
                        <div className="nowPoint" style={{display: "flex", alignItems: "center", gap: "1vw"}}>
                            <CrewP style={{fontSize: "0.9vw", color: colors.black}}>크루 현재 헌혈 포인트</CrewP>
                            <PointDiv>
                                <CrewP style={{fontWeight: "600", fontSize: "0.75vw"}}>{crew && crew.id}</CrewP>
                                <CrewP style={{fontSize: "0.75vw", color: colors.crewGray2}}>Point</CrewP>
                            </PointDiv>
                        </div>
                        <img src={PostBar} alt="post" style={{height: "2.7vw"}}/>
                        <div className="targetPoint" style={{display: "flex", alignItems: "center", gap: "1vw"}}>
                            <CrewP style={{fontSize: "0.9vw", color: colors.black}}>목표 헌혈 포인트</CrewP>
                            <PointDiv>
                                <CrewP style={{fontWeight: "600", fontSize: "0.75vw"}}>{crew && crew.id}</CrewP>
                                <CrewP style={{fontSize: "0.75vw", color: colors.crewGray2}}>Point</CrewP>
                            </PointDiv>
                        </div>
                        <img src={PostBar} alt="post" style={{height: "2.7vw"}}/>
                        <div className="participation" style={{display: "flex", alignItems: "center", gap: "1vw"}}>
                            <CrewP style={{fontSize: "0.9vw", color: colors.black}}>목표 헌혈 참여율</CrewP>
                            <PointDiv style={{width: "4vw"}}>
                                <CrewP style={{fontWeight: "600", fontSize: "0.75vw"}}>{crew && crew.id}</CrewP>
                                <CrewP style={{fontSize: "0.75vw", color: colors.crewGray2}}>%</CrewP>
                            </PointDiv>
                        </div>
                    </DetailBox>
                </div>

                <CrewP style={{fontWeight: "700", marginTop: "1.5vw"}}>크루 멤버</CrewP>
                <ListMember username={crew.username} />

                <div className="button" style={{width: "100%", display: "flex", justifyContent: "center", gap: "0.65vw", margin: "3vw 0"}}>
                    <DetailButton>채팅하기</DetailButton>
                    <DetailButton>크루 가입하기</DetailButton>
                </div>

                <div className="bar" style={{width: "100%", height: "0.5vw", border: "none", backgroundColor: colors.lightGray, marginBottom: "3vw"}}/>

                <CrewP style={{fontSize: "1vw"}}>다른 크루 보기</CrewP>
                <div className="search" style={{display: "flex", marginTop: "1vw", padding: "0 1vw", justifyContent: "space-between", alignItems: "center"}}>
                    <InputCrewDetail
                        type="text"
                        placeholder="크루 이름을 입력하세요"
                        onChange={handleInputChange}
                        value={searchInput2}
                    />
                    <SearchDiv><CrewP style={{fontSize: "0.6vw", color: colors.crewGray2}}>크루 목록</CrewP></SearchDiv>
                </div>
                <ListCrew excludeButton={true} searchInput2={searchInput2} itemsPerPage={12}/>
            </div>
        </CrewContainer>
    )
}

export default CrewDetail;
