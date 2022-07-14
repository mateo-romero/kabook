import React from 'react';
import styled from 'styled-components';





const StyledDescriptionTitle = styled.h3`
    font-family:Roboto;
    font-weight: bold;
    font-size: 24px;
    color:#383B58;
  
    height:auto;
    margin-top:20px;
    margin-bottom:20px;
    padding-left:3.4vw;
    @media all and (max-width:900px){
        padding-left: 4.5vw;
      }
      @media all and (max-width:600px){
        
        padding-left: 3vw;
    }
`;
const StyledHr= styled.hr`

    color:#1DBEB4;
    border: 0.5px solid #1DBEB4;
    background-color:#1DBEB4;
    margin-bottom:10px;
`;
const StyledContainKnows=styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        grid-auto-rows: auto;
        padding-left:3.4vw;
        gap:0px;
        margin-top:30px;
        max-width:100vw;
        overflow-x:hidden;
        overflow-y:hidden;
        margin-bottom:100px;
        
`;
const StyledDivKnow=styled.div`
        display:flex;
        flex-direction:column;

`;
const StyledTitleKnow = styled.h6`
    font-family:Roboto;
    font-weight: bold;
    font-size: 18px;
    color:#383B58;
    margin-bottom:15px;
    height:auto;
    @media all and (max-width:600px){
        margin-top:30px;
    }
  
`;
const StyledPKnow = styled.p`
    margin-top:10px;
    color:#383B58;
  
`;
export default function DescriptionReserve({product}) {
  
        
    let arrayPolicies=product.policies;
    let normas=[]
    let salud=[]
    let cancelacion=[]
    arrayPolicies.forEach(element => {
        if(element.title=="Normas de la casa"){
            normas.push(element.description)
        }
        if(element.title=="Salud y Seguridad"){
            salud.push(element.description)
        }
        if(element.title=="Politica de cancelación"){
            cancelacion.push(element.description)
        }
    });
  return(
      <>
      

    
    <StyledDescriptionTitle>¿Que tenes que saber?</StyledDescriptionTitle>
    <StyledHr/>
    <StyledContainKnows>
    <StyledDivKnow><StyledTitleKnow>Normas de la casa</StyledTitleKnow>{normas.map((element,index)=>
            <StyledPKnow key={"Nomas"+index}>{element}</StyledPKnow>
    )}</StyledDivKnow>
    <StyledDivKnow><StyledTitleKnow>Salud y seguridad</StyledTitleKnow>{salud.map((element,index)=>
            <StyledPKnow key={"Nomas"+index}>{element}</StyledPKnow>
    )}</StyledDivKnow>
    <StyledDivKnow><StyledTitleKnow>Politica de cancelación</StyledTitleKnow>{cancelacion.map((element,index)=>
            <StyledPKnow key={"Nomas"+index}>{element}</StyledPKnow>
    )}</StyledDivKnow>
    </StyledContainKnows>
    </>
  )
}