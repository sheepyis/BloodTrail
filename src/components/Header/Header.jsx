import styled from "styled-components";
import colors from "../../styles/color";
import { Link, NavLink } from "react-router-dom";
import add_comment from "../../assets/images/add_comment.png";
import notifications from "../../assets/images/notifications.png";
import person from "../../assets/images/person.png";
import logo from "../../assets/images/logo.png";

const HeaderContainer = styled.div`
    width: 65%;
    height: 5.7292vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeaderP = styled(Link)`
    font-weight: 800;
    font-size: 1.25vw;
    color: ${colors.logoRed};
    letter-spacing: -0.02em;
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
    display: flex;
    align-items: center;
    gap: 0.6771vw;
`

const IconImage = styled.img`
    cursor: pointer;
`

const LogoImage = styled.img`
    width: 9.1vw;
    cursor: pointer;
`

const Header = () => {
    return (
        <div className="Header" style={{
            width: "100%", 
            display: "flex", 
            justifyContent: "center"
        }}>
            <HeaderContainer>
                <Link to="/">
                    <LogoImage src={logo} alt="logo"/>
                </Link>
                <HeaderP2 to="/blood">지정헌혈</HeaderP2>
                <HeaderP2 to="/community">커뮤니티</HeaderP2>
                <HeaderP2 to="/crew">헌혈크루</HeaderP2>
                <HeaderP2 to="/live">라이브</HeaderP2>
                <IconContainer>
                    <IconImage src={add_comment} alt="comment" style={{width: "1.5625vw", height: "1.5625vw"}}/>
                    <IconImage src={notifications} alt="notifications" style={{width: "1.8229vw", height: "1.8229vw", marginLeft: "0.3vw"}}/>
                    <IconImage src={person} alt="person" style={{width: "2.0833vw", height: "2.0833vw", marginTop: "-0.5vw"}}/>
                </IconContainer>
            </HeaderContainer>
        </div>
    )
}

export default Header;
