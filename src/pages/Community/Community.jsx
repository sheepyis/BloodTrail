import React,{useState} from "react";
import styled from "styled-components";
import arrow_12px from "../../assets/images/arrow_12px.png";
import Ellipse8 from "../../assets/images/Ellipse8.png";
import dot from "../../assets/images/dot.png";
import dot2 from "../../assets/images/dot2.png";
import arrow_12px2 from "../../assets/images/arrow_12px2.png";
import search1 from "../../assets/images/search1.png";
import arrow_down from "../../assets/images/arrow-down.png";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 91.1458vw;

`
const SideBar = styled.div`
    display: flex;
    width: 17.7083vw;
    height: 91.1458vw;
    flex-direction: column;
    padding-top: 1.3021vw;
    align-items: flex-start;
    flex-shrink: 0;

    .title{
        width: 17.7083vw;
        height: 3.1250vw;
        color: var(--Gray-Gray-900, #17191A);
        font-family: Pretendard;
        font-size: 0.9375vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5625vw; 
        padding: 0.7813vw 0.0000vw 0.7813vw 1.5625vw;
    }
    .list{
        width: 17.7083vw;
        height: 2.6042vw;
        flex-shrink: 0;
        color: var(--Gray-Gray-900, #17191A);
        font-family: Pretendard;
        font-size: 0.7813vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.0417vw;
        letter-spacing: -0.0156vw;
        padding: 0.7813vw 0.0000vw 0.7813vw 1.5625vw;
        &:hover{
            color: var(--Primary-Red-900, #E95458);
            font-family: Pretendard;
            font-size: 0.7813vw;
            font-style: normal;
            font-weight: 600;
            line-height: 1.0417vw; 
        }
    }
`
const MainConationer =styled.div`
    padding-left: 1.0417vw;
`
const Breadcrums = styled.div`
    display: flex;
    width: 62.5000vw;
    height: 3.1250vw;
    padding: 0.9375vw 52.2917vw 0.9375vw 0.2083vw;
    align-items: center;
    flex-shrink: 0;
`
const BreadcrumsP = styled.div`
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: * 0.9375vw;
    letter-spacing: -0.0187vw;
    padding-right: 0.2083vw; 
`
const BreadcrumsIcon = styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
`
const MainTitle = styled.div`
    padding: 2.0833vw 0.0000vw 1.6667vw 0.5208vw;
    color: var(--Gray-Gray-900, #17191A);
    padding-right: 44.4271vw;
    /* Body/Headline/medium */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px; /* 175% */
`
const DropdownBoard1 =styled.div`
    display: flex;
    align-items: flex-end;
`
const DropdownBoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
    width: 12.0833vw;
    height: 2.6042vw;
    padding: 0.7813vw;
    flex-shrink: 0;
`
const DropdownBoardBox =styled.div`
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    height:1.0417vw;
    width: 9.2708vw;
`
const DropdownBoardlist =styled.div`

`
const DropdownImg =styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
    flex-shrink: 0;
`
const TitleLine =styled.div`
    padding-bottom: 2.5000vw;
`
const BoardContainer = styled.div`
    width: 62.5000vw;
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
    float: right;
    padding-top: 0.5208vw; //CardContainer에서 1.5625vw 간격 벌려놔서 추가로 0.5208vw;
`
const WritePost =styled.button`
    width: 14.0625vw;
    height: 2.0833vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Primary-Red-500, #FFB2B5);
    background: var(--black-white-white-1000, #FFF);
    color: var(--Primary-Red-900, #E95458);
    text-align: center;
font-family: Pretendard;
font-size: 0.7813vw;
font-style: normal;
font-weight: 600;
line-height: 1.0417vw; /* 133.333% */
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

const Blood = () => {

    const [selectBloodType,setBloodType] =useState("A+");

    const handleBlood = (bloodType) =>{
        setBloodType(bloodType); // bloodtype 선택하면 게시물, 타이틀 바뀌도록
    }

    return (
      <Container>
        <SideBar>
            <div className="title">커뮤니티</div>
            <div className="list">명예 헌혈 게시판</div>
            <div className="list">헌혈 인증 게시판</div>
            <div className="list">헌혈 정보 공유 게시판</div>
            <div className="list">내가 쓴 글 보기</div>

        </SideBar>

        <MainConationer>
        <Breadcrums>
            <BreadcrumsP>홈</BreadcrumsP><BreadcrumsIcon src={arrow_12px} alt="arrow_12px"/>
            <BreadcrumsP>커뮤니티</BreadcrumsP><BreadcrumsIcon src={arrow_12px} alt="arrow_12px"/>
            <BreadcrumsP>자유게시판</BreadcrumsP>
        </Breadcrums>

        <Title>
            <MainTitle>자유게시판</MainTitle>
            <DropdownBoard1>
                <DropdownBoardContainer>
                    <DropdownBoardBox>신규순</DropdownBoardBox>
                    <DropdownImg src = {arrow_down} alt = "arrow_down"/>
                </DropdownBoardContainer>
            </DropdownBoard1>
        </Title>
            <TitleLine>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1200 2" fill="none">
                <path d="M0 1L1200 1.0001" stroke="#17191A" stroke-width="2"/>
                </svg>
            </TitleLine>
        

        <BoardContainer>
       
            <CardContainer>
                <Card>
                    <CardNameContainer>
                        <CardUser>
                            <UserImg src = {Ellipse8} alt = "UserImg"/>
                            <UserName>user name</UserName>
                        </CardUser>
                            <DotImg src = {dot} alt = "DotImg"/>
                    </CardNameContainer>

                   
                    <CardTitle>
                        <CardTitleP>지정헌혈 글 제목</CardTitleP>
                        <BloodType>{selectBloodType}</BloodType>
                    </CardTitle>
                
                    <CardP className="type1">지정헌혈 글 내용입니다</CardP>
                    <CardRequestPeriod>
                        <Period1>요청기간</Period1>
                        <Period2>~2023.12.14</Period2>
                    </CardRequestPeriod>
                </Card>
            

                
                <Card>
                    <CardNameContainer>
                        <CardUser>
                            <UserImg src = {Ellipse8} alt = "UserImg"/>
                            <UserName>user name</UserName>
                        </CardUser>
                            <DotImg src = {dot} alt = "DotImg"/>
                    </CardNameContainer>

                   <CardPhoto></CardPhoto>
                    <CardTitle>
                        <CardTitleP>지정헌혈 글 제목</CardTitleP>
                        <BloodType>{selectBloodType}</BloodType>
                    </CardTitle>

                    <CardP className="type2">지정헌혈 글 내용입니다</CardP>
                    <CardRequestPeriod>
                        <Period1>요청기간</Period1>
                        <Period2>~2023.12.14</Period2>
                    </CardRequestPeriod>
                </Card>
                <Card></Card>

                <Card></Card>
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

export default Blood;