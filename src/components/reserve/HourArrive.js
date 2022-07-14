import React, { useEffect } from 'react';
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
const StyledDiv = styled.div`
background-color:white;
width:665px;
padding:30px;
border-radius:10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media all and (max-width:800px){
  width:455px;

}
@media all and (max-width:600px){
  width:280px;

}
`;
const StyledP = styled.p`

font-weight: bold;
font-size: 16px;
color:#383B58;
margin-bottom:30px;
`;
const StyledP2 = styled.p`
font-weight: bold;
font-size: 14px;
color:#383B58;
margin-bottom:10px;
`;

const StyledSelect = styled.select`
  width:300px;
  padding-left:10px;
  height:40px;
  margin-bottom:15px;
  font-size: 16px;
  color:#383B58;
  border-color:rgba(0,0,0,0.2);
outline:rgba(0,0,0,0.1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
&:focus{
  border-color:rgba(0,0,0,0.1);
outline:rgba(0,0,0,0.1);

}
@media all and (max-width:600px){
  width:155px;

}
`;
const StyledOption = styled.option`
width:300px;
padding-left:10px;
margin-bottom:15px;
font-size: 16px;
color:#383B58;
border-color:#383B58;
outline:#383B58;
&:focus{
  border-color:#383B58;
outline:#383B58;
}
@media all and (max-width:600px){
  width:155px;

}
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
  justify-content:center;
    padding-left: 0px;
}
`;
export default function HourArrive({takeHour}) {
  
  
  useEffect(()=>{
   takeHour()
  })
  


 
  return(
            <>
              <StyledContainer>
                                    <StyledDescriptionTitle>Tu horario de llegada</StyledDescriptionTitle>
                                    <StyledDiv>
                                        <StyledP>Tu habitacion va a estar lista para el check-in entre las 10:00 AM y a las 11:00 PM</StyledP>
                                        <StyledP2>Indicá tu horario estimado de llegada</StyledP2>
                                        <StyledSelect onChange={takeHour}>
                                          <StyledOption >10:00</StyledOption>
                                          <StyledOption>11:00</StyledOption>
                                          <StyledOption>12:00</StyledOption>
                                          <StyledOption>13:00</StyledOption>
                                          <StyledOption>14:00 </StyledOption>
                                          <StyledOption>15:00 </StyledOption>
                                          <StyledOption>16:00</StyledOption>
                                          <StyledOption>17:00</StyledOption>
                                          <StyledOption>18:00</StyledOption>

                                          <StyledOption>19:00</StyledOption>
                                          <StyledOption>20:00</StyledOption>
                                          <StyledOption>21:00</StyledOption>
                                          <StyledOption>22:00</StyledOption>
                                          <StyledOption>23:00</StyledOption>
                                        </StyledSelect>
                                    </StyledDiv>
             </StyledContainer>
            </>
  )
}