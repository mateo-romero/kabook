import React, { useEffect,useRef,useState } from 'react';
import styled from 'styled-components';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineShareAlt } from "react-icons/ai";
import Carousel from './Carousel';

//STYLES

const StyledContainer= styled.div`

        overflow-x:hidden;
        display:grid;
        grid-template-columns: 23.41vw 23.41vw 23.41vw 23.42vw;
        grid-template-rows: 193px 193px;
        justify-content:flex-start;
        padding-left:3.4vw;
        gap:8px;
        padding-right:2.93vw;
        margin-top:20px;
        transition: all 0.5s ease;
        position:relative;
`;
const StyledDiv= styled.div`

    margin-top:20px;  
    padding-left:3.4vw; 
    svg{
      width:21px;
      height:21px;
      margin-right:14px;
      color:#545776;
      cursor:pointer;
     
     
    }
    @media all and (max-width:600px){
      margin-top:10px;
      position:absolute;
      z-index:212;
    }
`;

const StyledVerMas= styled.p`

       
      font-family: roboto;
      font-weight: bold;
      font-size: 18px;
      text-decoration:underline;
      color:white;
      position:absolute;
      cursor:pointer;
      bottom:10px;
      right:2.93vw;
`;


const StyledContainer2= styled.div`

        position:fixed;
        top:120px;
        left:calc(50% - 405px);
        text-aling:center;
        z-index:213123123213;
        display:grid;
        grid-template-columns: 175px 175px 175px 175px;
        grid-template-rows: 360px 135px;
        justify-content:flex-start;
         margin-left:2.4vw;
        gap:8px;
        grid-row-gap: 40px;
       
        background-color:white;
        border-radius:10px;
        color:white;
`;
const StyledButton=styled.button`
      position:absolute;     
      width:40px;
      height:40px;
      border-radius:50%;
      background-color:#1DBEB4;
      color:white;
      font-size:30px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:none;
      right:15px;
      padding-left:2px;
      padding-bottom:2px;
      cursor:pointer;
      top:172px;
      &:hover{
        opacity:0.9;
      }
`;
const StyledExit=styled.p`
      position:absolute;     
      color:gray;
      font-size:30px;
      font-weight:bold;
      right:28px;
      cursor:pointer;
      top:10px;
     
      &:hover{
        opacity:0.9;
      }
`;
const StyledPosition=styled.p`
      position:absolute;     
      color:#383B58;
      font-family:Roboto;
      font-weight:bold;
      font-size: 16px;
      right:45%;
      top:375px;
    
`;
const  StyledDark =styled.div`
        width:100vw;
        height:120vh;
        position:fixed;
        top:-90px;
        z-index:233;
        background-color:rgba(56,59,88,0.9);
  `;
  const StyledPosition3=styled.p`
       position:absolute;     
       color:white;
       font-family:Roboto;
       font-weight:bold;
        font-size: 16px;
        right:10%;
        top:calc(40vh );
        @media all and (max-width:600px){
          top:calc(35vh);
        }

`;
const StyledDivCon=styled.div`
position:relative;

`;





