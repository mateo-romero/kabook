import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SingUp from '../views/SignUp';
import SingIn from '../views/SignIn';
import Home from '../views/Home';
import swal from 'sweetalert';


//STYLES

const StyledContainer = styled.div`
background-color: white;
height: 100vh;
width: 100vw;
position:absolute;
z-index:5512312312341324;
top:0px;
transition:margin-left 1s ease;
margin-left:${({marginLeftMobile})=>marginLeftMobile||"100%"};
`;

const StyledDiv = styled.div`
background-color: #1DBEB4;
height: 30vh;
width: 100vw;

`;
const StyledP = styled.p`
padding: 19px 0px 23px 3.66vw;
font-family="Roboto";
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
@media all and (max-width:900px){
  padding: 21px 0px 21px 4vw;
}
@media all and (max-width:600px){
  padding: 23px 0px 19px 4.6vw;
}
`;
const StyledList = styled.ul`
list-style: none;
display: flex;
align-items: center;
gap: 15px;
font-size: 25px;
padding: 0 3.67vw 0 0;
position:absolute;
bottom:15px;
right:10px;
color:#1DBEB4;;
`;
const StyledExit=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: white;
position: absolute;
top:8px;
left: 5vw;
cursor:pointer;
`;
const StyledMenu=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: white;
position: absolute;
top:21vh;
right: 1.93vw;
`;
const StyledButton=styled.button`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
color: #383B58;
border:none;
font-size: 16px;
margin-top:25px;
margin-bottom:24px;
text-align:right;
background-color:white;
margin-right:4vw;
`;
const StyledHr=styled.hr`


`;

//NAME LOGGED
const StyledDivName2=styled.div`
background-color:white;
width:37px;
height:37px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
`;
const StyledP2 = styled.p`

font-family: Quicksand;
font-weight: Bold;
font-size: 20px;
color:#545776;

`;
const StyledPNameLogged=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
text-align:right;
color:${({color})=>color}

`;
const StyledDivName = styled.div`
display: flex;
align-items: end;
flex-direction:column;
gap: 10px;
margin:0px;
position: absolute;
top:13vh;
right: 1.93vw;
`;
const NameLogged=({nombre,apellido})=>{
   
  
  return(<>
          <StyledDivName2><StyledP2>{nombre[0].toUpperCase()}{apellido[0].toUpperCase()}</StyledP2></StyledDivName2>
          <div>
            <StyledPNameLogged color="white;" >Hola,</StyledPNameLogged>
            <StyledPNameLogged color="#545776;">{nombre+" "+apellido}</StyledPNameLogged>
          </div>
          
  </>)
}
export default function MobileHeader({logging,marginLeftMobile,mobileMenuExit,signIn,signUp,home,logged,jwt}) {
  

  const funciones=()=>{

    signUp();
    mobileMenuExit();
  }
  const funcioneIn=()=>{
    signIn();
    mobileMenuExit();
  }
  const funcionHome=()=>{
      home();
      mobileMenuExit();
  }
  const leave=()=>{
    mobileMenuExit();
    swal({
      title: "¿Deseas cerrar sesión?",
      text: "Al continuar se cerrara tu sesión",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        
      home();
     
      }
    })
  }

  return(
    <StyledContainer  marginLeftMobile={marginLeftMobile}>
      <StyledExit onClick={mobileMenuExit} >X</StyledExit>
     {logging==="logged" || logging==="admin"? <StyledDivName><NameLogged nombre={jwt.userDTO.name}  apellido={jwt.userDTO.lastName}/></StyledDivName>:<StyledMenu onClick={funcionHome}>MENÚ</StyledMenu>}
      <StyledDiv>
      </StyledDiv>
      {logging==="logged" || logging==="admin"? <div className="marginMobile"><StyledButton onClick={leave}>Cerrar sesión</StyledButton></div>:<div className="marginMobile">
      <StyledButton onClick={funciones}>Crear cuenta</StyledButton>
      <StyledHr></StyledHr>
      <StyledButton onClick={funcioneIn}>Iniciar sesión</StyledButton>
      </div>}
      <StyledList>
        <li ><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedinIn /></li>
        <li><FaTwitter /></li> 
                 
      </StyledList>
    </StyledContainer>
  )
}