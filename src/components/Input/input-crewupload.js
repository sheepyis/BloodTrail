import styled from "styled-components";
import colors from "../../styles/color";

const InputUpload = styled.input`
    width: 90%;
    height: 3vw;
    border: 0.05vw solid #D1D1D1;
    border-radius: 0.25vw;
    padding: 0.5vw;
    font-size: 0.75vw;
    font-weight: 500;
    color: ${colors.crewGray3};
    margin-top: 0.5vw;
`

const InputCrewUpload = ({ type, placeholder, ...rest }) => {
    return (
        <InputUpload
            type={type}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default InputCrewUpload;