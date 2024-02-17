import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../styles/color';
import SortBoxYes from '../../assets/images/sortbox_yes.png';
import ArrowDown from '../../assets/images/arrow-down.png';
import dot from '../../assets/images/dot.png';
import dot2 from '../../assets/images/dot2.png';
import arrow_12px2 from '../../assets/images/arrow_12px2.png';
import search1 from '../../assets/images/search1.png';
import arrow_down from '../../assets/images/arrow-down.png';
import { Link } from 'react-router-dom';
import CardTmp from '../../components/Card/Card';
import axios from 'axios';
import Sidebar from '../../components/Navigation/Sidebar';
import Breadcrums from '../../components/Navigation/Breadcrums';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const CommunityP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const MainConationer = styled.div`
  width: 67%;
`;

const RightMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1vw;
  margin-top: 2vw;
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

const SortBox = styled.div`
  width: 11.6vw;
  min-height: 5.8vw;
  padding: 0.4vw 0;
  border: 0.05vw solid ${colors.lightGray};
  position: absolute;
  z-index: 1;
  background-color: ${colors.white};
  right: 0;
  margin-top: 2.7vw;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
`;

const SortBox2 = styled.div`
  width: 7.7604vw;
  min-height: 5.8vw;
  padding: 0.4vw 0;
  border: 0.05vw solid ${colors.lightGray};
  position: absolute; /* 절대 위치 설정 */
  z-index: 1;
  background-color: ${colors.white};
  left: 0;
  top: 100%;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
`;

const HoverDiv = styled.div`
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
`;

const DropdownImg = styled.img`
  width: 1.25vw;
  height: 1.25vw;
  flex-shrink: 0;
`;

const BoardContainer = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  width: 80%;
  padding-top: 2.6vw;
  padding-left: 1.8vw;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-items: center;
  justify-content: space-between;
  gap: 1.5vw;
