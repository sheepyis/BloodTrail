import styled from "styled-components";
import colors from "../../styles/color";
import React from "react";

const HeaderMenuContainer = styled.div`
    position: absolute;
    background-color: ${colors.footerGray};
    width: 100vw;
    z-index:1;
`

const HeaderBox = styled.div`
    height: 16.5625vw;
    width: 100vw;
    padding-top: 1vw;
    padding-left: 16vw;
    align-items: center;
    justify-content: space-evenly;

    &.Blood{
        position: relative;
        left: 0;
    }
    &.Community{
        position: relative;
        left: 5vw;
    }
    &.Crew{
        position: relative;
        left: 9.5vw;
    }
    &.Live{
        position: relative;
        left: 14.5vw;
    }
`

const HeaderP = styled.p`
    font-weight: 600;
    font-size: 0.8333vw;
    margin: 1.5vw;
    flex-direction: column;

    &:hover {
        color: ${colors.logoRed};
    }
`

const HeaderMenu = ({hoveredComponent, onHover,onLeave}) => {
    return (
        <HeaderMenuContainer>

            {hoveredComponent ==='blood' && (
            <HeaderBox 
                className="Blood"
                // onMouseEnter={()=>{ onHover(hoveredComponent)
                //                     console.log(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                        <HeaderP>지정헌혈 요청 글</HeaderP> 
                        <HeaderP>지정헌혈 요청하기</HeaderP>
                        <HeaderP>지정헌혈 프리미엄</HeaderP>
                        <HeaderP>내가 쓴 글 보기</HeaderP>
                    </li>
                </ul>
            </HeaderBox>
            )}

            {hoveredComponent  ==='community' && (
            <HeaderBox 
                className="Community"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <HeaderP>자유게시판</HeaderP>
                <HeaderP>명예 헌혈 게시판</HeaderP>
                <HeaderP>헌혈 인증 게시판</HeaderP>
                <HeaderP>헌혈 정보 공유 게시판</HeaderP>
                <HeaderP>내가 쓴 글 보기</HeaderP>
                    </li>
                </ul>
            </HeaderBox>
            )}

            {hoveredComponent  ==='crew' && (
            <HeaderBox 
                className="Crew"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <HeaderP>헌혈 크루 가입하기</HeaderP>
                <HeaderP>내 헌혈 크루 가기</HeaderP>
                    </li>
                </ul>
            </HeaderBox>
            )}

            {hoveredComponent ==='live' && (
            <HeaderBox 
                className="Live"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <HeaderP>live</HeaderP>
                    </li>
                </ul>
            </HeaderBox>
            )}

        </HeaderMenuContainer>
    )
}

export default HeaderMenu;