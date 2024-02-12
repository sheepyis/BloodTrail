import React from "react";
import styled from "styled-components";
import colors from "../../../styles/color";

const NotificationContainer= styled.div`
    display: flex;
    flex-direction: column;
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

const NotificationTitle = styled.div`
    color: #000;
    font-family: Pretendard;
    font-weight: 800;
    font-size: 1.25vw;
    font-style: normal;
    line-height: normal;
    width: 26.5625vw;
    height: 3.5417vw;
    padding: 0.9896vw 0vw 0vw 0vw;
    text-align: center;
`

const NotificationBox = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 26.5625vw;

`

const NotificationP =styled.div`
    width: 26.5625vw;
    height: 3.1250vw;
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