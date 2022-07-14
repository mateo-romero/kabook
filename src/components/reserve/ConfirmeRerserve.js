import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CalendarProduct from "./../Product/CalendarProduct";
import { Rating } from "react-simple-star-rating";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "./../Button";
import swal from "sweetalert";
import { fetchUtil } from "./../../utils/fetchUtil";
const StyledDescriptionTitle = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: #383b58;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
`;
const StyledContainer = styled.div`
  margin-right: 3.4vw;
  width: 550px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;

  @media all and (max-width: 900px) {
    margin-left: 20px;
  }
  @media all and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-right: 4.5px;
    padding-left: 0vw;
    width: 330px;
    margin-top: 50px;
  }
  button {
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media all and (max-width: 600px) {
      margin-left: 17px;
      width: 90%;
    }
  }
`;
const StyledRow = styled.div`
  display: flex;
  padding-left:20px;

  flex-direction:column;
  font-size: 0.9rem;
  h3{
    color:#383B58;
    font-size:22px;
    margin-top:5px;
    margin-bottom:5px;
  }
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
const StyledCategory = styled.p`
  padding-left: 20px;

  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #545776;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 30px;
`;
const StyledDate = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  margin-left: 20px;
  margin-right: 20px;
  border-top: solid 2px rgba(0, 0, 0, 0.2);
`;
const StyledPDate = styled.p`
  font-weight: bold;
  color: #383b58;
`;
const StyledPCheck = styled.p`
  font-weight: bold;
  color: #383b58;
`;
export default function ConfirmeRerserve({
  hotel,
  date1,
  date2,
  kabookLogged,
  signIn,
  jwt,
  hour,
}) {
  let api = fetchUtil();
  const navigate = useNavigate();
  let url =
    "https://kahoot12.herokuapp.com/bookings/product-booking/" + hotel.id;
  const handleClickReserve = () => {
    if (kabookLogged == "unlogged") {
      swal(
        "Necesitas estar logueado",
        "Para realizar una reserva necesitas estar logueado",
        "error"
      );
      signIn();
    } else if (date1 === "__/__/__" && date2 === "__/__/__") {
      swal(
        "Necesitas seleccionar una fecha",
        "Para realizar una reserva necesitas fecha de ingreso y egreso",
        "error"
      );
    } else {
      let normalizar = {
        dateBookingCheckIn: date1,
        dateBookingCheckOut: date2,
        productId: hotel.id,
        hourBookingCheckIn: hour,
        hourBookingCheckOut: "10:00",
        userEmail: jwt.userDTO.email,
      };

      api
        .post(url, {
          body: normalizar,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt.jwt,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(normalizar);
          if (!res.err) {
            swal(
              "Reserva confirmada",
              "fecha de ingreso: " + date1 + " fecha de egreso: " + date2,
              "success"
            );
            navigate("/");
          } else if (res.err.status == 409) {
            swal(
              "no se puede aplicar esta fecha",
              "La fecha no esta disponible",
              "error"
            );
          } else {
            swal("error", "error", "error");
          }
        });
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledDescriptionTitle>Detalles de la reserva</StyledDescriptionTitle>
        <StyledImg src={hotel.images ? hotel.images[0].urlImage : ""} />
        <StyledRow>
          <p className="category-text">
            {hotel.category ? hotel.category.title.toUpperCase() : ""}
          </p>
          <h3>{hotel.name}</h3>

          <Rating
            ratingValue={parseInt(hotel.rating) * 10}
            readonly={true}
            allowHover={false}
            fillColor={"#1DBEB4"}
          />
        </StyledRow>
        {hotel.city ? (
          <StyledCategory>
            {" "}
            <FaMapMarkerAlt className="paddingRight" />
            {hotel.location +
              " , " +
              hotel.city.name +
              ", " +
              hotel.city.country}
          </StyledCategory>
        ) : (
          ""
        )}
        <StyledDate>
          <StyledPCheck>Check in</StyledPCheck>
          <StyledPDate>{date1.toString()}</StyledPDate>
        </StyledDate>
        <StyledDate>
          <StyledPCheck>Check out</StyledPCheck>
          <StyledPDate>{date2.toString()}</StyledPDate>
        </StyledDate>

        <Button
          handleClickReserve={handleClickReserve}
          color="white"
          width="90%"
          backgroundColor="#1DBEB4"
          text="Confirmar reserva"
        ></Button>
      </StyledContainer>
    </>
  );
}
