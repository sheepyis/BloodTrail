import React from "react";
import styled from "styled-components";
import colors from "../../../styles/color";
import { Link, NavLink } from "react-router-dom";

const NotificationContainer= styled.div`
    position: fixed;
    top: 11%;
    right: 10%;
    bottom: 10%;
    left: 55%;
    width: 25vw;
    height: 40vw;
    border-radius: 5px;
    border: 1px solid var(--text-40, rgba(12, 11, 44, 0.40));
    background: #FFF;
    z-index:2;
`

const NotificationTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-weight: 800;
    font-size: 1.25vw;
    font-style: normal;
    line-height: normal;
    width: 25vw;
    height: 4vw;
    border-bottom: 1px solid var(--text-40, rgba(12, 11, 44, 0.40));
    padding:4%;
`

const NotificationBox = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 25vw;
`

const NotificationP =styled.div`
    width: 25vw;
    height: 3vw;
    border-bottom: 1px solid var(--text-40, rgba(12, 11, 44, 0.40));
    color: var(--text, #0C0B2C);
    font-family: Pretendard;
    font-size: 0.9375vw;
    padding:4%;

&:hover {
    color: ${colors.mainRed};
}
`


const Notifications = () => {


    return(
        <NotificationContainer>
            <NotificationTitle>
                알림
            </NotificationTitle>

            <NotificationBox>
                <div><NotificationP>내 글이 HOT게시글로 선정되었습니다.</NotificationP></div>
                <div><NotificationP>내 글이 HOT게시글로 선정되었습니다.</NotificationP></div>
                

            </NotificationBox>
        </NotificationContainer>

    )
}

export default Notifications;