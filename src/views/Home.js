import React, { useState, useRef, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styled from "styled-components";
import RecommendedSection from "../components/RecommendedSection";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";
const BigContainer = styled.div`
  margin: auto;
`;

function Home({
  kabookLogged,
  isLoged,
  notLoged,
  signInKabook,
  signUpKabook,
  jwt,
  takeJwt,
  isAdmin,
}) {
  const navigatee = useNavigate();
  const [filterHome, setFilterHome] = useState(
    "https://kahoot12.herokuapp.com/products/productsDisordered"
  );
  const [city, setCity] = useState("1");
  const [bodyGet, setBodyGet] = useState(null);
  const [nameCity, setNameCity] = useState("");
  const [nameCityClick, setNameCityClick] = useState("");
  const [zIndex, setzIndex] = useState("-1");
  const [marginLeftIn, setMarginLeftIn] = useState("0%");
  const [marginLeftUp, setMarginLeftUp] = useState("0%");
  const [Date1, setDate1] = useState("");
  const [Date2, setDate2] = useState("");

  const formatDate = (date) => {
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let formatted_date = date.getFullYear() + "-" + month + "-" + day;
    return formatted_date;
  };
  let contain = useRef();
  let main = useRef();
  const signIn = () => {
    setMarginLeftUp("100%");

    setMarginLeftIn("0%");
    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh) ";
    signInKabook();
  };
  const home = () => {
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";

    contain.current.style.transform = "translateY(0vh) ";
    notLoged();
  };

  const signUp = () => {
    setMarginLeftIn("100%");
    setMarginLeftUp("0%");

    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh)";
    signUpKabook();
  };
  const logged = () => {
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";

    contain.current.style.transform = "translateY(0vh)";
    isLoged();
  };
  const admin = () => {
    isAdmin();
    navigatee("/makeLodging");
  };

  const takeCity = (e) => {
    let word = e;
    if (word.includes("Córdoba")) {
      setCity("1");
    } else if (word.includes("Bariloche")) {
      setCity("2");
    } else if (word.includes("CABA")) {
      setCity("3");
    } else if (word.includes("Mendoza")) {
      setCity("4");
    } else if (word.includes("Rosario")) {
      setCity("5");
    }
    setNameCity(word);
  };

  const takeDate = (date1, date2) => {
    if (date2 != null) {
      setDate1(formatDate(date1));
      setDate2(formatDate(date2));
    }
  };
  const handleCity = () => {
    setNameCityClick(nameCity);
    setBodyGet({
      cityId: city,
      dateBookingCheckIn: Date1,
      dateBookingCheckOut: Date2,
    });
    setFilterHome("https://kahoot12.herokuapp.com/products/by-city-and-date");
  };
  return (
    <>
      <Header
        jwt={jwt}
        logged={logged}
        logging={kabookLogged}
        home={home}
        signUp={signUp}
        signIn={signIn}
      />

      <main ref={main}>
        <SignIn
          admin={admin}
          jwt={jwt}
          takeJwt={takeJwt}
          zIndex={zIndex}
          logged={logged}
          marginLeftIn={marginLeftIn}
          signUp={signUp}
        ></SignIn>
        <SignUp
          isAdmin={isAdmin}
          logged={logged}
          jwt={jwt}
          takeJwt={takeJwt}
          zIndex={zIndex}
          marginLeftUp={marginLeftUp}
          signIn={signIn}
        ></SignUp>
        <div className="divName" ref={contain}>
          <SearchBar
            takeDate={takeDate}
            takeCity={takeCity}
            handleCity={handleCity}
          />

          <BigContainer>
            <Categories></Categories>
          </BigContainer>

          <RecommendedSection
            nameCity={nameCityClick}
            bodyGet={bodyGet}
            filterr={filterHome}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
