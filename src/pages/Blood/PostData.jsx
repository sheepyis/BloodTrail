import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 임시 데이터, axios 통신 필요
export const PostDetail = [
  {
    id: 1,
    title: "포스트 제목",
    user: "작성자",
    hit: 100,
    like: 20,
    content: "포스트ssdfffasdfffffffffffffw111111111111111111111111111222222222222222222222222233333333333333333333333333344\n45666666666666666666666666588888888888888888888888821111111111111111111111\n\n\n\n\n0000000000000000000\\n\\n\n\n\n           fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffssssssssssssssssssssssssssssssssssssfffffffffffffasdfffff 내용",
    tags: [
      { category: "zkf", text: "임시 내용" },
      { category: "phrfffffff", text: "임시 내용" },
      { category: "zkasdffffhrff", text: "임시 내용" },
      { category: "zkhrff", text: "임시 내용" },
      { category: "phrff", text: "임시 asdfff내용" },
      { category: "zkhrff", text: "임시 내용" },
      { category: "phrff", text: "임시 내용" },
    ],
  },
];