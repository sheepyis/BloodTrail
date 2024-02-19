import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import axios from "axios";
import ItemBlood from "./item-blood";
import Right from '../../assets/images/arrowRight.png';

const StyleItem = styled.div`
    width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.3vw;
  align-items: center;
  gap: 0.4vw;
`;

const PageNumber = styled.div`
  cursor: pointer;
  margin: 0 0.5vw;
  font-weight: 500;
  font-size: 0.6vw;
  color: ${(props) => (props.active ? colors.mainRed : colors.crewGray2)};
  position: relative;

  &:before {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1vw;
    height: 1.15vw;
    background-color: ${colors.crewPink};
    border-radius: 50%;
    z-index: -1;
  }
`;

const Arrow = styled.img`
  width: 0.25vw;
  cursor: pointer;
  margin: 0 0.2vw;
`;

const ListBlood = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = localStorage.getItem('accessToken');

    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://bloodtrail.site/history?page=${currentPage}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
    
                if (response.data.isSuccess && response.data.result) {
                    const { historyList } = response.data.result;
                    setData(historyList);
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, [accessToken, currentPage]);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <StyleItem>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {data.map((item, index) => (
                            <ItemBlood
                                key={index}
                                id={item._id}
                                type={item.type}
                                date={new Date(item.date).toLocaleDateString('ko-KR')}
                            />
                        ))}
                    </>
                )}
            </StyleItem>
            <PaginationContainer>
                <Arrow
                    src={Right}
                    alt="left"
                    onClick={prevPage}
                    style={{ transform: 'rotate(180deg)' }}
                    disabled={currentPage === 1}
                />
                <PageNumber>
                    {currentPage}
                </PageNumber>
                <Arrow
                    src={Right}
                    alt="right"
                    onClick={nextPage}
                />
            </PaginationContainer>
        </>
    );
};

export default ListBlood;