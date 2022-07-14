import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  background: #FFFFFF;
  color: #545776;
  width: 420px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: relative;
  @media all and (max-width:600px){
    width:100%;
  }
`;
const StyledInput = styled.div`
  border: none;
  width: 360px;
  &:focus {
    outline: none;
  }
  @media all and (max-width:600px){
    width:100%;
    margin-left:10px;
  }
`;
const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
`;

export default function SearchInput({icon, input}) {
  return(
    <StyledInputWrapper>
      <StyledIconWrapper>
        {icon}
      </StyledIconWrapper>
      <StyledInput>
        {input}
      </StyledInput>
    </StyledInputWrapper> 
  );
}