import styled from "styled-components";
import colors from "../../styles/color";
import Banner from "../../assets/images/Banner.png";
import ArrowLeft from "../../assets/images/arrow=active.png";
const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BannerContainer = styled.div`
    width: 100%;
    position: relative;
`

const StyledArrow = styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer; 
    width:2vw;
    height:2vw;
`

const ArrowLeftStyled = styled(StyledArrow)`
    left: 2.5vw;
`

const ArrowRightStyled =styled (StyledArrow)`
    right:2.5vw;
`


const HomeBox = styled.div`
    width: 65%;
    margin: 3.0208vw 0 5.1042vw 0;
    background-color: ${colors.mainRed};
`


const Home = () => {
    return (
        <HomeContainer>
            <BannerContainer> 
                <ArrowLeftStyled src={ArrowLeft} alt="Left Arrow" />
            <img src={Banner} alt="Banner" style={{width: "100%"}}/>
            <ArrowRightStyled src={ArrowLeft} alt="Right Arrow" />
            </BannerContainer>
            <HomeBox>
                여기에 Home 꾸미기
            </HomeBox>
        </HomeContainer>
    )
}

export default Home;