import styled from "styled-components";
import colors from "../../styles/color";
import CrewImage from "../../assets/images/profile.png";

const StyleItem = styled.div`
    width: 17vw;
    border: 0.05vw solid ${colors.lightGray};
    border-radius: 0.25vw;
    padding: 1vw;
    margin-bottom: 1vw;
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
    font-size: 0.75vw;
`

const CrewP2 = styled.p`
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.crewGray};
`

const ItemCrew = (props) => {
    return (
        <StyleItem key={props.id}>
            <div className="crewBox" style={{ display: 'flex', gap: '0.65vw', alignItems: 'center' }}>
                <Crew src={CrewImage} alt="crew"/>
                <div className="crewName" style={{ display: 'flex', flexDirection: 'column', gap: '0.1vw', width: "14vw" }}>
                    <CrewP>{props.name}</CrewP>
                    <CrewP style={{fontSize: "0.6vw", color: colors.crewGray2}}>{props.introduce}</CrewP>
                </div>
            </div>

            <div className="crewBottomBox" style={{display: "flex", marginTop: "1vw", justifyContent: "space-between"}} >
                <BottomBox style={{width: "4.1vw"}}>Point<CrewP2>{props.id}</CrewP2></BottomBox>
                <BottomBox style={{width: "6.75vw"}}>헌혈 참여율<CrewP2>{props.id}</CrewP2>%</BottomBox>
                <BottomBox style={{width: "4.75vw"}}>인원<CrewP2>{props.id}</CrewP2>명</BottomBox>
            </div>
        </StyleItem>
    )
}

export default ItemCrew;