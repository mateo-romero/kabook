import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderProduct from "../components/Product/HeaderProduct";
import SignIn from "../views/SignIn.js";
import SignUp from "../views/SignUp";
import { fetchUtil } from "../utils/fetchUtil";
import spinner2 from "../images/spinner.gif";
import DescriptionReserve from "../components/reserve/DescriptionReserve";
import CointainReserve from "./../components/reserve/ContainReserve";
import HeaderMakeProduct from "../components/MakeProduct/HeaderMakeProduct";
import FormMakeProduct from "../components/MakeProduct/FormMakeProduct";
import { useNavigate } from "react-router-dom";

//STYLES

export default function MakeProduct({
  kabookLogged,
  isLoged,
  notLoged,
  signInKabook,
  signUpKabook,
  jwt,
  takeJwt,
  isAdmin,
}) {
  const params = useParams();

  const [zIndex, setzIndex] = useState("-1");
  const [marginLeftIn, setMarginLeftIn] = useState("0%");
  const [marginLeftUp, setMarginLeftUp] = useState("0%");
  let contain = useRef();
  const [data, setData] = useState([]);
  let headerProduct = useRef();
  const navigatee = useNavigate();
  let main = useRef();
  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/products/" + params.productId;

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.error) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, []);
  const signIn = () => {
    main.current.classList.remove("main");
    setMarginLeftUp("100%");
    headerProduct.current.style.display = "none";

    setMarginLeftIn("0%");
    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh)";
    signInKabook();
  };
  const home = () => {
    notLoged();
    navigatee("/");
  };

  const signUp = () => {
    main.current.classList.remove("main");
    headerProduct.current.style.display = "none";

    setMarginLeftIn("100%");
    setMarginLeftUp("0%");

    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh)";
    signUpKabook();
  };
  const logged = () => {
    main.current.classList.add("main");
    headerProduct.current.style.display = "block";
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";

    contain.current.style.transform = "translateY(0vh)";
    isLoged();
  };
  const admin = () => {
    isAdmin();
    navigatee("/makeLodging");
  };

  return (
    <>
      <Header
        admin={admin}
        jwt={jwt}
        logged={logged}
        logging={kabookLogged}
        home={home}
        signUp={signUp}
        signIn={signIn}
      ></Header>

      <main className="main" ref={main}>
        <div ref={headerProduct}>
          <HeaderMakeProduct></HeaderMakeProduct>
        </div>
        <FormMakeProduct jwt={jwt}></FormMakeProduct>
      </main>
      <Footer></Footer>
    </>
  );
}
