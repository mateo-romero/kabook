import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating';

//STYLES

const StyledHeaderProduct = styled.div`
    width:100%;
    height:60px;
    background-color:rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media all and (max-width:600px){
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
const StyledDiv = styled.div`
    padding-right:2.93vw;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #383B58;
    .star-svg {
        height: 20px;
        width 20px;
      };
    @media all and (max-width:900px){
        padding-right:4.17vw; 
      }
      
    @media all and (max-width:600px){
    padding-right: 3.2vw ;
}
`;
const StyledDiv2 = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:center;

    padding-right:10px;

}
`;
const StyledCategory = styled.p`

    font-family:Roboto;
    font-weight: bold;
    font-size: 14px;
    color:#545776;
`;
const StyledName = styled.p`
    font-family:Roboto;
    font-weight: bold;
    font-size: 14px;
    color:#545776;  
`;
const StyledCalification= styled.span`   
     color: #FFFFFF;
    background-color: #545776;
    padding: 0.3em 0.6em;
    border-radius: 10px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
`;
const StyledCalificationInText=styled.p`
    font-family:Roboto;
    font-weight: bold;
    font-size: 14px;
    color:#545776;  
`;

export default function HeaderProductSecond({product}) {
    const navigate=useNavigate();
    const goHome=()=>{
        navigate("/")
    }
  return(
            <StyledHeaderProduct>
                <StyledHeaderDiv>
                                    {product.city?<StyledCategory  >  <FaMapMarkerAlt className='paddingRight'/>{product.city.name+", "+product.city.country}</StyledCategory>:""}
                                    <StyledName className='paddingLeft'>{product.location}</StyledName>
                                   
                </StyledHeaderDiv>
                
                <StyledDiv >    
                                <StyledDiv2 >  
                                {product.rating>=9?<StyledCalificationInText>{"Excelente"}</StyledCalificationInText>:product.rating>=7?<StyledCalificationInText>{"Muy bueno"}</StyledCalificationInText>:product.rating>=5?<StyledCalificationInText>{"Bueno"}</StyledCalificationInText>:<StyledCalificationInText>{"Regular"}</StyledCalificationInText>}
                                <Rating ratingValue={5*product.rating*2} readonly={true} allowHover={false} fillColor={'#1DBEB4'} />
                                </StyledDiv2 >  
                                <StyledCalification>{product.rating}</StyledCalification>

                </StyledDiv >

                

            </StyledHeaderProduct>
  )
}