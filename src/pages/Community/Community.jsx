import React,{useState} from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import SortBoxYes from '../../assets/images/sortbox_yes.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import dot from "../../assets/images/dot.png";
import dot2 from "../../assets/images/dot2.png";
import arrow_12px2 from "../../assets/images/arrow_12px2.png";
import search1 from "../../assets/images/search1.png";
import arrow_down from "../../assets/images/arrow-down.png";
import { Link } from "react-router-dom";
import CardTmp from '../../components/Card/Card';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2vw;
    margin-bottom: 4vw;
`

const CommunityP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const CommunityP2 = styled.p`
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
    margin-top: 1.5vw;
    cursor: pointer;
`

const SideBar = styled.div`
    width: 17%;
    padding-left: 2.5%;
`
const MainConationer =styled.div`
    width: 67%;
`
const Breadcrums = styled.div`
    display: flex;
    gap: 0.5vw;
`
const BreadcrumsP = styled.div`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`


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

const DropdownImg =styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
    flex-shrink: 0;
`

const BoardContainer = styled.div`
    width: 100%;
    padding-left: 1.5vw;
`

const CardContainer =styled.div`
    display: grid; 
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    align-items: center; 
    justify-content: space-between;
`

const Card = styled.div`
    width: 19.7917vw;
    height: 19.7917vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
    margin: 0vw 1.5625vw 1.5625vw 0vw;
    
` 

const CardNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 3.4375vw;
`
const CardUser =styled.div`
    display: flex;
    padding-left: 1.0417vw;
    padding-top: 1.0417vw;
    padding-right:  11.9271vw;

`
const UserImg = styled.img`
width: 1.3542vw;
height: 1.3542vw;
    flex-shrink: 0;
`

const UserName = styled.div`
    height: 0.9375vw;
    margin : 0.2083vw 0.0000vw 0.0000vw 0.5729vw;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
`
const DotImg = styled.img`
    width: 0.1042vw;
    height: 0.8333vw;
    flex-shrink: 0;
    margin: 0.7813vw 0.7813vw;
`

const CardTitle =styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 1.0417vw;

`
const CardTitleP = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw;
    width: 14.5833vw;
    padding-right: 0.5208vw;
`

const CardP = styled.div`
    padding-left: 1.0417vw;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.8229vw;
    letter-spacing: -0.0156vw;
    
    &.type1{
        width: 17.7083vw;
        height: 11.2500vw;
    }
    &.type2{
        width: 17.7083vw; 
        height: 1.0417vw;
    }
