import React,{useState} from "react";
import styled from "styled-components";
import colors from "../../../styles/color";
import { NavLink } from "react-router-dom";
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import setting from "../../../assets/images/settings 1.png"; 
import plus from "../../../assets/images/plus.png";
import Chat from "./CrewChat";
import CrewChat from "./CrewChat";
import BloodChat from "./BloodChat";

const NoteContainer =styled.div`
    width: 27.0833vw;
    height: 46.2500vw;
    position: absolute;
    top: 4.1146vw;
    right: 4.4792vw;
    left: 70.2083vw;
    width: 26.5625vw;
    height: 37.6042vw;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-100, #F2F2F2);
    background: var(--black-white-white-1000, #FFF);
    z-index:2;
`
const TitleBox = styled.div`
    display: flex;
    justify-content: center;
`
const Icon = styled.div`
    position: absolute;
    align-items: center;
    top: 3.5%;
    right: 0%;
    padding: 0px 4px;
`
const NoteTitle1 =styled.div`
    text-align: center;
    height: 3.5417vw;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
    padding-top: 18px;
     
`
const NoteTitle2 =styled.div`
    display: flex;
`
const NoteElement =styled.div`
    margin: 0.7813vw 0.7813vw 0.7813vw 0.7813vw;
    display: flex;
    font-size: 0.7813vw;
    justify-content: center;
    align-items: center;
    height: 2.6042vw;

    &:hover {
        font-weight: 700;

    }

    &:active {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: ${colors.mainRed};
        text-decoration-thickness: 0.1vw;
        text-underline-offset: 0.4vw;
    }
`

const ChatContainer =styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

// const ChatBox =styled.div`
//     height: 5.4688vw;
//     padding: 1.0417vw 1.0417vw 1.0417vw 1.0417vw;
//     display: flex;
//     flex-direction: row:
// `
// const ChatPerson= styled.img`
//     width: 3.3789vw;
//     height: 3.3854vw;
//     cursor: pointer;
// `
// const ChatBoxP =styled.div`
//     margin-left: 0.7797vw;
//     align-item: center;
// `

// const ChatName =styled.div`
//     display: flex;
//     color: var(--Gray-Gray-700, #464A4D);
//     width: 18.5938vw;
//     height: 1.5104vw;
//     font-family: Pretendard;
//     font-size: 0.6250vw;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 0.9375vw;
//     letter-spacing: -0.0187vw;
//     align-items: center;
// `

// const ChatP =styled.div`
//     display: flex;
//     width: 20.8333vw;
//     height: 1.5104vw;
//     align-items: center;`


const Note= () => {


    const [crewChat, setCrewChat] = useState(false);
    const [bloodChat, setBloodChat] = useState(false);

    const handleCrewChat =()=>{
        setCrewChat(true);
        setBloodChat(false);
    };


    const handleBloodChat =()=>{
        setBloodChat(true);
        setCrewChat(false);
    };

    const handleModalInnerClick = (event) => {
        event.stopPropagation();
    };
    


    return(
        <NoteContainer onClick={handleModalInnerClick}>
            <TitleBox>
                <NoteTitle1>쪽지</NoteTitle1>
                <Icon>
                    <img src={plus} alt="plus" style={{width: '1.25vw', height: '1.25vw', margin: '0px 7px 0px 0px'}}/>
                    <img src={setting} slt ="setting" style={{width: '1.25vw', height: '1.25vw', margin: '0px 20px 0px 0px'}}/>
                </Icon>
            </TitleBox>
            <NoteTitle2>
                <NoteElement onClick={handleCrewChat}>크루</NoteElement>
                <NoteElement onClick={handleBloodChat}>지정헌혈 요청글</NoteElement>
            </NoteTitle2>
            <ChatContainer>
            {crewChat && (<CrewChat/>)}
            {bloodChat && (<BloodChat/>)}

            </ChatContainer>
            
        </NoteContainer>
    )
}

export default Note;