export default function ProductMain({product}) {
   

    let arrayImages=product.images;
    let originalArray=[];
    arrayImages.forEach(element => {
        originalArray.push(element.urlImage)
    });
    
   const [moveArray,setMoveArray]=useState(originalArray.slice(0,5))
   const [moveArray2,setMoveArray2]=useState(originalArray.slice(0,5))
   const [number,setNumber]=useState(1)
   const [isDesktop,setIsDesktop]=useState(true)
   const [time,setMove]=useState(1)
   const [carruselDesktopTimer,setCarruselDesktopTimer]=useState(true)
    let img= useRef();
 
      useEffect(()=>{
           let time=1;
           setInterval(()=>{
                 
            if(time===(originalArray.length-4)){
                setMoveArray(originalArray.slice(time,time+5).concat(originalArray.slice(0,1)))
               
            }else if(time===(originalArray.length-3)){
            setMoveArray(originalArray.slice(time,time+5).concat(originalArray.slice(0,2)))
          }
            else if(time===(originalArray.length-2)){
              setMoveArray(originalArray.slice(time,time+5).concat(originalArray.slice(0,3)))
          
            }
            else if(time===(originalArray.length-1)){
                setMoveArray(originalArray.slice(time,time+5).concat(originalArray.slice(0,4)))
               }
              else if(time===originalArray.length){
                setMoveArray(originalArray.slice(time,time+5).concat(originalArray.slice(0,5)))
                time=0;}else{
              setMoveArray(originalArray.slice(time,time+5)); }
              time++           
        },3000)
        
     

      
        return clearInterval;
      },[]) 
      useEffect(()=>{
        let widht = window.innerWidth;
        if(widht<800){
          setIsDesktop(false)
        }else{
          setIsDesktop(true)
        }
      })
      
      const activateCarru=()=>{
     
          setCarruselDesktopTimer(false)
          
      } 
    
     
      let activateCarru2=()=>{
        if(time===(originalArray.length-4)){
            setMoveArray2(originalArray.slice(time,time+5).concat(originalArray.slice(0,1)))
            setMove(time+1)
        }else if(time===(originalArray.length-3)){
        setMoveArray2(originalArray.slice(time,time+5).concat(originalArray.slice(0,2)))
        setMove(time+1)}else if(time===(originalArray.length-2)){
          setMoveArray2(originalArray.slice(time,time+5).concat(originalArray.slice(0,3)))
          setMove(time+1)
        }else if(time===(originalArray.length-1)){
            setMoveArray2(originalArray.slice(time,time+5).concat(originalArray.slice(0,4)))
           setMove(time+1)}else if(time===originalArray.length){
            setMoveArray2(originalArray.slice(time,time+5).concat(originalArray.slice(0,5)))
           setMove(1);}else{
          setMoveArray2(originalArray.slice(time,time+5)); setMove(time+1)}
      } 
      const exit=()=>{
        setCarruselDesktopTimer(true)
      }

      const moveNumber=()=>{
            if(number==originalArray.length){
              setNumber(1)
            }else{
              setNumber(number+1)
            }
      
      }

  return(
           <> <StyledDivCon>
          {!carruselDesktopTimer? <StyledDark></StyledDark>:""}
           <StyledDiv>
                        <AiOutlineShareAlt/>
                        <HiOutlineHeart/>
                      
           </StyledDiv>
         
            {carruselDesktopTimer && isDesktop ? <StyledContainer  ref={img}  >
                        { moveArray.map((image,index)=><LazyLoadImage   className="styledImg lazyLoad" key={index} alt="" src={image}></LazyLoadImage>)}
                           <StyledVerMas onClick={activateCarru}>Ver más</StyledVerMas>
            </StyledContainer>:!carruselDesktopTimer && isDesktop ? <><StyledContainer2>
                        { moveArray2.slice(0,5).map((image,index)=><LazyLoadImage   className="styledImg2" key={index} alt="" src={image}></LazyLoadImage>)}
                           <StyledButton onClick={activateCarru2}>&gt;</StyledButton>
                           <StyledPosition>{time+"/"+originalArray.length} </StyledPosition>
                           <StyledExit onClick={exit}>X</StyledExit>

            </StyledContainer2><StyledContainer  ref={img}  >
                        { originalArray.slice(0,5).map((image,index)=><LazyLoadImage   className="styledImg lazyLoad" key={index} alt="" src={image}></LazyLoadImage>)}
                           <StyledVerMas onClick={activateCarru}>Ver más</StyledVerMas>
            </StyledContainer></>:<><Carousel moveNumber={moveNumber} images={originalArray} autoPlay={true} showButtons={false}></Carousel> <StyledPosition3>{number+"/"+originalArray.length} </StyledPosition3></>}  
            </StyledDivCon>
            </>
  )
}