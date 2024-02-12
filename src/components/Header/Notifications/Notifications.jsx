import React from "react";
import styled from "styled-components";
import colors from "../../../styles/color";
import newAlarm from '../../../assets/images/Ellipse 13.png';
import setting from '../../../assets/images/settings 1.png';

const NotificationContainer= styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 4.1146vw;
    right: 4.4792vw;
    left: 70.2083vw;
    width: 27.08vw;
    height: 37.60vw;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-100, #F2F2F2);
    background: var(--black-white-white-1000, #FFF);
    z-index:2;
`
const NotificationTitle = styled.div`
    display: flex;
    justify-content: center;
`
const TitleP = styled.div`
    display: flex;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
    padding: 19px 0px;
`
const SettingImg = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 3.8%;
    right: 0%;
    margin-right: 25px;
`

const NotificationBox = styled.div`
    display: inline-flex;
    justify-content: space-between;
    flex-direction: column;
`

const NotificationP =styled.div`
    height: 60px;
    color: var(--text, #0C0B2C);
    font-family: Pretendard;
    font-size: 0.9375vw;
    padding: 1.0417vw 0vw 1.0417vw 1.2500vw;

   
&:hover {
    color: ${colors.mainRed};
}
`


const Notifications = () => {

    const handleModalInnerClick = (event) => {
        event.stopPropagation();
    };


    return(
        <NotificationContainer onClick={handleModalInnerClick}>
            <NotificationTitle>
                <TitleP>알림</TitleP>
                <SettingImg src={setting} alt="설정"/>
            </NotificationTitle>

            <NotificationBox>
                <div><NotificationP>내 글이 HOT게시글로 선정되었습니다.</NotificationP></div>
                <div><NotificationP>내 글이 HOT게시글로 선정되었습니다.</NotificationP></div>
                

            </NotificationBox>
        </NotificationContainer>

    )
}

export default Notifications;