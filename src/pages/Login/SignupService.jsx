import React,{useState} from 'react'
import styled from "styled-components";
import colors from "../../styles/color";
import {Link} from "react-router-dom";
import group208 from "../../assets/images/Group 208.png";
import group209 from "../../assets/images/Group 209.png";
import check_gray from "../../assets/images/check (3) 1.png";
import check_red from "../../assets/images/check_red.png";
import Breadcrums from '../../components/Navigation/Breadcrums';


const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2vw;
    margin-bottom: 4vw;
`
const SideBar = styled.div`
    width: 17%;
    padding-left: 2.5%;
`
const MainConationer =styled.div`
    width: 67%;
`

const BreadcrumsC = styled.div`
    display: flex;
    gap: 0.5vw;
    padding: 0.9375vw 0.0000vw 0.9375vw 0.2083vw;
`

const Title = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 1.2500vw;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1875vw; /* 175% */
    padding-left:0.5208vw;
`
const SubTitile = styled.div`
    color: var(--Gray-Gray-500, #9E9E9E);

    /* Body/Body_small/medium */
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 0.9375vw */
    letter-spacing: -0.0187vw;
`

const LineContainer = styled.div`
    margin: 1.0417vw 0.0000vw 1.5625vw 0.0000vw;
    display: flex;
    flex-direction: row;
    width: 67%;

`
const LineImg = styled.img`
    width: 0.7813vw;
    height: 0.7813vw;
    flex-shrink: 0;
    z-index:1;
`
const Line = styled.div`
    margin-top: 0.3646vw;
    height: 0vw;
    width: 32.5vw;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 0.0000vw;
    border-top: 0.0521vw dashed var(--Gray-Gray-500, #9E9E9E);
`


const ServiceContainer = styled.div`

`
const ServiceTitle =styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625vw; /* 166.667% */
`

const ServiceBox = styled.div`
    display: inline-flex;
    height: 264px;
    padding: 20px;
    margin: 15px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5208vw;
    overflow-y: scroll;
    white-space: pre-wrap;
    border-radius: 5px;
    border: 1px solid var(--Gray-Gray-200, #EEE);
    background: var(--black-white-white-1000, #FFF);

    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
`
const CheckboxContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-bottom: 42px;
`
const CheckboxInput = styled.input`
appearance: none;
width: 20px;
height: 20px;
flex-shrink: 0;
background-image: url(${check_gray});

&:checked {
    background-image: url(${check_red});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
`

const CheckboxLabel= styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    cursor: pointer;
    padding-left: 4px;
`
const NextButton = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;

.nextButton{
    width: 17.7083vw;
    height: 2.0833vw;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    color: var(--Primary-Red-900, #E95458);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.7813vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.0417vw; /* 133.333% */
    border-radius: 0.2604vw;
    background: var(--Primary-Red-200, #FFF6F7);
    }
`


const Signup = () => {

    const [service, setService] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const handleServiceCheckbox = () => {
        setService(!service);
    };
    
    const handlePrivacyCheckbox = () => {
        setPrivacy(!privacy);
    };

    return (
        <Container>
            <SideBar/>
            <MainConationer>
              <BreadcrumsC>
                <Breadcrums pageLabel="로그인" currentPage="회원가입" />
              </BreadcrumsC>

                <Title>회원가입</Title>
                <SubTitile>약관에 동의해주세요.</SubTitile>   

                <LineContainer>
                    <LineImg src={group208} alt="group 208"/>
                    <Line/>
                    <LineImg src={group209} alt="group 209"/>
                    <Line/>
                    <LineImg src={group209} alt="group 209"/>
                </LineContainer>

                <ServiceContainer>
                    <ServiceTitle>서비스 이용약관</ServiceTitle>
                    <ServiceBox>
                        <p> 제1조(목적)<br />
                            이 약관은 Bloodtrail (이하 '회사' 라고 합니다)가 제공하는 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.<br />
                            제2조(정의)<br />
                            이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.<br />
                            '서비스'라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 '이용자'가 이용할 수 있는 회사가 제공하는 제반 서비스를 의미합니다.<br />
                            '이용자'란 이 약관에 따라 회사가 제공하는 서비스를 받는 '개인회원' , '기업회원' 및 '비회원'을 말합니다.<br />
                            '개인회원'은 회사에 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 '회사'가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.<br />
                            '기업회원'은 회사에 기업정보 및 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.<br />
                            '비회원'은 회원가입 없이 회사가 제공하는 서비스를 이용하는 자를 말합니다.<br />
                            '아이디(ID)'라 함은 회원의 식별과 서비스이용을 위하여 회원이 정하고 회사가 승인하는 문자 또는 문자와 숫자의 조합을 의미합니다</p>
                    </ServiceBox>
                    
                    <CheckboxContainer>
                        <CheckboxInput type="checkbox" id="service" checked={service} onChange={handleServiceCheckbox}/>
                        <CheckboxLabel for="service">
                            
                            서비스 이용약관에 동의합니다.
                        </CheckboxLabel>
                    </CheckboxContainer>


            
                    <ServiceTitle>개인정보 처리방침</ServiceTitle>
                    <ServiceBox>
                        <p>제1조(목적)<br />
                            Bloodtrail(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.<br />
                            제2조(개인정보 처리의 원칙)<br />
                            개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다.<br /> 
                            단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.<br />
                            제3조(본 방침의 공개)<br />
                            회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.<br />
                            회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</p> 
                    </ServiceBox>
                    <CheckboxContainer>
                        <CheckboxInput type="checkbox" id="privacy" checked={privacy} onChange={handlePrivacyCheckbox}
                    />
                    <CheckboxLabel for="privacy">
                        개인정보 처리방침에 동의합니다.
                    </CheckboxLabel>
                    </CheckboxContainer>
                </ServiceContainer>

                <NextButton>
                        <Link to="./signup">
                        <input className="nextButton" type="submit" value="넘어가기" disabled={!service || !privacy}/>
                        </Link>
                </NextButton>
            </MainConationer>
        </Container>
    )
}

    export default Signup;