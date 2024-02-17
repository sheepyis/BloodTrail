const menuItems = {
  "지정헌혈": [
    { label: "지정헌혈 요청 글", path: "/blood" },
    { label: "지정헌혈 요청하기", path: "/blood/bloodwrite/bloodwrite" },
    { label: "지정헌혈 프리미엄", path: "/blood/bloodPremium" },
    { label: "내가 쓴 글 보기", path: "/blood/my-posts" }
  ],
  "커뮤니티": [
    { label: "자유게시판", path: "/community" },
    { label: "명예 헌혈 게시판", path: "/community/honorboard" },
    { label: "헌혈 인증 게시판", path: "/community/certification" },
    { label: "헌혈 정보 공유 게시판", path: "/community/info" },
    { label: "내가 쓴 글 보기", path: "/community/myposts" },
  ],
  "헌혈크루": [
    { label: "헌혈 크루 찾기", path: "/crew" }
  ]
};

export default menuItems;