`
const BloodType =styled.div`
    display: inline-flex;
    padding: 0.1563vw 0.4167vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 5.2083vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #D1D1D1);
    background: var(--black-white-white-1000, #FFF);
`
const CardRequestPeriod =styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.0417vw 0.0000vw 1.0417vw 1.0474vw;
    color: var(--Gray-Gray-500, #9E9E9E);
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
`
const Period1 =styled.div`
    padding-right: 0.4187vw;
`
const Period2 =styled.div`
`
const CardPhoto =styled.div`
    width: 19.6875vw;
    height: 8.5417vw;
    flex-shrink: 0;
    background: var(--image, #D9D9D9);
    padding-top: 0.7813vw;
    margin-bottom: 0.7813vw;
`
const WritePostContainer= styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 0.8vw;
    margin: 1vw 0;
`
const WritePost =styled.button`
    width: 13.5vw;
    height: 2vw;
    border-radius: 0.25vw;
    border: 0.05vw solid #FFB2B5;
    color: ${colors.mainRed};
    text-align: center;
    font-size: 0.75vw;
    font-weight: 600;
`
const PagnationContainer = styled.div`
margin-top: 3.4375vw;
display: flex;
justify-content: center;
align-items: center;
`
const Pagnation = styled.div`
display: flex;
height: 1.3542vw;
`

const PagnaionNumber = styled.div`
    display: inline-flex;
    margin-right: 1.3021vw;
    padding: 0.2083vw;
    justify-content: center;
    align-items: center;
    color: var(--Gray-Gray-700, #464A4D);
    text-align: center;

    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 0.9375vw */
    letter-spacing: -0.0187vw;

    &:active{
        border-radius: 5.2083vw;
        background: var(--Primary-Red-200, #FFF6F7);
        color: var(--Primary-Red-900, #E95458);
        text-align: center;
        font-family: Inter;
        font-size: 0.6250vw;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    `
const PagnaionNumber2 = styled.div`
    display: inline-flex;
    // padding: 0.2083vw;
    justify-content: center;
    align-items: center;
    color: var(--Gray-Gray-700, #464A4D);
    text-align: center;

    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 0.9375vw */
    letter-spacing: -0.0187vw;

    &:active{
        border-radius: 5.2083vw;
    background: var(--Primary-Red-200, #FFF6F7);
    color: var(--Primary-Red-900, #E95458);
    text-align: center;
    font-family: Inter;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    }
`
const DotImg2 =styled.img`
    width: 0.7292vw;
    height: 0.1042vw;
    flex-shrink: 0;
    margin: 0.6250vw 1.2500vw 0.6250vw 0.0000vw;
`
const PagnationImg = styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
    margin-right: 1.2500vw;
`
const PagnationImg2 = styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
    transform: rotate(180deg);
    margin-left: 1.2500vw;
`
const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3.6458vw;
`
const SearchBox = styled.div`
    padding: 0.1042vw 0.5208vw;
    display: flex;
    align-items: center;
    width: 53.9063vw;
    height: 2.2917vw;
    border: 1px solid var(--Gray-Gray-200, #EEE);
`

const SearchBar = styled.div`
    width: 51.0938vw;
    height: 2.0833vw;
    padding: 0.5208vw;
    align-items: center;
    color: var(--Gray-Gray-500, #9E9E9E);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.0417vw;

    input.search{
        flex-shrink: 0;
        width: 49.0104vw;
        height: 1.0417vw;
    }
`
const SearchImg = styled.img`
    margin-left: 0.5208vw;
    width: 1.2500vw;
    height: 1.2500vw;
    flex-shrink: 0;
`
const DropdownSearchBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 7.7604vw;
    height: 2.2917vw;
    padding: 0.5208vw 1.0417vw;
    align-items: center;
    gap: 0.2604vw;
    flex-shrink: 0;
    border: 0.0521vw solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
    margin-left: 0.8333vw;
`
const DropdownSearch = styled.div`
    width: 4.1667vw;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0417vw; /* 133.333% */
    letter-spacing: -0.0156vw;
`

const Community = () => {
    const [selectedSort, setSelectedSort] = useState("신규순");
    const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);
    
    const handleSortSelection = (sortType) => {
        setSelectedSort(sortType);
        setIsSortBoxVisible(false);
    };

    return (
        <Container>
        <SideBar>
            <CommunityP>커뮤니티</CommunityP>
            <CommunityP2>자유게시판</CommunityP2>
            <CommunityP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>명예 헌혈 게시판</CommunityP>
            <CommunityP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>헌혈 인증 게시판</CommunityP>
            <CommunityP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>헌혈 정보 공유 게시판</CommunityP>
            <CommunityP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>내가 쓴 글 보기</CommunityP>

        </SideBar>

        <MainConationer>
        <Breadcrums>
            <BreadcrumsP>홈</BreadcrumsP>
            <BreadcrumsP>{">"}</BreadcrumsP>
            <BreadcrumsP>커뮤니티</BreadcrumsP>
            <BreadcrumsP>{">"}</BreadcrumsP>
            <BreadcrumsP>자유게시판</BreadcrumsP>
        </Breadcrums>

        <RightMiddle>
            <CommunityP style={{ fontSize: '1.2vw' }}>자유게시판</CommunityP>
            <SortContainer>
                <img src={SortBoxYes} alt="sortBox" style={{ width: '1.2vw', height: '1.2vw' }}/>
                <SortDiv onClick={() => setIsSortBoxVisible(!isSortBoxVisible)}>
                    <CommunityP style={{ fontSize: '0.75vw', color: colors.crewGray2 }}>{selectedSort}</CommunityP>
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

        <div className="crewBar" style={{ width: '100%', height: '0.1vw', border: 'none', backgroundColor: colors.crewGray, marginBottom: "2vw"}}/>
        

        <BoardContainer>
       
        <CardContainer>
                <CardTmp cardType="type1" selectBloodType="B-" linkPath="./CommunitySinglePost/SinglePost"/>
                <CardTmp cardType="type1" selectBloodType="O+" linkPath="./CommunitySinglePost/SinglePost"/>
                <CardTmp cardType="type2" selectBloodType="AB-" linkPath="./CommunitySinglePost/SinglePost"/>

                <CardTmp cardType="type1" selectBloodType="B+" linkPath="./CommunitySinglePost/SinglePost"/>
                <Card></Card>
                <Card></Card>

                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardContainer>

            <WritePostContainer>
                <WritePost>글 작성하기</WritePost>
            </WritePostContainer>

            <SearchContainer>
                <SearchBox>
                    <SearchBar ><input className ="search" type="text" placeholder="글 제목을 입력하세요"/></SearchBar>
                    <SearchImg src ={search1} alt="search1"/>
                </SearchBox>
                <DropdownSearchBox>
                    <DropdownSearch>제목</DropdownSearch>
                    <DropdownImg src ={arrow_down} alt="arrow_down"/>
                </DropdownSearchBox>
            </SearchContainer>

            <PagnationContainer>
                <Pagnation>
                    <PagnationImg src={arrow_12px2} alt="arrow2"/>
                    <PagnaionNumber>1</PagnaionNumber>
                    <PagnaionNumber>2</PagnaionNumber> 
                    <PagnaionNumber>3</PagnaionNumber>
                    <PagnaionNumber>4</PagnaionNumber>
                    <PagnaionNumber>5</PagnaionNumber>
                    <DotImg2 src={dot2} alt="dot2"/>
                    <PagnaionNumber2>N</PagnaionNumber2>
                    <PagnationImg2 src={arrow_12px2} alt="arrow2" />
                </Pagnation>
            </PagnationContainer>
        </BoardContainer>
        </MainConationer>

      </Container>
    )
}

export default Community;