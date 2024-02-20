import styled from "styled-components";
import colors from "../../styles/color";
import React from "react";
import { Link } from "react-router-dom";


const HeaderMenuContainer = styled.div`
    position: absolute;
    top: 6%;
    background-color: ${colors.white};
    backdrop-filter: blur(10.100000381469727px);
    width: 100vw;
    z-index:1;
`

const HeaderBox = styled.div`
    height: 252px;
    width: 100vw;
    padding-top: 1vw;
    padding-left: 14.5vw;

    &.Blood{
        position: relative;
        left: 3.6vw;
    }
    &.Community{
        position: relative;
        left: 8.39vw;
    }
    &.Crew{
        position: relative;
        left: 13.04vw;
    }
    // &.Live{
    //     position: relative;
    //     left: 14.5vw;
    // }
`

const HeaderP = styled.p`
    width: 10vw;
    font-weight: 600;
    font-size: 0.8333vw;
    margin: 1.5vw;
    padding: 0px 10px;
    gap: 10px;
    background: green;

    &:hover {
        color: ${colors.logoRed};
    }
`

const HeaderMenu = ({hoveredComponent, onHover,onLeave,handleTouchEnd,handleTouchStart}) => {
    return (
        <HeaderMenuContainer>

            {hoveredComponent ==='blood' && (
            <HeaderBox 
                className="Blood"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <ul>
                    <li>
                        <Link to="/blood" style={{ textDecoration: 'none' }}><HeaderP>지정헌혈 요청 글</HeaderP></Link>
                        <Link to="/blood/bloodwrite/bloodwrite" style={{ textDecoration: 'none' }}><HeaderP>지정헌혈 요청하기</HeaderP></Link>
                        {/* <Link to="/blood/bloodpremium" style={{ textDecoration: 'none' }}><HeaderP>지정헌혈 프리미엄</HeaderP></Link> */}
                        <Link to="/myposts" style={{ textDecoration: 'none' }}><HeaderP>내가 쓴 글 보기</HeaderP></Link>
                      </li>
                </ul>
            </HeaderBox>
            )}

            {hoveredComponent  ==='community' && (
            <HeaderBox 
                className="Community"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <ul>
                  <li>
                        <Link to="/community"><HeaderP>자유게시판</HeaderP></Link>
                        <Link to="/community/honor"><HeaderP>명예 헌혈 게시판</HeaderP></Link>
                        <Link to="/community/certification"><HeaderP>헌혈 인증 게시판</HeaderP></Link>
                        <Link to="/community/info"><HeaderP>헌혈 정보 공유 게시판</HeaderP></Link>
                        <Link to="/myposts/community"><HeaderP>내가 쓴 글 보기</HeaderP></Link>
                  </li>
                </ul>
            </HeaderBox>
            )}

            {hoveredComponent  ==='crew' && (
            <HeaderBox 
                className="Crew"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <ul>
                    <li>
                        <Link to="/crew"><HeaderP>헌혈 크루 찾기</HeaderP></Link>
                    </li>
                </ul>
            </HeaderBox>
            )}

            {/* {hoveredComponent ==='live' && (
            <HeaderBox 
                className="Live"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
            </HeaderBox>
            )} */}

        </HeaderMenuContainer>
    )
}

export default HeaderMenu;