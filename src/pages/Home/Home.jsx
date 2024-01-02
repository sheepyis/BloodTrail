import styled from "styled-components";
import colors from "../../styles/color";
import Banner from "../../assets/images/Banner.png";

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HomeBox = styled.div`
    width: 65%;
    margin: 3.0208vw 0 5.1042vw 0;
    background-color: ${colors.mainRed};
`

const Home = () => {
    return (
        <HomeContainer>
            <img src={Banner} alt="Banner" style={{width: "100%"}}/>
            <HomeBox>
                여기에 Home 꾸미기
            </HomeBox>
        </HomeContainer>
    )
}

export default Home;