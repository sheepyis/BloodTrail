import styled from 'styled-components';
import colors from '../../styles/color';
import Search from '../../assets/images/search.png';

const InputWrapper = styled.div`
  position: relative;
  width: 77%;
  display: flex;
  align-items: center;
`;

const CrewInput = styled.input`
  flex: 1;
  height: 2.2vw;
  border: 0.05vw solid ${colors.lightGray};
  padding: 0.1vw 0.5vw 0.1vw 0.5vw;
  font-weight: 600;
  font-size: 0.75vw;
  color: ${colors.crewGray3};
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.crewGray3};
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.5vw;
  width: 1.2vw;
  height: 1.2vw;
`;

const InputCrew = ({ type, placeholder, onChange, value }) => {
  return (
    <InputWrapper>
      <CrewInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <SearchIcon src={Search} alt="search"/>
    </InputWrapper>
  );
};

export default InputCrew;
