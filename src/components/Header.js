import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from './../images/logo-KB.png';
import Button from './Button';
import menu from './../images/menu.svg'
import MobileHeader from './MobileHeader'; 
import logoName from './../images/logoName.svg'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

 //STYLES 

 const StyledHeader = styled.header`
 background: white;
 color: #FFFFFF;
 height: 80px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 position: fixed;
 z-index:123123;
 top: 0;
 left: 0;
 max-width:100vw;
 @media all and (max-width:900px){
  height: 98px;
}
 @media all and (max-width:600px){
     height: 90px;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
 }
 `;
 const StyledImage=styled.img`
 height: 52px;
 width: 71px;
 object-fit: cover;
 padding: 15px 0px 13px 2.93vw;
 cursor:pointer;
 @media all and (max-width:900px){
  padding: 25px 0px 21px 3.9vw;
}
 @media all and (max-width:600px){
    height: 50px;
    width: 69px;
    padding: 20px 0px 23px 2.66vw;
}
`;
const StyledDiv=styled.div`
display:flex
`;
const StyledP = styled.p`
padding: 39px 0 18px 12px;
font-family: 'Roboto';
font-style: italic;
font-weight: 300;
font-size: 20px;
margin:0px;
cursor:pointer;
color:#545776;
@media all and (max-width:900px){
    display:none;
}
`;
const StyledList = styled.ul`
list-style: none;
display: flex;
align-items: center;
gap: 10px;
margin:0px;
padding: 30px 2.93vw 10px 0;
@media all and (max-width:900px){
  padding: 30px 4.17vw 10px 0;
}
@media all and (max-width:600px){
    display:none;
}
`;
const StyledMenu = styled.img`
display:none;
height: 12px;
width: 24.75px;
margin:0px;
padding: 39px 3.2vw 42px 0;
@media all and (max-width:600px){
    display:block;
}
`;
const StyledDivName = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin:0px;
padding: 22px 3.4vw 21px 0;
@media all and (max-width:900px){
  padding: 40px 4.17vw 21px 0;
}
@media all and (max-width:600px){
    display:none;
}
`;
const StyledPNameLogged=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
color:${({color})=>color}

`;
const StyledExit=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #383B58;
position: absolute;
top:6px;
right: 2.93vw;
cursor:pointer;
@media all and (max-width:900px){
 top:21px;
 right:3.93vw;
}
@media all and (max-width:600px){
  display:none;
 }
`;
const StyledDivName2=styled.div`
background-color:#545776;
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

`;
const StyledAdmin = styled.p`

color:#545776;
font-weight:bold;
margin-right:15px;
padding-right:10px;
padding-top:20px;
padding-bottom:20px;
border-right:solid 2px #1DBEB4;

`;


//NAME LOGGED

const NameLogged=({nombre,apellido})=>{
   
  
  return(<>
          <StyledDivName2><StyledP2>{nombre[0].toUpperCase()}{apellido[0].toUpperCase()}</StyledP2></StyledDivName2>
          <div>
            <StyledPNameLogged color="rgba(0, 0, 0, 0.5);" >Hola,</StyledPNameLogged>
            <StyledPNameLogged color="#1DBEB4;">{nombre+" "+apellido}</StyledPNameLogged>
          </div>
          
  </>)
}





export default function Header({id,logging,signIn,home,signUp,logged,jwt}) {

 const navigate= useNavigate();
  const [margilMobile,setMarginMobile]=useState("100%")
   
  const mobileMenu =()=>{

      setMarginMobile("0%")


  }
  const mobileMenuExit =()=>{

    setMarginMobile("100%")


}
const isLog=()=>{
 navigate("/")
}
const logOut=()=>{
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
  });
}



   
  //RENDER 

  return(
    <StyledHeader id={id||""}>
            <StyledDiv onClick={isLog} >
                        <StyledImage  src={Logo} alt="kabook"></StyledImage>
                        <StyledP>Sentite como tu hogar</StyledP>
            </StyledDiv>
         
            <StyledList>
                         {logging==="unlogged"||logging==="sign-in"?<Button signUp={signUp} text="Crear Cuenta"></Button>:""}  
                         {logging==="unlogged"||logging==="sign-up"?<Button signIn={signIn} text="Iniciar sesión" />:""}
                         
            </StyledList>
           
           {logging==="logged" || logging==="admin"  ? <StyledDivName> {logging==="admin"  ? <StyledAdmin>Administación</StyledAdmin>:""}<NameLogged nombre={jwt.userDTO.name}  apellido={jwt.userDTO.lastName}/></StyledDivName>:""}
           {logging==="logged" || logging==="admin" ?<StyledExit onClick={logOut}   >X</StyledExit>:""}
           {logging==="sign-in"?<StyledExit onClick={home}   >X</StyledExit>:""}
           {logging==="sign-up"?<StyledExit onClick={home}   >X</StyledExit>:""}

            <StyledMenu onClick={mobileMenu} src={menu} alt="menu"></StyledMenu>
            <MobileHeader jwt={jwt}  logging={logging} signUp={signUp} home={home} signIn={signIn} mobileMenuExit={mobileMenuExit} marginLeftMobile={margilMobile} ></MobileHeader>
    </StyledHeader>
  )
}