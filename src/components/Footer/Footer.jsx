import styled from "styled-components";
import colors from "../../styles/color";
import React from "react";


const FooterContainer = styled.div`
    position: absolute;
    background-color: ${colors.footerGray};
    width: 100vw;
    z-index:1;
`

const FooterBox = styled.div`
    height: 16.5625vw;
    width: 100vw;
    padding-top: 1.5625vw;
    padding-left: 18vw; // 360px로 설정시 headerMenu와 안맞아 임의로 줄임
    align-items: center;
    justify-content: space-evenly;

 
&.Blood{
    position: relative;
    left: 0;
}
&.Community{
    position: relative;
    left: 5.1667vw;
}
&.Crew{
    position: relative;
    left: 10.8vw;
}
&.Live{
    position: relative;
    left: 16.4vw;
}
`


const FooterP = styled.p`

    font-weight: 600;
    font-size: 0.8333vw;
    // padding: 0vw 10vw;
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