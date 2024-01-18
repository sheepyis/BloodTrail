import styled from "styled-components";
import colors from "../../styles/color";
import { Link, NavLink } from "react-router-dom";
import add_comment from "../../assets/images/add_comment.png";
import notification1 from "../../assets/images/notification1.png"
import notification2 from "../../assets/images/notification2.png"
import person from "../../assets/images/person.png";
import logo from "../../assets/images/logo.png";
import React,{useState} from "react";
import Comment from "./Comment/Comment";
import Notifications from "./Notifications/Notifications";


const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 5.7292vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const HeaderMenu = styled.div`
    position: relative;
    padding-left: 8vw;
    padding-right:40vw;
    display:flex;
    width: 70%;
    height: 5.7292vw;
    align-items: center;
    justify-content: space-between;
    
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
    width: 7%;
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

const Header = ({onHover}) => {

    const [notificationsModal,setNotifications] = useState(false);

    const handleNotificationOpen =()=>{
        setNotifications(true);
        
    }
    const handleNotificationClose=(e)=>{
        // if (e.className ==("modalOutside")) {
        setNotifications(false);
        // console.log("망러ㅏㅓ런");}
        
    }

    return (
        <div className="Header" style={{
            width: "100%", 
            display: "flex", 
            justifyContent: "center",
            
        }}
            
        >
            <HeaderContainer>
                <Link to="/">
                    <LogoImage src={logo} alt="logo" />
                </Link>
                <HeaderMenu>
                <HeaderP2 
                    to="/blood"
                    onMouseEnter={()=>{ onHover('blood')}}>
                    지정헌혈
                </HeaderP2>
                <HeaderP2 
                    to="/community"
                    onMouseEnter={()=>{ onHover('community')}}>
                    커뮤니티
                </HeaderP2>
                <HeaderP2 
                    to="/crew"
                    onMouseEnter={()=>{ onHover('crew')}}>
                    헌혈크루
                </HeaderP2>
                <HeaderP2 
                    to="/live"
                    onMouseEnter={()=>{ onHover('live')}}>
                    라이브
                </HeaderP2>
                </HeaderMenu>
                <IconContainer>

                    <IconImage src={add_comment} alt="comment" style={{width: "1.5625vw", height: "1.5625vw"}} />
                    
                    <IconImage src={notification1} alt="notifications" style={{width: "1.8229vw", height: "1.8229vw", marginLeft: "0.3vw"}} 
                                onClick={handleNotificationOpen}/>
                                {notificationsModal &&( 
                                    <div className ="modalOutside" onClick={handleNotificationClose}>
                                        <Notifications />
                                    </div>)} 
                                    {/* notification 모달 클릭시 사라짐, 클릭시 헤더의 아이콘 위치가 움직이는 상황 발생.. */}

                    <IconImage src={person} alt="person" style={{width: "2.0833vw", height: "2.0833vw", marginTop: "-0.5vw"}}/>
                </IconContainer>
            </HeaderContainer>N
        </div>
    )
}

export default Header;
