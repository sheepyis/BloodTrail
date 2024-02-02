import styled from "styled-components";
import colors from "../../styles/color";
import Plus from "../../assets/images/plus.png";

const DonationContainer = styled.div`
    width: 100%;
    height: 10vw;
    border: none;
    border-radius: 0.25vw;
    background-color: ${colors.footerGray};
    display: flex;
    align-items: center;
    justify-content: center;
`

const DonationP = styled.p`
    font-size: 0.6vw;
    color: #0C0B2C;
    opacity: 0.6;
`

const MyDonation = () => {
    return (
        <DonationContainer>
            <div className="plusDonation" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3vw"}}>
                <img src={Plus} alt="plus" style={{width: "1.2vw", height: "1.2vw", cursor: "pointer"}} />
                <DonationP>헌혈 증서를 등록하십시오</DonationP>
            </div>
        </DonationContainer>
    )
}

export default MyDonation;