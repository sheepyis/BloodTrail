import styled from "styled-components";
import colors from "../../styles/color";
import CrewImage from "../../assets/images/profile.png";
import Star from "../../assets/images/star.png";

const StyleItem = styled.div`
    width: 21vw;
    height: 6.1vw;
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    padding: 1vw;
    margin-bottom: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Crew = styled.img`
    width: 2vw;
    height: 2vw;
`

const CrewP = styled.p`
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.crewGray};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const CrewP2 = styled.p`
    font-weight: 700;
    font-size: 0.75vw;
    color: ${colors.crewGray};
`

const BottomBox = styled.div`
    width: 7vw;
    border: none;
    border-radius: 5vw;
    padding: 0.2vw 0.5vw;
    background-color: #F2F2F2;
    display: flex;
    gap: 0.3vw;
    align-items: center;
    margin-top: 0.6vw;
    white-space: nowrap;
`

const ItemMember = (props) => {
    const { id, name, username } = props;
/*     console.log(name);
    console.log(username); */

    return (
        <StyleItem key={id}>
            <div className="crewBox" style={{ display: 'flex', gap: '0.65vw', alignItems: 'center' }}>
                <Crew src={CrewImage} alt="crew"/>
                <div className="crewName" style={{ display: 'flex', gap: '0.3vw', maxWidth: "12vw", alignItems: "center"}}>
                    {name === username && <img src={Star} alt="star" style={{width: "0.6vw", height: "0.6vw"}}/>}
                    <CrewP>{name}</CrewP>
                </div>
            </div>

            <BottomBox>
                <CrewP2>헌혈 참여율 </CrewP2>
                <CrewP2>{id}</CrewP2>
                <CrewP2>%</CrewP2>
            </BottomBox>
        </StyleItem>
    )
}

export default ItemMember;