`;

const Card = styled.div`
  width: 19.7917vw;
  height: 19.7917vw;
  flex-shrink: 0;
  border-radius: 0.2604vw;
  border: 0.0521vw solid var(--Gray-Gray-200, #eee);
  background: var(--black-white-white-1000, #fff);
`;

const WritePostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 0.8vw;
  margin: 1vw 0;
`;
const WritePost = styled.button`
  width: 13.5vw;
  height: 2vw;
  border-radius: 0.25vw;
  border: 0.05vw solid #ffb2b5;
  color: ${colors.mainRed};
  text-align: center;
  font-size: 0.75vw;
  font-weight: 600;
`;

const PagnationContainer = styled.div`
  margin-top: 3.4375vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pagnation = styled.div`
  display: flex;
  height: 1.3542vw;
`;

const PagnaionNumber = styled.div`
  display: inline-flex;
  margin-right: 1.3021vw;
  padding: 0.2083vw;
  justify-content: center;
  align-items: center;
  color: var(--Gray-Gray-700, #464a4d);
  text-align: center;

  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 0.9375vw */
  letter-spacing: -0.0187vw;

  &:active {
    border-radius: 5.2083vw;
    background: var(--Primary-Red-200, #fff6f7);
    color: var(--Primary-Red-900, #e95458);
    text-align: center;
    font-family: Inter;
    font-size: 0.625vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const PagnaionNumber2 = styled.div`
  display: inline-flex;
  // padding: 0.2083vw;
  justify-content: center;
  align-items: center;
  color: var(--Gray-Gray-700, #464a4d);
  text-align: center;

  font-family: Pretendard;
  font-size: 0.625vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 0.9375vw */
  letter-spacing: -0.0187vw;

  &:active {
    border-radius: 5.2083vw;
    background: var(--Primary-Red-200, #fff6f7);
    color: var(--Primary-Red-900, #e95458);
    text-align: center;
    font-family: Inter;
    font-size: 0.625vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const DotImg2 = styled.img`
  width: 0.7292vw;
  height: 0.1042vw;
  flex-shrink: 0;
  margin: 0.625vw 1.25vw 0.625vw 0vw;
`;
const PagnationImg = styled.img`
  width: 1.25vw;
  height: 1.25vw;
  margin-right: 1.25vw;
`;
const PagnationImg2 = styled.img`
  width: 1.25vw;
  height: 1.25vw;
  transform: rotate(180deg);
  margin-left: 1.25vw;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3.6458vw;
`;
const SearchBox = styled.div`
  padding: 0.1042vw 0.5208vw;
  display: flex;
  align-items: center;
  width: 53.9063vw;
  height: 2.2917vw;
  border: 1px solid var(--Gray-Gray-200, #eee);
`;

const SearchBar = styled.div`
  width: 51.0938vw;
  height: 2.0833vw;
  padding: 0.5208vw;
  align-items: center;
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.0417vw;

  input.search {
    flex-shrink: 0;
    width: 49.0104vw;
    height: 1.0417vw;
  }
`;
const SearchImg = styled.img`
  margin-left: 0.5208vw;
  width: 1.25vw;
  height: 1.25vw;
  flex-shrink: 0;
`;
const DropdownSearchBox2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 7.7604vw;
  height: 2.2917vw;
  padding: 0.5208vw 1.0417vw;
  align-items: center;
  gap: 0.2604vw;
  flex-shrink: 0;
  border: 0.0521vw solid var(--Gray-Gray-200, #eee);
  background: var(--black-white-white-1000, #fff);
  margin-left: 0.8333vw;
  position: relative; /* 여기에 relative 위치 설정 추가 */
`;
const DropdownSearch = styled.div`
  width: 4.1667vw;
  color: var(--Gray-Gray-700, #464a4d);
  font-family: Pretendard;
  font-size: 0.7813vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1.0417vw; /* 133.333% */
  letter-spacing: -0.0156vw;
`;

const Community = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSort, setSelectedSort] = useState('신규순');
  const [isSortBoxVisible, setIsSortBoxVisible] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const [bestPosts, setBestPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const [searchType, setSearchType] = useState('제목'); // 검색 유형 상태 (기본값은 '제목')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 메뉴 표시 여부

  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    const searchTypeParam = searchType === '제목' ? 'title' : 'writer'; // '제목'이면 제목 기반으로, '작성자'면 작성자 기반으로 필터링

    const filtered = posts.filter((post) => {
      const targetValue = post[searchTypeParam].toLowerCase(); // 검색 유형에 따라 대상 값 설정
      return targetValue.includes(searchKeyword.toLowerCase()); // 대상 값이 검색 키워드를 포함하는지 확인
    });

    setFilteredPosts(filtered); // 필터링된 포스트 상태 업데이트
  };

  useEffect(() => {
    const searchTypeParam = searchType === '제목' ? 'title' : 'writer';

    const filtered = posts.filter((post) => {
      if (searchTypeParam === 'title') {
        return post.title.toLowerCase().includes(searchKeyword.toLowerCase());
      } else if (
        searchTypeParam === 'writer' &&
        post.writer &&
        post.writer.nickname
      ) {
        return post.writer.nickname
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());
      }
      return false;
    });

    setFilteredPosts(filtered);
  }, [searchKeyword, searchType, posts]);

  // const fetchSearchResults = async () => {
  //   try {
  //     const accessToken = localStorage.getItem('accessToken');
  //     const searchTypeParam = searchType === '제목' ? 'title' : 'writer';
  //     const url = `https://bloodtrail.site/post/find?type=${searchTypeParam}`;

  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     };

  //     const requestBody = {
  //       keyword: searchKeyword,
  //     };

  //     const response = await axios.get(url, requestBody, config);

  //     if (response.data.isSuccess) {
  //       console.log('검색 결과:', response.data);
  //     } else {
  //       console.error('검색 실패:', response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('검색 중 오류 발생:', error);
  //   }
  // };

  const handleDropdownSelection = (type) => {
    setSearchType(type); // 선택한 검색 유형으로 상태 업데이트
    setIsDropdownVisible(false); // 드롭다운 메뉴 숨기기
  };

  // 드롭다운 메뉴 토글 함수
  const toggleDropdownMenu = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSortSelection = (sortType) => {
    setSelectedSort(sortType);
    setIsSortBoxVisible(false);
    setCurrentPage(1);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        pagetype: 'gallery',
        posttype: 'FREE',
        sorttype: 'created_at',
        page: currentPage,
      },
    };
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://bloodtrail.site/post/',
          config
        );
        if (response.data.isSuccess && response.data.code === 2000) {
          console.log(response.data);
          setBestPosts(response.data.result[0]);
          setPosts(response.data.result[1]);
          setTotalPages(10); //response.data.result.totalPages);
        } else {
          console.error('Failed to fetch posts: ', response.data.message);
        }
      } catch (error) {
        console.error('게시글을 불러오는 데 실패했습니다.', error);
      }
    };

    fetchPosts();
  }, [currentPage, selectedSort]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Sidebar pageLabel="커뮤니티" currentPage="자유게시판" />

      <MainConationer>
        <Breadcrums pageLabel="커뮤니티" currentPage="자유게시판" />

        <RightMiddle>
          <CommunityP style={{ fontSize: '1.2vw' }}>자유게시판</CommunityP>

          <SortContainer>
            <img
              src={SortBoxYes}
              alt="sortBox"
              style={{ width: '1.2vw', height: '1.2vw' }}
            />
            <SortDiv onClick={() => setIsSortBoxVisible(!isSortBoxVisible)}>
              <CommunityP
                style={{ fontSize: '0.75vw', color: colors.crewGray2 }}
              >
                {selectedSort}
              </CommunityP>
              <img
                src={ArrowDown}
                alt="arrow-down"
                style={{ width: '1.2vw', height: '1.2vw' }}
              />
            </SortDiv>
          </SortContainer>
          {selectedSort && (
            <SortBox show={isSortBoxVisible}>
              <HoverDiv onClick={() => handleSortSelection('신규순')}>
                신규순
              </HoverDiv>
              <HoverDiv onClick={() => handleSortSelection('공감순')}>
                공감순
              </HoverDiv>
            </SortBox>
          )}
        </RightMiddle>

        <div
          className="crewBar"
          style={{
            width: '100%',
            height: '0.1vw',
            border: 'none',
            backgroundColor: colors.crewGray,
            marginBottom: '2vw',
          }}
        />

        <BoardContainer>
          <CardContainer>
            {filteredPosts.map((post) => (
              <CardTmp
                key={post._id}
                board="community"
                _id={post._id}
                cardType={
                  post.image && post.image.length > 0 ? 'type2' : 'type1'
                }
                userId={post.writer.nickname}
                thumb={
                  post.image && post.image.length > 0
                    ? post.image[0]
                    : undefined
                }
                title={post.title}
                body={post.content}
                best={post.best}
              />
            ))}
          </CardContainer>

          <WritePostContainer>
            <Link to="/CommunityWrite">
              <WritePost>글 작성하기</WritePost>
            </Link>
          </WritePostContainer>

          <SearchContainer>
            <SearchBox>
              <SearchBar>
                <input
                  className="search"
                  type="text"
                  placeholder={`${searchType}을(를) 입력하세요`}
                  value={searchKeyword}
                  onChange={handleSearchKeywordChange} // 검색 키워드 변경 핸들러 연결
                />
              </SearchBar>
              <SearchImg
                src={search1}
                alt="search1"
                onClick={handleSearch} // 검색 버튼 클릭 시 검색 요청 함수 호출
              />
            </SearchBox>
            <DropdownSearchBox2 onClick={toggleDropdownMenu}>
              <DropdownSearch>{searchType}</DropdownSearch>
              <DropdownImg src={arrow_down} alt="arrow_down" />
              {isDropdownVisible && (
                <SortBox2 show={isDropdownVisible}>
                  <HoverDiv onClick={() => handleDropdownSelection('제목')}>
                    제목
                  </HoverDiv>
                  <HoverDiv onClick={() => handleDropdownSelection('작성자')}>
                    작성자
                  </HoverDiv>
                </SortBox2>
              )}
            </DropdownSearchBox2>
          </SearchContainer>

          <PagnationContainer>
            {currentPage > 1 && (
              <PagnationImg
                src={arrow_12px2}
                alt="Prev Page"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            )}

            {Array.from({ length: totalPages }, (_, i) => (
              <PagnaionNumber
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                style={{
                  fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
                }}
              >
                {i + 1}
              </PagnaionNumber>
            ))}
            {currentPage < totalPages && (
              <PagnationImg2
                src={arrow_12px2}
                alt="Next Page"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            )}
          </PagnationContainer>
        </BoardContainer>
      </MainConationer>
    </Container>
  );
};

export default Community;
