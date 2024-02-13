import styled from "styled-components";
import colors from "../../styles/color";
import Close from "../../assets/images/close.png";
import Dot from "../../assets/images/dot3.png";

const CreditModalContainer = styled.div`
    position: absolute;
    top: 7vw;
    width: 50vw;
    height: 28.15vw;
    z-index: 1;
    background-color: ${colors.white};
    border: 0.05vw solid #F2F2F2;
    border-radius: 0.25vw;
    padding: 1.5vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CloseImg = styled.img`
    position: absolute;
    right: 1.5vw;
    width: 0.7vw;
    height: 0.7vw;
    cursor: pointer;
`

const CreditModalP = styled.p`
    font-weight: 700;
    font-size: 1.2vw;
    color: ${colors.crewGray};
`

const Box = styled.div`
    width: 15.9vw;
    height: 13.2vw;
    border: 0.05vw solid #F2F2F2;
    border-radius: 0.25vw;
    margin-top: 2.5vw;
    display: flex;
    flex-direction: column;
`

const TopBox = styled.div`
    width: 100%;
    height: 4.25vw;
    border: none;
    border-radius: 0.25vw;
    background-color: #FFE7E7;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const DotImg = styled.img`
    width: 0.5vw;
    height: 0.5vw;
`

const CreditButton = styled.button`
    width: 18.6vw;
    height: 2.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.mainRed};
    border: none;
    border-radius: 0.25vw;
    font-weight: 700;
    font-size: 0.9vw;
    color: ${colors.white};
    cursor: pointer;
    margin-top: 2.5vw;
`

const CreditModal = ({onClose}) => {
    return (
        <CreditModalContainer>
            <CloseImg src={Close} alt="close" onClick={onClose}/>

            <div className="title" style={{display: "flex", flexDirection: "column", gap: "0.3vw", marginTop: "1vw"}}>
                <CreditModalP>프리미엄 혜택</CreditModalP>
                <CreditModalP style={{fontSize: "0.75vw", fontWeight: "500"}}>블러드 트레일 프리미엄을 결제하고 다음과 같은 혜택을 받아보세요!</CreditModalP>
            </div>

            <Box>
                <TopBox>
                    <div className="title2" style={{display: "flex", flexDirection: "column", gap: "0.3vw"}}>
                        <CreditModalP style={{fontSize: "0.9vw"}}>프리미엄</CreditModalP>
                        <CreditModalP style={{fontSize: "0.75vw", fontWeight: "500", color: colors.crewGray2}}>1 month / 10000 won</CreditModalP>
                    </div>
                </TopBox>
                <div className="explain" style={{display: "flex", gap: "0.3vw", alignItems: "center", marginTop: "1.5vw", marginLeft: "1.5vw"}}>
                    <DotImg src={Dot} alt="dot"/>
                    <CreditModalP style={{fontWeight: "500", fontSize: "0.75vw"}}>지정헌혈 프리미엄 사용</CreditModalP>
                </div>
                <div className="explain" style={{display: "flex", gap: "0.3vw", alignItems: "center", marginTop: "0.5vw", marginLeft: "1.5vw"}}>
                    <DotImg src={Dot} alt="dot"/>
                    <CreditModalP style={{fontWeight: "500", fontSize: "0.75vw"}}>지정헌혈 요청글 작성</CreditModalP>
                </div>
            </Box>

            <CreditButton>프리미엄 결제하기</CreditButton>
        </CreditModalContainer>
    )
}

export default CreditModal;