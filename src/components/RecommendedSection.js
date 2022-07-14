import React, { useState, useEffect } from 'react';
import HotelCard from "./HotelCard";
import styled from 'styled-components';
// import data from '../json/sites.json';
import { fetchUtil } from "../utils/fetchUtil";
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  padding: 1rem 0;
  & h2 {
    
    font-family: 'roboto';
    font-size: 24px;
    color: #383B58;
    padding-bottom: 1rem;
    margin-left:2.93vw;
    margin-top:20px;
    margin-bottom:40px;
  }
  @media all and (max-width:600px){
    h2 {
      padding-left: 0;
      text-align: center;
     
    }
  }
`;
const StyledFlexContainer = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  margin-left:2.93vw;
  margin-right:2.93vw;
  gap:1em;
  justify-content: space-around;
  margin-bottom:30px;
`;
export default function RecommendedSection(props) {
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState(props.filterr);
  let api = fetchUtil();
  let bodyGet2=props.bodyGet
  const navigate = useNavigate();
       
      if(endpoint!==props.filterr){
        setEndpoint(props.filterr)
      }
   
    useEffect(() => {
      if(!props.bodyGet){
        api.get(endpoint)
        .then((res) => {
          //console.log(res);
          if (!res.err) {
            setData(res);
        }})
      }else{
      
      
        api.post(endpoint,{body:props.bodyGet,headers:{"Content-Type":"application/json"}}).then(res=>{
        
          if(!res.error){
              console.log(res)
              setData(res)           
            }})}
     /*  if(!props.bodyGet){
        apiConnector()
        .get(endpoint)
        .then((res) => {
          //console.log(res);
          if (!res.err) {
            setData(res);
          } else {
            setData(null);
          }
        });
      }else{
        alert("bien")
        apiConnector()
        .get(endpoint,{body:props.bodyGet})
        .then((res) => {
          //console.log(res);
          if (!res.err) {
            setData(res);
          } else {
            setData(null);
          }
        });
      } */
  
  }, [bodyGet2]);

const goProduct=(id)=>{
  navigate("/lodging/"+id)
}

  return(
    <StyledContainer>
      {props.nameCity!==""?<h2>{"Alojamientos en "+props.nameCity}</h2>:<h2>Recomendaciones</h2>}
      <StyledFlexContainer>
        {/* <HotelCard></HotelCard> */}
       {data?data.map((hotel) => <HotelCard functionClick={goProduct} key={hotel.id} hotel={hotel}/>):"" } 
        {/* {JSON.stringify(data)} */}
      </StyledFlexContainer>
    </StyledContainer>
  );
}