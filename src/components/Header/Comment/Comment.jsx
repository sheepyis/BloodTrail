// import styled from 'styled-components';
// import colors from "../../styles/color";
// import { NavLink } from "react-router-dom";
// // import add_comment2 from "../../assets/images/add_comment2.png";
// // import manufacturing from "../../assets/images/manufacturing.png";
// // import Vector from "../../assets/images/Vector.png";
// // import mystery from "../../assets/images/mystery.png";
// // import list from "../../assets/images/list.png";

// const CommentContainer = styled.div`
//     width: 518vw;
//     height: 868vw;
//     flex-shrink: 0;
//     border-radius: 5vw;
//     border: 1px solid var(--text-40, rgba(12, 11, 44, 0.40));
//     background: #FFF;
// `
// const IconContainer = styled.div`
//     display: flex;  
// `
// const IconImage = styled.img`
//     cursor: pointer;
// `


// const CommentP1 =styled.div`
//     color: #000;
//     font-family: Pretendard;
//     font-size: 18vw;
//     font-style: normal;
//     font-weight: 700;
//     line-height: normal;

//     // &:hover {
//     //     font-weight: 700;
//     // }

//     // &.active {
//     //     font-weight: 700;
//     //     text-decoration: underline;
//     //     text-decoration-color: ${colors.mainRed};
//     //     text-decoration-thickness: 0.1vw;
//     //     text-underline-offset: 0.4vw;
//     // }
// `


// const ItmeList=styled.div`
//     display: flex;
// `

// const CommentP2 =styled.div(NavLink)`
//     color: #000;
//     font-family: Pretendard;
//     font-size: 15vw;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
// `

// const CrewContainer = styled.div`
//     width: 516vw;
//     height: 769vw;
//     flex-shrink: 0;
//     border-radius: 0vw 0vw 5vw 5pvw;
//     background: #F6F6F6;
//     `
// const CrewIconList = styled.div`
// display: flex;
// `
// const CrewMainBox = styled.div`
// display: flex;
// `
// const CrewSendBox = styled.div`
//     width: 516vw;
//     height: 108vw;
//     flex-shrink: 0;
//     border-radius: 0vw 0vw 5vw 5vw;
//     background: #F5D7D8;
// `

// const Comment = () => {
//     return (
//         <CommentContainer>
//             <IconContainer>
//                 <CommentP1>헌혈 이야기</CommentP1>
//                 {/* <IconImage src={add_comment2} alt="add_comment" style={{width: "24vw",height: "24vw"}}/>
//                 <IconImage src={manufacturing} alt="manufacturing" style={{width: "24vw",height: "24vw"}}/> */}
//             </IconContainer>

//             <ItmeList> 
//                 <CommentP2>전체</CommentP2>
//                 <CommentP2>크루</CommentP2>
//                 <CommentP2>게시글</CommentP2>
//             </ItmeList>

//             <CrewContainer>
//                 <CrewIconList>
//                     {/* <IconImage src={Vector} alt="back" style={{width: "21vw",height: "18vw"}}/>
//                     <IconImage src={mystery} alt="search" style={{width: "21vw",height: "18vw"}}/>
//                     <IconImage src={list} alt="list" style={{width: "21vw",height: "18vw"}}/> */}
//                 </CrewIconList>

//                 <CrewMainBox>

//                 </CrewMainBox>

//                 <CrewSendBox>
//                     {/* <IconImage src={broken_image} alt="broken_image" style={{width: "24vw",height: "24vw"}}/> */}
//                 </CrewSendBox>
//             </CrewContainer>
//         </CommentContainer>
//     )
// }

// export default Comment;