import styled from 'styled-components';
import Banner from '../../assets/images/Banner.png';
import ArrowLeft from '../../assets/images/arrow=active.png';
import { useState } from 'react';
import Banner2 from '../../assets/images/image 23.jpg';
import Banner3 from '../../assets/images/image 48.png';
import ArrowRight from '../../assets/images/arrow=right.png';
import { useEffect } from 'react';
import Dday from '../../components/Dday/Dday';
import Kakao from '../../api/Kakao';
import Ranking from '../../components/Ranking/Ranking';
import Board from '../../components/Board/Board';
import { hotPost } from './HomeData';

const Test2 = styled.div`
`;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  position: relative;
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
  width: 2vw;
  height: 2vw;
`;

const ArrowLeftStyled = styled(StyledArrow)`
  left: 2.5vw;
`;

const ArrowRightStyled = styled(StyledArrow)`
  right: 2.5vw;
`;

const HomeBox = styled.div`
  width: 65%;
`;

const HomeBoxAndSidebar = styled.div`
  width: 100%;
  padding: 3.0208vw 5vw 5.1042vw 5vw;
  display: flex;
  justify-content: center;
`;

const SidebarContainer = styled.div`
  width:100%;
  padding: 1vw;
`;

const Divider = styled.div`
  width: 100%; // 구분선의 길이를 Header와 동일하게 설정
  border-bottom: 1px solid #EEEEEE; // 구분선의 스타일 설정
  margin-bottom: 10%; // 구분선 아래에 여백 추가
`;


const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : bannerImages.length - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < bannerImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  /* rankingData, hotPost axios GET

   useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get("https://my-json-server.typicode.com/typicode/demo/db");
        setRankingData(response.data.rankingData);
      } catch (error) {
        console.error('Error fetching ranking data: ', error);
      }
    };

    const fetchHotPostData = async () => {
      try {
        const response = await axios.get("https://my-json-server.typicode.com/typicode/demo/db");
        setHotPost(response.data.hotPost);
      } catch (error) {
        console.error('Error fetching hot post data: ', error);
      }
    };

    fetchRankingData();
    fetchHotPostData();

  */

  return (
    <HomeContainer>
      <BannerContainer>
        <ArrowLeftStyled
          src={ArrowLeft}
          alt="Left Arrow"
          onClick={handleLeftArrowClick}
        />
        <img
          src={bannerImages[currentImageIndex]}
          alt="Banner"
          style={{ width: '100%' }}
        />
        <ArrowRightStyled
          src={ArrowRight}
          alt="Right Arrow"
          onClick={handleRightArrowClick}
        />
        <DotsContainer>
          {bannerImages.map((_, index) => (
            <Dot
              key={index}
              className={currentImageIndex === index ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </DotsContainer>
      </BannerContainer>
      <HomeBoxAndSidebar>
      <SidebarContainer>
      </SidebarContainer>

      <HomeBox>
        <Ranking home={'home'} />
        <Board postsDatas={hotPost} home={'home'} />
        <Divider/>
        <Kakao />
      </HomeBox>

      <SidebarContainer>
          <Dday />
      </SidebarContainer>
      </HomeBoxAndSidebar>
    </HomeContainer>
  );
};

export default Home;
