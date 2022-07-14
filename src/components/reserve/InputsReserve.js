import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CalendarProduct from './../Product/CalendarProduct'
import Button from './../Button';


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
    
    padding-left: 0px;
}
`;//STYLES 
const StyledLabel=styled.label`
  display:block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383B58;
  margin-bottom:10px;

`;
const StyledInput=styled.input`
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
border:none;
display:block;
padding-left:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
color: #383B58;
background-color:rgba(0,0,0,0.07);
outline-color: #1DBEB4;
width:${({width})=>width||"32vw"};
height:${({height})=>height||"40px"};
margin-bottom:15px;
@media all and (max-width:900px){
  width:100%;
  height:40px;
}
@media all and (max-width:600px){
  width:100%;
  height:40px;
}
`;
const StyledInput2=styled.input`
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
border:none;
display:block;
padding-left:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
color: #383B58;
background-color:white;
outline-color: #1DBEB4;
width:${({width})=>width||"32vw"};
height:${({height})=>height||"40px"};
margin-bottom:15px;
@media all and (max-width:900px){
  width:100%;
  height:40px;
}
@media all and (max-width:600px){
  width:100%;
  height:40px;
}
`;

const StyledDivName=styled.div`
display:flex;
align-items:center;
@media all and (max-width:900px){
  flex-direction:column
}
.margin-right-form-sing-up{
  margin-right: 18px;
}
`;
const StyleForm=styled.form`
padding:30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;
background-color:white;
width:655px;
border-radius:10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media all and (max-width:800px){
  width:455px;

}
@media all and (max-width:600px){
  width:280px;

}
`;

const StylePwrong=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
color: red;
text-align:right;
margin-top:-5px;
margin-bottom:10px;
`;


export default function InputsReserve({product,jwt}) {
  
  const [name,setName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [city,setCity]= useState("")


 
  let validateName=useRef();
  let validateLastName=useRef();
  let validateEmail=useRef();
  let validateCity=useRef();

  let form=useRef();


  const validator=(e)=>{
    e.preventDefault();
    let regrets=/^([a-zA-Z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/g
    if(name===""){
      console.log("")
      validateName.current.style.display="block";
      validateName.current.textContent="Este campo es obligatorio"
    }else{ ;validateName.current.style.display="none";}
    if(lastName===""){
      validateLastName.current.style.display="block";
      validateLastName.current.textContent="Este campo es obligatorio"
    }else{validateLastName.current.style.display="none";}
    if(!regrets.test(email)){
    
      validateEmail.current.style.display="block";
      validateEmail.current.textContent="Ingrese un email correcto"
    }else{validateEmail.current.style.display="none";}
    
  }
  
 

 
  return(
            <>
              <StyledContainer>
                                    <StyledDescriptionTitle>Completá tus datos</StyledDescriptionTitle>
                                    <StyleForm  ref={form} onSubmit={validator}>
                                                                    <StyledDivName>
                                                                            <div className="margin-right-form-sing-up">
                                                                                          <StyledLabel htmlFor="name">Nombre</StyledLabel>
                                                                                          <StyledInput width="300px" type="text" id="name" name="name"  disabled value={jwt?jwt.userDTO.name:""}  onChange={(e)=>{setName(e.target.value)}}/>
                                                                                           <StylePwrong ref={validateName} style={{display:"none"}}>Campo obligatorio</StylePwrong>  
                                                                              </div>
                                                                             <div>
                                                                                            <StyledLabel htmlFor="lastName">Apellido</StyledLabel>
                                                                                             <StyledInput  width="300px" type="text" id="lastName" name="lastName" disabled value={jwt?jwt.userDTO.lastName:""} onChange={(e)=>{setLastName(e.target.value)}}/>
                                                                                              <StylePwrong ref={validateLastName} style={{display:"none"}}>Campo obligatorio</StylePwrong>   
                                                                                  </div>
                                                                     </StyledDivName>
                                                                      <StyledDivName>
                                                                                  <div className="margin-right-form-sing-up">
                                                                                          <StyledLabel   htmlFor="email">Correo electrónico</StyledLabel>
                                                                                            <StyledInput disabled width="300px" type="email" id="email" name="email" value={jwt?jwt.userDTO.email:""} onChange={(e)=>{setEmail(e.target.value)}}/>
                                                                                           <StylePwrong ref={validateEmail} style={{display:"none"}}>Campo obligatorio</StylePwrong>  
                                                                                                </div>
                                                                                     <div>
                                                                                                  <StyledLabel htmlFor="city">Ciudad</StyledLabel>
                                                                                               <StyledInput2 disabled  width="300px" type="text" id="city" name="city" value={product.city?product.city.name+", "+product.city.country:""} onChange={(e)=>{setCity(e.target.value)}}/>
                                                                                                 <StylePwrong ref={validateCity} style={{display:"none"}}>Campo obligatorio</StylePwrong>   
                                                                                         </div>
                                                                    </StyledDivName>
   
                                         </StyleForm>
             </StyledContainer>
       
            </>
  )
}





 
 
 
  
      
   
    
   
  
   
 
  
