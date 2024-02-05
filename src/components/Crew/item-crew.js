import styled from "styled-components";
import colors from "../../styles/color";
import CrewImage from "../../assets/images/profile.png";

const StyleItem = styled.div`
    width: 95%;
    height: 6.85vw;
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    padding: 1.2vw;
    margin-bottom: 1vw;
    white-space: nowrap;
    cursor: pointer;
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

const BottomBox = styled.div`
    height: 1.4vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 0.2vw;
    padding: 0.2vw;
    background-color: ${colors.crewPink};
    border: 0.05vw solid #F3777A;
    border-radius: 5vw;
    color: ${colors.crewGray2};
    font-weight: 500;
    font-size: 0.6vw;
`

const CrewP2 = styled.p`
    font-weight: 600;
    font-size: 0.6vw;
    color: ${colors.crewGray};
`

const ItemCrew = ({ id, name, introduce, onClick }) => {
    return (
        <StyleItem onClick={() => onClick(id)}>
            <div className="crewBox" style={{ display: 'flex', gap: '0.65vw', alignItems: 'center' }}>
                <Crew src={CrewImage} alt="crew" />
                <div className="crewName" style={{ display: 'flex', flexDirection: 'column', gap: '0.1vw', maxWidth: "12vw" }}>
                    <CrewP>{name}</CrewP>
                    <CrewP style={{ fontSize: "0.6vw", color: colors.crewGray2 }}>{introduce}</CrewP>
                </div>
            </div>

            <div className="crewBottomBox" style={{ display: "flex", marginTop: "1vw", gap: "0.7vw" }}>
                <BottomBox style={{ width: "4.1vw" }}>Point<CrewP2>{id}</CrewP2></BottomBox>
                <BottomBox style={{ width: "6.75vw" }}>헌혈참여율<CrewP2>{id}</CrewP2>%</BottomBox>
                <BottomBox style={{ width: "4.75vw" }}>인원<CrewP2>{id}</CrewP2>명</BottomBox>
            </div>
        </StyleItem>
    )
}

export default ItemCrew;