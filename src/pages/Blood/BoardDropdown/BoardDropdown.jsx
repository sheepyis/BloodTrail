import React from 'react'
import styled from 'styled-components';

const BoardDropdownContainer= styled.div`
    width: max-content;
    padding: 0.4167vw 0.0000vw;
    flex-direction: column;
    align-items: flex-start;
    background: var(--black-white-white-1000, #FFF);
    position: absolute;
    display: ${props => (props.isVisible ? 'block' : 'none')}; 
    right: 0;
    top: 110%;
    border: 1px solid var(--Gray-Gray-200, #EEE);

.dropdownbox{
    list-style: none;
    background: var(--black-white-white-1000, #FFF);
    width: 12.0833vw;
    height: 2.6042vw;
    z-index:1;
    padding: 0.7813vw;
    justify-content: center;
    color: var(--Gray-Gray-700, #464A4D);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 133.333% */
    letter-spacing: -0.3px;
    
    &:hover{
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 133.333% */
        background: var(--Gray-Gray-200, #EEE);
    }

}
`


const BoardDropdown = ({isVisible, handleBoardType})=> {

    return (
        <BoardDropdownContainer isVisible={isVisible} >
            <li className='dropdownbox' onClick={()=>{handleBoardType("신규순")}}>신규순</li>
            <li className='dropdownbox' onClick={()=>handleBoardType("공감순")}>공감순</li>
            <li className='dropdownbox' onClick={()=>handleBoardType("마감기간순")}>마감기간순</li>
        </BoardDropdownContainer>
    );
  }
  
  export default BoardDropdown;