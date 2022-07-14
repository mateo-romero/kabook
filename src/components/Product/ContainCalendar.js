import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CalendarProduct from './CalendarProduct'
import Button from '../Button';

const StyledBigContain = styled.div`
        background-color:rgba(0,0,0,0.2);
        height:450px;
        padding-left:2.93vw;
        color:#383B58;
        @media all and (max-width:1250px){
            height:auto;
            padding-bottom:30px;
         }
        @media all and (max-width:700px){
            height:900px;
        }
        margin-top:50px;
        
`;
const StyledH4= styled.h4`
        padding-top:30px;
        margin-bottom:30px;
        font-size:30px;
`;
const StyledContainer = styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
        @media all and (max-width:1250px){
            flex-direction:column;

         }
       
`;

const StyledReserve = styled.div`
        background-color:white;
        padding:25px;
        margin-right:5.93vw;
        border-radius:5px;
        p{  
            font-size:16px;
            font-weight:bold;
            margin-bottom:30px;
            margin-top:10px;
        }
        @media all and (max-width:1400px){
            margin-right:2.93vw;
        }
         @media all and (max-width:1250px){
           margin-top:30px;
         }
        
`;

export default function ContainCalendar({product}) {
  
  
 

 
  return(
            <>  
            <StyledBigContain>
                <StyledH4>Fechas Disponibles</StyledH4>
                <StyledContainer>
                                 <CalendarProduct hotel={product}></CalendarProduct>
                                <StyledReserve>
                                                <p>Agregá tus fechas de viaje para obtener precios exactos
                                                </p>
                                                <Link to={`reserve/${product.id}`} style={{textDecoration:"none"}}>
                                                <Button color="white" width="100%" backgroundColor="#1DBEB4" text="Iniciar reserva"></Button>
                                                </Link>
                                </StyledReserve>
                </StyledContainer>
                </StyledBigContain>
               
             </>
  )
}