import styled from "styled-components";
import colors from "../../styles/color";
import { NavLink } from "react-router-dom";
import InputCrewUpload from "../../components/Input/input-crewupload";

const CrewContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 2vw;
    margin-bottom: 4vw;
`

const CrewP = styled.p`
    font-weight: 500;
    font-size: 0.9vw;
    color: ${colors.crewGray};
`

const CrewP2 = styled.p`
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
    margin-top: 1.5vw;
    cursor: pointer;
`

const CrewP3 = styled(NavLink)`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`

const RightTop = styled.div`
    display: flex;
    gap: 0.5vw;
`

const RightMiddle = styled.div`
    margin-top: 2vw;
    padding-bottom: 1vw;
`

const CrewUpload = () => {
    return (
        <CrewContainer>
            <div className="left" style={{width: "23.5%", paddingLeft: "3.85%"}}>
                <CrewP>헌혈크루</CrewP>
                <CrewP2>헌혈 크루 찾기</CrewP2>
            </div>

            <div className="right" style={{width: "55%"}}>
                <RightTop>
                    <CrewP3 to="/">홈</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3>헌혈크루</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3 to="/crew">헌혈 크루 찾기</CrewP3>
                    <CrewP3>{">"}</CrewP3>
                    <CrewP3 to="/crewupload">헌혈 크루 등록하기</CrewP3>
                </RightTop>

                <RightMiddle>
                    <CrewP style={{fontSize: "1.2vw"}}>헌혈 크루 찾기</CrewP>
                    <CrewP style={{fontSize: "0.6vw", color: colors.crewGray3, marginTop: "0.2vw"}}>헌혈 크루를 등록하거나 관리해보세요.</CrewP>
                </RightMiddle>

                <div className="crewBar" style={{width: "100%", height: "0.1vw", border: "none", backgroundColor: colors.crewGray}} />
                <div className="crewPoint" style={{width: "100%", display: "flex", background: colors.footerGray, alignItems: "center", padding: "0.9vw 1.5vw", gap: "0.5vw"}}>
                    <CrewP style={{color: colors.black}}>크루 현재 헌혈 포인트</CrewP>
                    <div className="PointBox" style={{width: "5vw", height: "2.2vw", border: "none", borderRadius: "5vw", padding: "0.5vw", background: "#FFE7E7", display: "flex", gap: "0.2vw", justifyContent: "center", alignItems: "center"}}>
                        <CrewP style={{fontWeight: "600", fontSize: "0.75vw"}}>0</CrewP>
                        <CrewP style={{fontSize: "0.75vw"}}>Point</CrewP>
                    </div>
                </div>

                <div className="uploadBox" style={{display: "flex", marginTop: "1vw"}}>
                    <div className="uploadLeft" style={{width: "51.5%"}}>
                        <CrewP style={{fontWeight: "700", color: colors.black}}>크루 이름</CrewP>
                        <InputCrewUpload 
                            type="text" 
                            placeholder="크루 이름을 입력하세요. (최대 10자)"
                        />
                        <CrewP style={{fontWeight: "700", color: colors.black, marginTop: "1vw"}}>목표 헌혈 참여율</CrewP>
                        <InputCrewUpload 
                            type="text" 
                            placeholder="목표 헌혈 참여율을 입력하세요."
                        />
                    </div>
                    <div className="uploadRight" style={{width: "48.5%"}}>
                        <CrewP style={{fontWeight: "700", color: colors.black}}>목표 헌혈 포인트</CrewP>
                        <InputCrewUpload
                            type="text"
                            placeholder="목표 헌혈 포인트를 입력하세요."
                            style={{width: "100%"}}
                        />
                    </div>
                </div>
                <CrewP style={{fontWeight: "700", color: colors.black, marginTop: "1vw"}}>크루 설명</CrewP>
                <InputCrewUpload 
                    type="text" 
                    placeholder="크루 설명을 입력하세요. (최대 20자)"
                    style={{width: "100%"}}
                />

                <div className="crewBar" style={{width: "100%", height: "0.1vw", border: "none", backgroundColor: colors.lightGray, margin: "2vw 0"}} />

                <CrewP style={{fontWeight: "700", color: colors.black}}>크루 멤버</CrewP>
            </div>
        </CrewContainer>
    )
}

export default CrewUpload;