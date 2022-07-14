import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoMdFlash } from 'react-icons/io';


const StyledButton = styled.button`
color:${({color})=>color||"#1DBEB4"};
height: 40px;
width: ${({width})=>width||"206px"};
left: 0px;
top: 0px;
border-radius: 5px;
padding: 10px;
border: 1px solid #1DBEB4;
cursor:pointer;
background-color:${({backgroundColor})=>backgroundColor||"white"};
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;

@media all and (max-width:600px){
  width:100%;
}

`;

export default function Button({path,text, color, backgroundColor,signIn,signUp,width,kabookLogged, handleClickReserve}) {
  
  
  const handleClick=()=>{
    
    if(signIn){
      signIn();
    }
    if(signUp){
      signUp();
    }
    if(handleClickReserve){
      handleClickReserve()
    }
  }

 
  return(
    <StyledButton width={width} color={color} backgroundColor={backgroundColor} type="submit" onClick={handleClick}>
         {text}
    </StyledButton>
  )
}