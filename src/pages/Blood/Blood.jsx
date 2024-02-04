import React,{useState} from "react";
import styled from "styled-components";
import arrow_12px from "../../assets/images/arrow_12px.png";
import Ellipse8 from "../../assets/images/Ellipse8.png";
import dot from "../../assets/images/dot.png";
import dot2 from "../../assets/images/dot2.png";
import arrow_12px2 from "../../assets/images/arrow_12px2.png";
import arrow_down from "../../assets/images/arrow-down.png";
import CardTmp from './CardTmp';
import { Link } from "react-router-dom";
import BoardDropdown from "./BoardDropdown/BoardDropdown";


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
    padding: 2.0833vw 0.0000vw 1.7708vw 0.5208vw;
    position: relative;
`
const MainTitle = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 1.2500vw;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1875vw; 
`
const SubTitle = styled.div`
    color: var(--Gray-Gray-500, #9E9E9E);
    font-family: Pretendard;
    font-size: 0.9375vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5625vw;
`

const BoardContainer = styled.div`
    width: 62.5000vw;
`

const DropdownBoardContainer = styled.div`
    display: inline-flex;
    position: relative;
    border: 1px solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
    float: right;
    width: 12.0833vw;
    height: 2.6042vw;
    padding: 0.7813vw;
    flex-shrink: 0;
    cursor: pointer;
`
const DropdownBoardBox =styled.div`
    position: relative;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    height:1.0417vw;
    width: 9.2708vw;
    position: relative;
`

const DropdownImg =styled.img`
    width: 1.2500vw;
    height: 1.2500vw;
    flex-shrink: 0;
`
const BloodContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 62.5000vw;
    align-items: flex-start;
    border-bottom: 0.0521vw solid var(--Gray-Gray-500, #9E9E9E);
`
const BloodTap =styled.div`
    display: flex;
    width: 7.8125vw;
    padding: 0.5208vw 1.3542vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    flex-shrink: 0;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 1.2500vw;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1875vw; /* 175% */

    &:active{
        border-radius: 0.2604vw 0.2604vw 0.0000vw 0.0000vw;
        border-bottom: 0.1042vw solid var(--Gray-Gray-700, #464A4D);
        color: var(--Gray-Gray-900, #17191A);
        font-family: Pretendard;
        font-size: 1.2500vw;
        font-style: normal;
        font-weight: 700;
        line-height: 2.1875vw; /* 175% */
    }
    
`

const CardContainer =styled.div`   
    padding-top: 2.6042vw;
    display: grid; 
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    align-items: center; 
    justify-content: space-between;
    gap: 1.5625vw;
`
const Card = styled.div`
    width: 19.7917vw;
    height: 19.7917vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);
`;


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
    margin-top: 3.9583vw;
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


const Blood = () => {

    const [selectBloodType,setBloodType] =useState("A+");
    const [selectBloodBoardType, setBloodBoardType] = useState("신규순");
    

    const handleBlood = (bloodType) =>{
        setBloodType(bloodType); // bloodtype 선택하면 게시물, 타이틀 바뀌도록
    }
    const handleBoardType =(BoardType) =>{
        setBloodBoardType(BoardType);
    }

    
    return (
      <Container>
        <SideBar>
            <div className="title">지정헌혈</div>
            <div className="list">지정헌혈 요청 글</div>

        </SideBar>

        <MainConationer>
        <Breadcrums>
            <BreadcrumsP>홈</BreadcrumsP><BreadcrumsIcon src={arrow_12px} alt="arrow_12px"/>
            <BreadcrumsP>지정헌혈</BreadcrumsP><BreadcrumsIcon src={arrow_12px} alt="arrow_12px"/>
            <BreadcrumsP>지정헌혈 요청 글</BreadcrumsP>
        </Breadcrums>

        <Title>
            <MainTitle>지정헌혈 요청 글</MainTitle>
            <SubTitle>{selectBloodType} 요청 글</SubTitle>
            <DropdownBoardContainer onClick={()=>setBloodBoardType(!selectBloodBoardType)}>
                <DropdownBoardBox>
                    {selectBloodBoardType}
                    
                </DropdownBoardBox>
                <DropdownImg src = {arrow_down} alt = "arrow_down"/>
                
            </DropdownBoardContainer>
            <BoardDropdown isVisible={selectBloodBoardType} handleBoardType={handleBoardType}/>
        </Title>

        <BoardContainer>
            <BloodContainer>
                <BloodTap onClick={() => handleBlood("A+")}>A+</BloodTap>
                <BloodTap onClick={() => handleBlood("B+")}>B+</BloodTap>
                <BloodTap onClick={() => handleBlood("O+")} >O+</BloodTap>
                <BloodTap onClick={() => handleBlood("AB+")} >AB+</BloodTap>
                <BloodTap onClick={() => handleBlood("A-")} >A-</BloodTap>
                <BloodTap onClick={() => handleBlood("B-")} >B-</BloodTap>
                <BloodTap onClick={() => handleBlood("O-")} >O-</BloodTap>
                <BloodTap onClick={() => handleBlood("AB-")} >AB-</BloodTap>
            </BloodContainer>

            <CardContainer>
                <CardTmp cardType="type2" selectBloodType="B-" linkPath="./bloodSinglePost/SinglePost"/>
                <CardTmp cardType="type1" selectBloodType="O+" linkPath="./bloodSinglePost/SinglePost"/>
                <CardTmp cardType="type2" selectBloodType="AB-" linkPath="./bloodSinglePost/SinglePost"/>

                <CardTmp cardType="type2" selectBloodType="B+" linkPath="./bloodSinglePost/SinglePost"/>
                <CardTmp selectBloodType={selectBloodType} linkPath="./bloodSinglePost/SinglePost"/>
                <Card></Card>

                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardContainer>

            <WritePostContainer>
                <Link to="./BloodWrite/Bloodwrite" style={{ textDecoration: 'none' }}>
                <WritePost>글 작성하기</WritePost>
                </Link>
            </WritePostContainer>

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

