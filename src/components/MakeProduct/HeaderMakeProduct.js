import React from 'react';
import styled from 'styled-components';
import back from './../../images/back.svg'
import { useNavigate } from 'react-router-dom';


//STYLES

const StyledHeaderProduct = styled.div`
    width:100%;
    height:60px;
    background-color:#545776;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:80px;
    z-index:222;
    @media all and (max-width:600px){
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media all and (max-width:900px) {
            top: 98px;
    }
    @media all and (max-width:600px) {
          top: 90px;
    }


`;
const StyledHeaderDiv = styled.div`
    padding-left:3.4vw;
    display:flex;
    flex-direction:column;
    @media all and (max-width:900px){
        padding-left: 4.5vw;
      }
      @media all and (max-width:600px){
        
        padding-left: 3vw;
    }
`;
const StyledBack = styled.img`
    padding-right:2.93vw;
    cursor:pointer;
    @media all and (max-width:900px){
        padding-right:4.17vw; 
      }
      
@media all and (max-width:600px){
    padding-right: 3.2vw ;
}
`;
const StyledCategory = styled.p`

    font-family: Quicksand;
    font-weight: bold;
    font-size: 14px;
    color:#F3F1ED;
`;
const StyledName = styled.p`
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    color:#FFFFFF;
`;


export default function HeaderMakeProduct() {
    const navigate=useNavigate();
    const goHome=()=>{
        navigate("/")
    }
  

  return(
            <StyledHeaderProduct>
                <StyledHeaderDiv>
                                    <StyledName>Administración</StyledName>
                </StyledHeaderDiv>
                
                <StyledBack onClick={goHome} src={back} alt="goBack"/>

                

            </StyledHeaderProduct>
  )
}