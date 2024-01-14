import styled from "styled-components";
import colors from "../../styles/color";
import Banner from "../../assets/images/Banner.png";
import ArrowLeft from "../../assets/images/arrow=active.png";
import { useState } from "react";
import Banner2 from "../../assets/images/image 23.jpg";
import Banner3 from "../../assets/images/image 48.png";
import ArrowRight from "../../assets/images/arrow=right.png";
import { useEffect } from "react";


const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BannerWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Slide = styled.div`
    flex: 0 0 ${100 / bannerImages.length}%;
    transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1); 
`;

const BannerContainer = styled.div`
    display: flex;
    width: ${bannerImages.length * 100}%;
    transform: ${props => `translateX(-${props.slideIndex * (100 / bannerImages.length)}%)`};
    transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1); 
`;


const bannerImages = [Banner, Banner2, Banner3];

const DotsContainer = styled.div`
    position: absolute;
    bottom: 1.5vw;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;

const Dot = styled.span`
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="%23EEEEEE"/></svg>');
    width: 0.5vw;
    height: 0.5vw;
    margin-left: 0.5vw;
    border-radius: 50%;
    cursor: pointer;
    background-size: cover;

   
    &.active {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="%23E95458"/></svg>');
    }
`;

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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % bannerImages.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, []);

    const handleLeftArrowClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : bannerImages.length - 1));
    };

    const handleRightArrowClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex < bannerImages.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <HomeContainer>
            <BannerWrapper>
                <BannerContainer slideIndex={currentImageIndex}>
                    {bannerImages.map((image, index) => (
                        <Slide key={index}>
                            <img src={image} alt={`Banner ${index}`} style={{ width: "100%" }} />
                        </Slide>
                    ))}
                </BannerContainer>
            </BannerWrapper>
            <ArrowLeftStyled src={ArrowLeft} alt="Left Arrow" onClick={handleLeftArrowClick}/>
            <ArrowRightStyled src={ArrowRight} alt="Right Arrow" onClick={handleRightArrowClick} />
            <DotsContainer>
                {bannerImages.map((_, index) => (
                    <Dot
                        key={index}
                        className={currentImageIndex === index ? 'active' : ''}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </DotsContainer>
            <HomeBox>
                여기에 Home 꾸미기
            </HomeBox>
        </HomeContainer>
    )
}

export default Home;