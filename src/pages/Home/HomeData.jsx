import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 임시 데이터
export const rankingData = [
  { type:'personal', id: 1, rank: 1, name: 'User name', score: 100000 },
  { type:'personal', id: 2, rank: 2, name: 'User name', score: 1000 },
  { type:'personal', id: 3, rank: 3, name: 'User name', score: 100 },
  { type:'personal', id: 4, rank: 3, name: 'User name', score: 100 },
  { type:'crew', id: 11, rank: 1, name: 'Crew name', score: 20000 },
  { type:'crew', id: 22, rank: 2, name: 'Crew name', score: 2000 },
  { type:'crew', id: 23, rank: 3, name: 'Crew name', score: 200 },
  { type:'crew', id: 456, rank: 3, name: 'User name', score: 100 },
];

export const hotPost = [
  { id: 1, title: "게시물 제목", content: "게시물 내용", username: "asdfasd", date:"23.12.00" },
  { id: 1, title: "게시물 제목11", content: "게시FFASDF FFFFWEVBBAS ASDGGAWE ASDFCCCC  FFFCCCCCCCCCCC CCCCCCCCCCCCCCCCCCCCCCCCCCCCSSSSSSSSSSSSSSCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCFAFGHHC  FF22EFFFFFFFFF 내용물 내용", username: "asdfasd", date:"23.12.00" },
  { id: 1, title: "게시물 ssssssssssssssssssssssssssssssssssssss제목22", content: "게시물 내용", username: "asdfasd", date:"23.12.00" },
  { id: 1, title: "게시물 제목3", content: "게시물 내용", username: "asdfasd", date:"23.12.00" },
  { id: 1, title: "게시물 제목44", content: "게시물 내용", username: "asdfasd", date:"23.12.00" },
  { id: 1, title: "게시물 제목5", content: "FFFFF", username: "asdfasd", date:"23.12.00" },
];


// axios 통신 -> 수정 필요
const Ranking = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT_FOR_RANKING_DATA');
        setRankingData(response.data);
      } catch (error) {
        console.error('Error fetching ranking data:', error);
      }
    };

    fetchRankingData();
  }, []);
};

const Board = () => {
  const [hotPost, setHotPost] = useState([]);

  useEffect(() => {
    const fetchHotPostData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT_FOR_HOT_POSTS');
        setHotPost(response.data);
      } catch (error) {
        console.error('Error fetching hot posts:', error);
      }
    };

    fetchHotPostData();



  }, []);
};

export default Ranking;