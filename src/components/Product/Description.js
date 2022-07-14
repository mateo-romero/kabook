import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { GiCookingPot } from "react-icons/gi";
import { IoIosTv} from "react-icons/io";
import { BsSnow} from "react-icons/bs";
import { MdPets} from "react-icons/md";
import { AiFillCar} from "react-icons/ai";
import { MdPool} from "react-icons/md";
import { AiOutlineWifi} from "react-icons/ai";
import { FaCocktail, FaUserGraduate } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaHandsWash } from 'react-icons/fa';
import ContainCalendar from './ContainCalendar';
import GoogleMap  from 'simple-react-google-maps'


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
const StyledDescription= styled.p`

    font-size: 14px;
    color:#383B58;
   
    height:auto;
    margin-bottom:30px;
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
const StyledCategory = styled.p`

    font-family:Roboto;
    font-weight: bold;
    font-size: 14px;
    color:#545776;
    padding-left:3.4vw;
    margin-top:20px;
    @media all and (max-width:900px){
        padding-left: 4.5vw;
      }
      @media all and (max-width:600px){
        
        padding-left: 3vw;
    }
`;
const StyledOfered=styled.div`
    display:flex;
    align-items:center;
    margin-left:20px;
    svg{
        color:#1DBEB4;
        width:20px;
        height:20px;
    }
    gap:10px;

`;
const StyledSay=styled.p`
    font-size: 14px;
    color:#383B58;

    
`;
const StyledContainIcons=styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        grid-auto-rows: 100px;
        padding-left:3.4vw;
        gap:0px;
        max-width:100vw;
        overflow-x:hidden;
        @media all and (max-width:600px){
            grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
        }
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
const StyledIframe = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    div{
            margin:30px auto ;
            border:none;
           
           
    }
  
`;
export default function Description({product}) {
    
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
      
    <StyledDescriptionTitle>
         {"Alójate en " + product.name+ " y pasa los mejores dias de tu vida" }
     </StyledDescriptionTitle>
    <StyledDescription>
        {product.description}
    </StyledDescription>
    <StyledDescriptionTitle>¿Que ofrece este lugar?</StyledDescriptionTitle>
    <StyledHr/>
    {product.features?<StyledContainIcons>
    {product.features.map(feature=>
    feature.id===1?<StyledOfered key={feature.id}><GiCookingPot></GiCookingPot><StyledSay>Cocina</StyledSay></StyledOfered>
    :feature.id===2?<StyledOfered key={feature.id}><IoIosTv></IoIosTv><StyledSay>Televisor</StyledSay></StyledOfered>
    :feature.id===3?<StyledOfered key={feature.id}><AiFillCar></AiFillCar><StyledSay>Estacionamiento gratuito</StyledSay></StyledOfered>
    :feature.id===4?<StyledOfered key={feature.id}><MdPool></MdPool><StyledSay>Pileta</StyledSay></StyledOfered>
    :feature.id===5?<StyledOfered key={feature.id}><BsSnow></BsSnow><StyledSay>Aire acondicionado</StyledSay></StyledOfered>
    :feature.id===6?<StyledOfered key={feature.id}><AiOutlineWifi></AiOutlineWifi><StyledSay>Wifi</StyledSay></StyledOfered>
    :feature.id===7? <StyledOfered key={feature.id}><MdPets></MdPets><StyledSay>Apto mascotas</StyledSay></StyledOfered>
    :feature.id===8? <StyledOfered key={feature.id}><FaCocktail></FaCocktail><StyledSay>Bar</StyledSay></StyledOfered>
    :feature.id===9? <StyledOfered key={feature.id}><FaCoffee></FaCoffee><StyledSay>Desayuno</StyledSay></StyledOfered>
    :feature.id===10? <StyledOfered key={feature.id}><FaUtensils></FaUtensils><StyledSay>Restaurante</StyledSay></StyledOfered>
    :feature.id===11? <StyledOfered key={feature.id}><FaVideo></FaVideo><StyledSay>Seguridad 24 horas</StyledSay></StyledOfered>
    :feature.id===12? <StyledOfered key={feature.id}><FaHandsWash></FaHandsWash><StyledSay>Servicio de limpieza diario</StyledSay></StyledOfered>

    :"")
    }
    </StyledContainIcons>:""}
    <ContainCalendar product={product}></ContainCalendar>
    <StyledDescriptionTitle>¿Dónde vas a estar?</StyledDescriptionTitle>
    <StyledHr/>
    {product.city?<StyledCategory>{product.city.name+", "+product.city.country}</StyledCategory>:""}
    <StyledIframe>
    <GoogleMap
      apiKey={"AIzaSyB2hFIn1MJ_lbD16bUQB-LwCTlb5fUl7NA"} 
      style={{height: "450px", width: "90%"}}
      zoom={10}  
      center={{lat: parseFloat(product.latitude), lng: parseFloat(product.longitude)}}
        markers={{lat: parseFloat(product.latitude), lng: parseFloat(product.longitude)}}   
          >
      
    </GoogleMap>
    </StyledIframe>
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