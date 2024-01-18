import styled from "styled-components";
import colors from "../../styles/color";
import React from "react";


const FooterContainer = styled.div`
    background-color: ${colors.footerGray};
    width: 100%;
    z-index:0;
`

const FooterBox = styled.div`
    width: 70%;
    padding-top: 1%;
    padding-bottom: 1%;
    align-items: center;
    justify-content: space-evenly;

 
&.Blood{
    position: relative;
    left: 12.5%;
}
&.Community{
    position: relative;
    left: 19%
}
&.Crew{
    position: relative;
    left: 25.5%;
}
&.Live{
    position: relative;
    left: 32.3%;
}
`


const FooterP = styled.p`

    font-weight: 600;
    font-size: 0.8333vw;
    padding: 0vw 10vw;
    margin: 1.5vw;
    flex-direction: column;

&:hover {
    color: ${colors.logoRed};
}
    
`

const Footer = ({hoveredComponent, onHover,onLeave}) => {



    return (
        <FooterContainer>

            {hoveredComponent ==='blood' && (
            <FooterBox 
                className="Blood"
                // onMouseEnter={()=>{ onHover(hoveredComponent)
                //                     console.log(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                        <FooterP>지정헌혈 요청 글</FooterP> 
                        <FooterP>지정헌혈 요청하기</FooterP>
                        <FooterP>지정헌혈 프리미엄</FooterP>
                        <FooterP>내가 쓴 글 보기</FooterP>
                    </li>
                </ul>
            </FooterBox>
            )}

            {hoveredComponent  ==='community' && (
            <FooterBox 
                className="Community"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <FooterP>자유게시판</FooterP>
                <FooterP>명예 헌혈 게시판</FooterP>
                <FooterP>헌혈 인증 게시판</FooterP>
                <FooterP>헌혈 정보 공유 게시판</FooterP>
                <FooterP>내가 쓴 글 보기</FooterP>
                    </li>
                </ul>
            </FooterBox>
            )}

            {hoveredComponent  ==='crew' && (
            <FooterBox 
                className="Crew"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <FooterP>헌혈 크루 가입하기</FooterP>
                <FooterP>내 헌혈 크루 가기</FooterP>
                    </li>
                </ul>
            </FooterBox>
            )}

            {hoveredComponent ==='live' && (
            <FooterBox 
                className="Live"
                onMouseEnter={()=>{ onHover(hoveredComponent)}}
                onMouseLeave={() => onLeave()}>
                <ul>
                    <li>
                <FooterP>live</FooterP>
                    </li>
                </ul>
            </FooterBox>
            )}

        </FooterContainer>
    )
}

export default Footer;