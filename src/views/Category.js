import React, { useState, useEffect, useRef } from "react";
import HotelCard from "../components/HotelCard";
import styled from "styled-components";
import { fetchUtil } from "../utils/fetchUtil";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import data2 from "./../json/product.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderProduct from "../components/Product/HeaderProduct";
import HeaderProductSecond from "../components/Product/HeaderProductSecond";
import ProductMain from "../components/Product/ProductMain";
import SignIn from "../views/SignIn.js";
import SignUp from "../views/SignUp";
import Description from "../components/Product/Description";
import spinner2 from "../images/spinner.gif";

const StyledContainer = styled.div`
  padding: 1rem 0;
  & h2 {
    padding-left: 3rem;
    font-family: "roboto";
    font-size: 36px;
    color: #383b58;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  @media all and (max-width: 600px) {
    h2 {
      padding-left: 0;
      text-align: center;
    }
  }
`;
const StyledFlexContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 40px;
  margin-left: 2.93vw;
  margin-right: 2.93vw;
  justify-content: space-around;
`;
export default function Category({
  kabookLogged,
  isLoged,
  notLoged,
  signInKabook,
  signUpKabook,
  jwt,
  takeJwt,
  isAdmin,
}) {
  const [zIndex, setzIndex] = useState("-1");
  const [marginLeftIn, setMarginLeftIn] = useState("0%");
  const [marginLeftUp, setMarginLeftUp] = useState("0%");
  let contain = useRef();
  let main = useRef();
  const navigatee = useNavigate();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const { categoryId } = useParams();
  let apiConnector = fetchUtil;
  let productsByCategory = `https://kahoot12.herokuapp.com/products/category/${categoryId}`;
  let categoryEndpoint = `https://kahoot12.herokuapp.com/categories/${categoryId}`;

  useEffect(() => {
    apiConnector()
      .get(productsByCategory)
      .then((res) => {
        if (!res.err) {
          setData(res);
          // console.log(res);
        } else {
          setData(null);
        }
      });
    apiConnector()
      .get(categoryEndpoint)
      .then((res) => {
        if (!res.err) {
          setCategory(res);
          console.log(res);
        } else {
          setData(null);
        }
      });
  }, []);
  const signIn = () => {
    setMarginLeftUp("100%");

    setMarginLeftIn("0%");
    setzIndex("0");
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";
    contain.current.style.transform = "translateY(100vh)";
    signInKabook();
  };
  const home = () => {
    contain.current.style.zIndex = "1";
    contain.current.style.transition = "transform 1s ease";

    contain.current.style.transform = "translateY(0vh)";
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
  const goProduct = (id) => {
    navigatee("/lodging/" + id);
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
          jwt={jwt}
          takeJwt={takeJwt}
          zIndex={zIndex}
          logged={logged}
          marginLeftUp={marginLeftUp}
          signIn={signIn}
        ></SignUp>
        {data ? (
          <div className="divProduct" ref={contain}>
            {" "}
            <StyledContainer>
              <h2>{category ? category.title : ""}</h2>

              <StyledFlexContainer>
                {data.map((hotel) => (
                  <HotelCard
                    functionClick={goProduct}
                    key={hotel.id}
                    hotel={hotel}
                  />
                ))}
              </StyledFlexContainer>
              {data.length === 0 ? (
                <>
                  <img className="spinnerr2" src={spinner2} alt="" />
                </>
              ) : (
                ""
              )}

              {data.length === 0 ? (
                ""
              ) : (
                <StyledFlexContainer>
                  <Link to="/">
                    <Button
                      text="Volver"
                      color="#FFFFFF"
                      backgroundColor="#1DBEB4"
                    />
                  </Link>
                </StyledFlexContainer>
              )}
            </StyledContainer>{" "}
          </div>
        ) : (
          <img className="spinnerr2" src={spinner2} alt="" />
        )}
      </main>
      <Footer></Footer>
    </>
  );
}
