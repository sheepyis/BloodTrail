import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import axios from "axios";

const InputContainer = styled.div`
  position: relative;
  width: 90%;
  height: 3vw;
  margin-top: 0.5vw;
  display: flex;
  align-items: center;
`;

const InputUpload2 = styled.input`
  width: 100%;
  height: 100%;
  border: 0.05vw solid #d1d1d1;
  border-radius: 0.25vw;
  padding: 0.5vw 4.5vw 0.5vw 0.5vw;
  font-size: 0.75vw;
  font-weight: 500;
  color: ${colors.crewGray3};
`;

const CheckButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5vw;
  transform: translateY(-50%);
  width: 3.5vw;
  height: 2vw;
  border: none;
  border-radius: 0.25vw;
  background-color: ${colors.crewPink};
  font-weight: 500;
  font-size: 0.75vw;
  color: ${colors.mainRed};
`;

const InputCrewUpload2 = ({ type, placeholder, onNameChange, onAvailabilityChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [available, setAvailable] = useState(false);

  const handleCheckDuplicate = () => {
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        "https://bloodtrail.site/crew/check-name",
        { name: inputValue },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.isSuccess === true) {
          setAvailable(true);
          onAvailabilityChange(true);
          onNameChange(inputValue);
        } else {
          setAvailable(false);
          onAvailabilityChange(false);
        }
        setChecked(true);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setChecked(false);
  };

  return (
    <>
        <InputContainer>
        <InputUpload2 type={type} placeholder={placeholder} onChange={handleChange} />
        <CheckButton onClick={handleCheckDuplicate}>중복확인</CheckButton>
        </InputContainer>
        {checked && inputValue && !available && <span style={{ color: colors.mainRed, position: "absolute", fontWeight: "700", fontSize: "0.6vw", marginTop: "0.2vw" }}>이름이 이미 존재합니다.</span>}
        {checked && inputValue && available && <span style={{ color: "green", position: "absolute", fontWeight: "700", fontSize: "0.6vw", marginTop: "0.2vw" }}>사용 가능한 이름입니다.</span>}
    </>
  );
};

export default InputCrewUpload2;