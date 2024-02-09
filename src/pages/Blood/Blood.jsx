import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
// import SortBoxYes from '../../assets/images/sortbox_yes.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import dot2 from "../../assets/images/dot2.png";
import arrow_12px2 from "../../assets/images/arrow_12px2.png";
import CardTmp from '../../components/Card/Card';
import { Link } from "react-router-dom";
// import BoardDropdown from "./BoardDropdown/BoardDropdown";
import axios from "axios";

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2vw;
    margin-bottom: 4vw;
`

const BloodP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const BloodP2 = styled.p`
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
const BloodSortBox = styled.div`
    width: 11.6vw;
    min-height: 8.3vw;
    padding: 0.4vw 0;
    margin-right: 12.6563vw;
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
const SortBox = styled.div`
    width: 11.6vw;
    min-height: 8.3vw;
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

const HoverDiv1 = styled.div`
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

const HoverDiv2 = styled.div`
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

const BoardContainer = styled.div`
    width: 100%;
`

const BloodContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.05vw solid ${colors.crewGray3};
`
const BloodTap = styled.div`
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
    cursor: pointer;

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
    width: 80%;
    padding-top: 2.6vw;
    padding-left: 1.8vw;
    display: grid; 
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    align-items: center; 
    justify-content: space-between;
    gap: 1.5vw;
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
    margin-top: 3vw;
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

    const POSTS_PER_PAGE = 9; // 한 페이지에 표시할 게시글 수

    const [selectBloodType,setBloodType] =useState("A+");

    const [selectBloodSort, setSelectedBloodSort] = useState("WB");
    const [isSortBloodVisible, setIsSortBloodVisible]= useState(false);

    const [selectedSort, setSelectedSort] = useState("신규순");
    const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);

    const handleBlood = (bloodType) =>{
        setBloodType(bloodType); // bloodtype 선택하면 게시물, 타이틀 바뀌도록
    }

    const handleSortBlood=(SortBloodType) =>{
        setSelectedBloodSort(SortBloodType);
        setIsSortBloodVisible(false);
    }

    const handleSortSelection = (sortType) => {
      setSelectedSort(sortType);
      setIsSortBoxVisible(false);
    };

    const [posts, setPosts] = useState([]); // 게시글 목록을 저장할 상태
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

    // 현재 페이지에 따라 표시할 게시글을 계산
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 번호를 설정하는 함수
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("게시글을 불러오는 데 실패했습니다.", error);
            }
        };

        fetchPosts();
        }, []);
    
    return (
      <Container>
        <SideBar>
            <BloodP>지정헌혈</BloodP>
            <BloodP2>지정헌혈 요청 글</BloodP2>
            <BloodP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>지정헌혈 요청하기</BloodP>
            <Link to="/blood/bloodpremium" style={{ textDecoration: 'none' }}>
            <BloodP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>지정헌혈 프리미엄</BloodP>
            </Link>
            <BloodP style={{marginTop: "1.5vw", fontSize: "0.75vw"}}>내가 쓴 글 보기</BloodP>
        </SideBar>

        <MainConationer>
        <Breadcrums>
            <BreadcrumsP>홈</BreadcrumsP>
            <BreadcrumsP>{">"}</BreadcrumsP>
            <BreadcrumsP>지정헌혈</BreadcrumsP>
            <BreadcrumsP>{">"}</BreadcrumsP>
            <BreadcrumsP>지정헌혈 요청 글</BreadcrumsP>
        </Breadcrums>

        <BloodP style={{marginTop: "2vw", fontSize: '1.2vw'}}>지정헌혈 요청글</BloodP>
        <RightMiddle>
            <BloodP style={{ color: colors.crewGray3, marginTop: "0.3vw" }}>{selectBloodType} 요청 글</BloodP>
            <SortContainer>
                <SortDiv onClick={() => setIsSortBloodVisible(!isSortBloodVisible)}>
                    <BloodP style={{ fontSize: '0.75vw', color: colors.crewGray2 }}>{selectBloodSort}</BloodP> 
                    <img src={ArrowDown} alt="arrow-down" style={{ width: '1.2vw', height: '1.2vw' }}/>
                </SortDiv>

                <SortDiv onClick={() => setIsSortBoxVisible(!isSortBoxVisible)}>
                    <BloodP style={{ fontSize: '0.75vw', color: colors.crewGray2 }}>{selectedSort}</BloodP>
                    <img src={ArrowDown} alt="arrow-down" style={{ width: '1.2vw', height: '1.2vw' }}/>
                </SortDiv>
            </SortContainer>
             {selectBloodSort && (
                <BloodSortBox show={isSortBloodVisible}>
                    <HoverDiv1 onClick={() => handleSortBlood("RBC")}>RBC</HoverDiv1>
                    <HoverDiv1 onClick={() => handleSortBlood("F-RBC")}>F-RBC</HoverDiv1>
                    <HoverDiv1 onClick={() => handleSortBlood("W-RBC")}>W-RBC</HoverDiv1>
                    <HoverDiv1 onClick={() => handleSortBlood("PLT")}>PLT</HoverDiv1>
                </BloodSortBox>
            )}
            {selectedSort && (
                <SortBox show={isSortBoxVisible}>
                    <HoverDiv2 onClick={() => handleSortSelection("신규순")}>신규순</HoverDiv2>
                    <HoverDiv2 onClick={() => handleSortSelection("공감순")}>공감순</HoverDiv2>
                    <HoverDiv2 onClick={() => handleSortSelection("마감기간순")}>마감기간순</HoverDiv2>
                </SortBox>
            )}
        </RightMiddle>

        <div className="crewBar" style={{ width: '100%', height: '0.1vw', border: 'none', backgroundColor: colors.crewGray}}/>

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
              {currentPosts.map((post) => (
                  <CardTmp
                    cardType = {`type${post.id/4 % 2 + 1}`}
                    selectBloodType="B-"
                    key={post.id}
                    userId = {post.userId}
                    title={post.title}
                    body={post.body}
                  />
              ))}
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


