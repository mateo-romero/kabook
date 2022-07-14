import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


//STYLES

const StyledFooter = styled.footer`
background: #1DBEB4;
color: #FFFFFF;
height: 58px;
width: 100%;
display: flex;
justify-content: space-between;
position:fixed;
top:calc(100vh - 58px);
left:0px;
z-index:3223;
max-width:100vw;
`;
const StyledP = styled.p`
padding: 19px 0px 23px 3.66vw;
font-family="Roboto";
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
@media all and (max-width:900px){
  padding: 21px 0px 21px 4vw;
}
@media all and (max-width:600px){
  padding: 23px 0px 19px 4.6vw;
}
`;
const StyledList = styled.ul`
list-style: none;
display: flex;
align-items: center;
gap: 15px;
font-size: 25px;
padding: 0 3.67vw 0 0;
@media all and (max-width:600px){
  display:none;
}
`;

export default function Footer({id}) {
 
  return(
    <StyledFooter id={id||""}>
      <StyledP>&copy; 2021 Kabook</StyledP>
      <StyledList>
        <li ><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedinIn /></li>
        <li><FaTwitter /></li>          
      </StyledList>
    </StyledFooter>
  )
}