import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CalendarProduct from './../Product/CalendarProduct'

const StyledDescriptionTitle = styled.h3`
font-family:Roboto;
font-weight: bold;
font-size: 24px;
color:#383B58;

height:auto;
margin-top:20px;
margin-bottom:20px;

`;
const StyledContainer = styled.div`
padding-left:3.4vw;

@media all and (max-width:900px){
    padding-left: 4.5vw;
  }
  @media all and (max-width:600px){
    display:flex;
  flex-direction:column;
  align-items:center;
    padding-left: 3vw;
}
`;
export default function ContainCalendarReserve({takeDate,hotel}) {
  

  
 

 
  return(
            <>
              <StyledContainer>
                                    <StyledDescriptionTitle>Seleccioná tu fecha de reserva</StyledDescriptionTitle>
                                    <CalendarProduct hotel={hotel} takeDate={takeDate}></CalendarProduct>
             </StyledContainer>
            </>
  )
}