import React, { useState, useRef, useEffect } from "react";
import Header from "./../components/Header";
import Button from "../components/Button";
import styled from "styled-components";
import Footer from "./../components/Footer";
import { useNavigate } from "react-router-dom";
import { fetchUtil } from "../utils/fetchUtil";
import spinner2 from "../images/spinner.gif";

//STYLES
const StyledLabel = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383b58;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  display: block;
  padding-left: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383b58;
  outline-color: #1dbeb4;
  width: ${({ width }) => width || "32vw"};
  height: ${({ height }) => height || "40px"};
  margin-bottom: 15px;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 40px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #1dbeb4;
  margin-bottom: 25px;
  @media all and (max-width: 600px) {
    margin-bottom: 10vh;
  }
`;
const StyledDivName = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 900px) {
    flex-direction: column;
  }
`;
const StyleForm = styled.form`
  margin-left: 13.8vw;
  margin-right: 13.8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  @media all and (max-width: 900px) {
    margin-top: 20vh;
    margin-left: 27.5vw;
    margin-right: 27.5vw;
  }
  @media all and (max-width: 600px) {
    margin-top: 12vh;
    margin-left: 13.8vw;
    margin-right: 13.8vw;
  }
`;
const StyleP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383b58;
  margin-top: 18px;
  margin-bottom: 18px;
`;
const StylePwrong = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: red;
  text-align: right;
  margin-top: -30px;
  margin-bottom: 30px;
`;
const StylePgo = styled.span`
  color: blue;
  cursor: pointer;
`;
const StyledContainer = styled.div`
  overflow-y: auto !important;
  height: calc(100% - 148px);
  background: rgba(196, 196, 196, 0.1);
  position: absolute;
  width: 100%;
  transition: margin-left 1s ease;
  overflow-y: visible;
  margin-left: ${({ marginLeftIn }) => marginLeftIn || "-1"};
  z-index: ${({ zIndex }) => zIndex || "-1"};
`;
function SingIn({ zIndex, signUp, marginLeftIn, logged, jwt, takeJwt, admin }) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  let firstPassword = useRef();
  let validateEmail = useRef();
  let form = useRef();
  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/login";

  const validator = (e) => {
    e.preventDefault();
    firstPassword.current.style.display = "none";
    setLoading(true);
    let object = { email: email, password: password };
    api
      .post(url, {
        body: object,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (!res.error) {
          if (res.jwt) {
            setLoading(false);
            setData(res);
            takeJwt(res);
            firstPassword.current.style.display = "none";
            if (res.userDTO) {
              if (res.userDTO.roleName === "ADMIN") {
                admin();
              } else {
                logged();
              }
            }

            setEmail("");
            setPasword("");
          } else {
            setLoading(false);

            setData(null);
            firstPassword.current.textContent =
              "Por favor vuelva a intentarlo, sus credenciales son inválidas";
            firstPassword.current.style.display = "block";
          }
        } else {
          setLoading(false);

          setData(null);
          firstPassword.current.textContent =
            "Por favor vuelva a intentarlo, sus credenciales son inválidas";
          firstPassword.current.style.display = "block";
        }
      });
  };
  return (
    <>
      <StyledContainer marginLeftIn={marginLeftIn} zIndex={zIndex}>
        <StyleForm ref={form} onSubmit={validator}>
          <StyledH2>Iniciar sesión</StyledH2>

          <StyledDivName></StyledDivName>
          <div>
            <StyledLabel htmlFor="email">Correo electrónico</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <StylePwrong ref={validateEmail} style={{ display: "none" }}>
              Campo obligatorio
            </StylePwrong>
          </div>
          <div>
            <StyledLabel htmlFor="password">Contraseña</StyledLabel>
            <StyledInput
              className="margin-bottom-last-input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPasword(e.target.value);
              }}
            />
            <StylePwrong ref={firstPassword} style={{ display: "none" }}>
              Algun dato ingresado es incorrecto
            </StylePwrong>
          </div>
          {loading ? (
            <img className="spinnerr3" src={spinner2} alt="" />
          ) : (
            <>
              <Button
                text="Iniciar sesión"
                color="white"
                backgroundColor="#1DBEB4"
              >
                Iniciar sesión
              </Button>
              <StyleP>
                ¿Ya tienes una cuenta?{" "}
                <StylePgo onClick={signUp}>Registrate</StylePgo>
              </StyleP>
            </>
          )}
        </StyleForm>
      </StyledContainer>
    </>
  );
}

export default SingIn;
