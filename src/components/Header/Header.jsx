import styled from "styled-components";
import colors from "../../styles/color";
import { Link, NavLink } from "react-router-dom";
import add_comment from "../../assets/images/add_comment.png";
import notification1 from "../../assets/images/notification1.png"
import person from "../../assets/images/person.png";
import logo from "../../assets/images/logo.png";
import React, { useState, useEffect, useRef } from "react";
import Notifications from "./Notifications/Notifications";
import Note from "./Note/Note";
import {useMediaQuery} from 'react-responsive';


const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 3.4375vw;
    display: flex;
    align-items: center;
`
const MainHeader = styled.div`
    padding-left: 1.8229vw;
    align-items: center;
    width: 17%;
`
const HeaderMenu = styled.div`
    position: relative;
    padding-right:57vw;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 1vw;
    white-space: nowrap;
`

const HeaderP2 = styled(NavLink)`
    font-weight: 400;
    font-size: 0.9375vw;    
    &:hover {
        font-weight: 700;
    }

    &.active {
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: ${colors.mainRed};
        text-decoration-thickness: 0.1vw;
        text-underline-offset: 0.4vw;
    }
`

const IconContainer = styled.div`
    padding-right: 2.5521vw;
    display: flex;
    align-items: center;
    justify-content:space-between;
`

const IconImage = styled.img`
    cursor: pointer;
`

const LogoImage = styled.img`
    width: 9.1vw;
    cursor: pointer;
`


const Header = ({onHover,closeMenu,setMenuVisible}) => { 
    const [notificationsModal, setNotifications] = useState(false);
    const [noteModal, setNote] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setNote(false);
                setNotifications(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNoteToggle = () => {
        setNote((prevState) => !prevState);
        setNotifications(false);
    }

    const handleNotificationToggle = () => {
        setNotifications((prevState) => !prevState);
        setNote(false);
    }

    const handlePersonClick = () => {
        window.location.href = "/mypage";
    }

    const handleModalOutsideClick = (event) => {
        if (!modalRef.current.contains(event.target)) {
            setNote(false);
            setNotifications(false);
        }
    }
    
    const handleModalInnerClick = (event) => {
        event.stopPropagation();
    }

    const handleTouchStart = () =>{
        setMenuVisible(true);
    }
    const handleTouchEnd = () =>{
        setMenuVisible(false);
    }


    return (
        <div className="Header" style={{
            width: "100%", 
            display: "flex", 
            justifyContent: "center",
            
        }}
            
        >
            <HeaderContainer ref={modalRef} onClick={handleModalOutsideClick}>
                <MainHeader>
                    <Link to="/">
                        <LogoImage src={logo} alt="logo" />
                    </Link>
                </MainHeader>
                
                <HeaderMenu onCLick={closeMenu}>
                    <HeaderP2 
                        to="/blood"
                        onMouseEnter={()=>{ onHover('blood')}}
                        onCLick={closeMenu}>
                        지정헌혈
                    </HeaderP2>
                    <HeaderP2 
                        to="/community"
                        onMouseEnter={()=>{ onHover('community')}}
                        onCLick={closeMenu}>
                        커뮤니티
                    </HeaderP2>
                    <HeaderP2 
                        to="/crew"
                        onMouseEnter={()=>{ onHover('crew')}}
                        onCLick={closeMenu}>
                        헌혈크루
                    </HeaderP2>
                    <HeaderP2 
                        to="/live"
                        onMouseEnter={()=>{ onHover('live')}}
                        onCLick={closeMenu}>
                        라이브
                    </HeaderP2>
                </HeaderMenu>
                <IconContainer>
                    <IconImage src={add_comment} alt="comment" style={{ width: "1.5625vw", height: "1.5625vw" }}
                        onClick={handleNoteToggle} />
                        {noteModal && (
                        <div className="modalOutside" onClick={handleNoteToggle}>
                            <Note />
                        </div>)}

                    <IconImage src={notification1} alt="notifications" style={{ width: "1.8229vw", height: "1.8229vw", marginLeft: "0.3vw" }}
                        onClick={handleNotificationToggle} />
                    {notificationsModal && (
                        <div className="modalOutside" onClick={handleNotificationToggle}>
                            <Notifications />
                        </div>)}

                    <IconImage src={person} alt="person" style={{ width: "2.0833vw", height: "2.0833vw", marginTop: "-0.5vw" }} onClick={handlePersonClick} />
                </IconContainer>
            </HeaderContainer>
        </div>
    )
}

export default Header;