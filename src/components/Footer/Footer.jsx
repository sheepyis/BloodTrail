import styled from "styled-components";
import colors from "../../styles/color";

const FooterContainer = styled.div`
    width: 100%;
    height: 23.9063vw;
    display: flex;
    justify-content: center;
    background-color: ${colors.footerGray};
`

const FooterBox = styled.div`
    width: 65%;
    padding-top: 2%;
`

const FooterP = styled.p`
    font-weight: 600;
    font-size: 0.8333vw;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBox>
                <FooterP>Footer</FooterP>
            </FooterBox>
        </FooterContainer>
    )
}

export default Footer;