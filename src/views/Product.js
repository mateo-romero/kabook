import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import data2 from "./../json/product.json";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderProduct from "../components/Product/HeaderProduct";
import HeaderProductSecond from "../components/Product/HeaderProductSecond";
import ProductMain from "../components/Product/ProductMain";
import SignIn from "../views/SignIn.js";
import SignUp from "../views/SignUp";
import Description from "../components/Product/Description";
import { fetchUtil } from "../utils/fetchUtil";
import spinner2 from "../images/spinner.gif";
import { useNavigate } from "react-router-dom";

//STYLES

export default function Product({
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
  const navigatee = useNavigate();
  let main = useRef();
  let headerProduct = useRef();

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
    headerProduct.current.style.display = "none";
    setMarginLeftUp("100%");

    setMarginLeftIn("0%");
    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh)";
    signInKabook();
  };
  const home = () => {
    main.current.classList.add("main");

    headerProduct.current.style.display = "block";
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";

    contain.current.style.transform = "translateY(0vh)";
    notLoged();
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
        jwt={jwt}
        logged={logged}
        logging={kabookLogged}
        home={home}
        signUp={signUp}
        signIn={signIn}
      ></Header>

      <main className="main" ref={main}>
        {data.name ? (
          <div ref={headerProduct}>
            <HeaderProduct product={data}></HeaderProduct>
          </div>
        ) : (
          ""
        )}
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
          jwt={jwt}
          takeJwt={takeJwt}
          zIndex={zIndex}
          logged={logged}
          marginLeftUp={marginLeftUp}
          signIn={signIn}
        ></SignUp>
        {data.name ? (
          <div className="divProduct" ref={contain}>
            <HeaderProductSecond product={data}></HeaderProductSecond>
            <ProductMain product={data}></ProductMain>
            <Description product={data}></Description>
          </div>
        ) : (
          <img className="spinnerr2" src={spinner2} alt="" />
        )}
      </main>
      <Footer></Footer>
    </>
  );
}
