import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContainCalendarReserve from './CointainCalendarReserve';
import InputsReserve from './InputsReserve';
import HourArrive from './HourArrive';
import ConfirmeReserve from './ConfirmeRerserve'
const StyledContainer = styled.div`
    background-color: rgba(0,0,0,0.1);
    padding-bottom:50px;
    padding-top:20px;
    display:flex;
    justify-content:space-between;
    @media all and (max-width:1380px){
      flex-direction:column;
      align-items:center;
    }
    @media all and (min-width:1900px){
      justify-content:center;
     
    }
`;
const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    @media all and (min-width:1900px){
      
        margin-right:100px;
      
    }
`;



export default function ContainReserve({product,kabookLogged,signIn,jwt}) {
  
  const [Date1,setDate1]=useState("__/__/__")
    const [Date2,setDate2]=useState("__/__/__")
    const [hour,setHour]=useState("")
    const formatDate = (date)=>{
      let month= date.getMonth()+ 1
      if(month<10){
        month="0"+month
      }
      let day= date.getDate() 
      if(day<10){
        day="0"+day
      }
      let formatted_date =date.getFullYear() + "-" +  month +   "-"  +day
       return formatted_date;
      }
   
    const takeDate=(date1,date2)=>{
      
            if(date2 !=null){
            setDate1(formatDate(date1))
            setDate2(formatDate(date2))}
  }
  const takeHour =()=>{
    let option = document.querySelectorAll("option")
    option.forEach(element=>{
      if(element.selected){
    
        setHour(element.textContent)
      }
    })
     
  }
  
 

 
  return(
            <>  
            <StyledContainer>
                                <StyledDiv>
                                <InputsReserve jwt={jwt} product={product}></InputsReserve>
                                <ContainCalendarReserve hotel={product} takeDate={takeDate}></ContainCalendarReserve>
                                <HourArrive takeHour={takeHour}></HourArrive>
                                </StyledDiv> 
                                
                                <ConfirmeReserve hour={hour} jwt={jwt} signIn={signIn} kabookLogged={kabookLogged} hotel={product} date1={Date1} date2={Date2}></ConfirmeReserve>
            </StyledContainer>
            </>
  )
}