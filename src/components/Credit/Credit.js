// Credit.js
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import CreditModal from "./CreditModal";

const CreditContainer = styled.div`
    width: 100%;
    height: 7.25vw;
    background-color: #FFFAFA;
    padding: 1vw 0;
    margin-top: 1vw;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
`

const CreditP = styled.p`
    font-size: 0.75vw;
    color: ${colors.crewGray};
    font-weight: 600;
`

const CreditButton = styled.button`
    width: 13.5vw;
    height: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border:  0.05vw solid #FFB2B5;
    border-radius: 0.25vw;
    background-color: ${colors.white};
    font-weight: 600;
    font-size: 0.75vw;
    color: ${colors.mainRed};
    cursor: pointer;
`

const Credit = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <CreditContainer>
            <div className="CreditPDiv" style={{display: "flex", flexDirection: "column", gap: "0.15vw"}}>
                <CreditP>프리미엄 결제하기</CreditP>
                <CreditP style={{fontSize: "0.6vw", fontWeight: "500", color: colors.crewGray2}}>블러드 트레일 프리미엄을 결제하고 더 많은 혜택을 받아보세요!</CreditP>
            </div>
            <CreditButton onClick={() => setShowModal(true)}>결제하기</CreditButton>

            {showModal && <CreditModal onClose={() => setShowModal(false)} />}
        </CreditContainer>
    );
}

export default Credit;
