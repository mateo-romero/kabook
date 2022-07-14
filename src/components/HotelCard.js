import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';
import Button from './Button';
import { FaMapMarkerAlt, FaWifi, FaSwimmer, FaTv, FaParking, FaSnowflake, FaPaw } from 'react-icons/fa';

import {LazyLoadImage} from 'react-lazy-load-image-component'
import Spinner from "../images/spinner2.gif";
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
const StyledCard = styled.div`
  max-width: 665px;
  height: 290px;
  background-color: white;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media all and (max-width:600px){
    flex-direction: column;
    width: 300px;
    height: auto;
  }
  @media all and (max-width:1435px){
    max-width: 605px;
    margin:0px;
  }
  @media all and (max-width:1300px){
    max-width: 550px;
  }
  @media all and (max-width:1200px){
    max-width: 640px;
  }
`;
const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: auto;
  padding-right: 1rem;
  font-family: 'roboto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 24px;
    color: #383B58;
    width:80%;
  };
  p {
    color: #383B58;
    font-weight: 500;
  }
  span.link{
    color: #1DBEB4;
    font-weight: 700;
  }
  &.info-div {
    padding-bottom: 0.5em;
  }
  @media all and (max-width:600px){
    width: 100%;
    padding-right: 0;
    &.info-div {
      height: 300px;
      padding: 0 0.5em 0.5em;
    }
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledRow = styled.div`
  display: flex;
  font-size: 0.9rem;
  p {
    padding-right: 8px;
  }
  p.category-text{
    padding-right: 8px;
    color: #383B5850;
  }
  .star-svg {
    height: 20px;
    width 20px;
  };
  &.icon-row-container {
    padding-top: 0.5em;
    gap: 0.5em;
    color: #383B58;
    font-size: 1.25rem;
  }
  @media all and (max-width:600px){
    font-size: 0.85rem;
  }
`;
const StyledFlexRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
const StyledFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #383B58;
  .calification-text{
    font-weight: 700;
    padding-top: 0.7em;
    margin-left:-50px;
  }
  &.calification-container {
    align-items: end;
  
  }
  p span {
    color: #FFFFFF;
    background-color: #383B58;
    padding: 0.3em 0.6em;
    margin-bottom: 1em;
    border-radius: 5px;
  }
`;
const StyledFlexColumnContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  color: #383B58;
 
  .calification-text{
    font-weight: 700;
    padding-top: 0.7em;
    margin-left:-50px;
    
  }
  &.calification-container {
    align-items: end;
  }
  p span {
    color: #FFFFFF;
    background-color: #383B58;
    padding: 0.3em 0.6em;
    margin-bottom: 1em;
    border-radius: 5px;
  }
`;
export default function HotelCard({hotel,functionClick}) {
  return(
  <StyledCard>
    <StyledContainer>
      <LazyLoadImage  className='lazyLoad'   width="100%"
  height="100%"  src={hotel.images?hotel.images[0].urlImage:""} alt="" />
    </StyledContainer>
    <StyledContainer className='info-div'>
      <StyledFlexRowContainer>
        {/* categia y estrellas */}
        <StyledFlexColumnContainer3>
          <StyledRow>
            <p className='category-text'>{hotel.category.title.toUpperCase()}</p>
            <Rating ratingValue={parseInt(hotel.rating)*10} readonly={true} allowHover={false} fillColor={'#1DBEB4'} />
          </StyledRow>
          <h3>{hotel.name}</h3>
        </StyledFlexColumnContainer3>
        {/* calificacion */}
        <StyledFlexColumnContainer className='calification-container'>
          <p><span>{hotel.rating}</span></p>
          {hotel.rating>=9?<p className='calification-text'>{'Excelente'}</p>:hotel.rating>=7?<p className='calification-text'>{'Muy bueno'}</p>:hotel.rating>=5?<p className='calification-text'>{'Bueno'}</p>:<p className='calification-text'>{'Regular'}</p>}
        </StyledFlexColumnContainer>
      </StyledFlexRowContainer>
      {/* distancia e iconos */}
      <StyledFlexColumnContainer>
        <StyledRow>
          <FaMapMarkerAlt />
          <p>{hotel.location}</p>
          {/* <span className='link'>MOSTRAR EN EL MAPA</span> */}
        </StyledRow>
        <StyledRow className='icon-row-container'>
        {hotel.features.map(feature=>
    feature.id===1?<GiCookingPot></GiCookingPot>
    :feature.id===2?<IoIosTv></IoIosTv>
    :feature.id===3?<AiFillCar></AiFillCar>
    :feature.id===4?<MdPool></MdPool>
    :feature.id===5?<BsSnow></BsSnow>
    :feature.id===6?<AiOutlineWifi></AiOutlineWifi>
    :feature.id===7? <MdPets></MdPets>
    :feature.id===8? <FaCocktail></FaCocktail>
    :feature.id===9? <FaCoffee></FaCoffee>
    :feature.id===10? <FaUtensils></FaUtensils>
    :feature.id===11? <FaVideo></FaVideo>
    :feature.id===12? <FaHandsWash></FaHandsWash>

    :"")
    }
        </StyledRow>
      </StyledFlexColumnContainer>
      {/* description y boton */}
        <p>{hotel.description.substring(0,90)}<span className='link' >...más...</span></p>
        <div onClick={()=>functionClick(hotel.id)}><Button width="100%" text="ver mas" color="#FFFFFF" backgroundColor="#1DBEB4" /></div>
    </StyledContainer>
  </StyledCard>
  );
}

