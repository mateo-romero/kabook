import React, { useState, useRef } from "react";
import Header from "./../components/Header";
import Button from "../components/Button";
import styled from "styled-components";
import Footer from "./../components/Footer";
import { useNavigate } from "react-router-dom";
import { fetchUtil } from "../utils/fetchUtil";
import swal from "sweetalert";
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
  margin-top: 10vh;
  @media all and (max-width: 900px) {
    margin-top: 10vh;
    margin-left: 27.5vw;
    margin-right: 27.5vw;
  }
  @media all and (max-width: 600px) {
    margin-top: 10vh;
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
  margin-top: -5px;
  margin-bottom: 10px;
`;
const StylePgo = styled.span`
  color: blue;
  cursor: pointer;
`;
const StyledContainer = styled.div`
  background: rgba(196, 196, 196, 0.1);
  position: absolute;
  overflow-y: auto !important;
  height: calc(100% - 148px);
  transition: margin-left 1s ease;
  margin-left: ${({ marginLeftUp }) => marginLeftUp || "-1"};
  width: 100%;
  z-index: ${({ zIndex }) => zIndex || "-1"};
`;
function SingUp({ zIndex, signIn, marginLeftUp, jwt, takeJwt, logged }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [repeatPassword, setRepeatPasword] = useState("");
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);

  let firstPassword = useRef();
  let validateName = useRef();
  let validateLastName = useRef();
  let validateEmail = useRef();
  let validateRepeatPassword = useRef();
  let form = useRef();
  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/sign-in";

  const validator = (e) => {
    e.preventDefault();
    let regrets =
      /^([a-zA-Z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/g;
    let trueEmail = regrets.test(email);

    if (name === "") {
      validateName.current.style.display = "block";
      validateName.current.textContent = "Este campo es obligatorio";
    } else {
      validateName.current.style.display = "none";
    }
    if (lastName === "") {
      validateLastName.current.style.display = "block";
      validateLastName.current.textContent = "Este campo es obligatorio";
    } else {
      validateLastName.current.style.display = "none";
    }
    if (!trueEmail) {
      validateEmail.current.style.display = "block";
      validateEmail.current.textContent = "Ingrese un email correcto";
    } else {
      validateEmail.current.style.display = "none";
    }
    if (
      name !== "" &&
      lastName !== "" &&
      trueEmail &&
      password === repeatPassword &&
      password.length >= 8
    ) {
      let object = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        cityId: "1",
      };
      setLoading(true);

      api
        .post(url, {
          body: object,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (!res.error) {
            if (res.jwt) {
              setLoading(false);
              takeJwt(res);
              setData(res);
              swal(
                "Tu registro ha sido exitoso",
                "Busta tu alojamiento acorde de te tus preferencias",
                "success"
              );
              logged();
            } else if (res.status == 409) {
              setLoading(false);
              swal(
                "Tu email ya se encuentra registrado",
                "Si es tu email ve a iniciar sesión sino ingrese uno correcto",
                "error"
              );
            } else {
              setLoading(false);
              setData(null);
            }
          }
        });
    }
    if (password.length < 8) {
      validateRepeatPassword.current.style.display = "block";
      validateRepeatPassword.current.style.marginTop = "-40px";
      validateRepeatPassword.current.textContent =
        "La contreña debe ser mayor o igual a 8 caracteres";
    } else if ((repeatPassword === "") & (password === "")) {
      validateRepeatPassword.current.style.display = "block";
      validateRepeatPassword.current.style.marginTop = "-40px";
      validateRepeatPassword.current.textContent =
        "Estos campos son obligatorios";
    } else if (password !== repeatPassword) {
      validateRepeatPassword.current.style.display = "block";
      validateRepeatPassword.current.style.marginTop = "-40px";
      validateRepeatPassword.current.textContent =
        "Las contraseñas no son iguales";
    } else {
      validateRepeatPassword.current.style.display = "none";
    }
  };

  return (
    <>
      <StyledContainer zIndex={zIndex} marginLeftUp={marginLeftUp}>
        <StyleForm ref={form} onSubmit={validator}>
          <StyledH2>Crear Cuenta</StyledH2>
          <StyledDivName>
            <div className="margin-right-form-sing-up">
              <StyledLabel htmlFor="name">Nombre</StyledLabel>
              <StyledInput
                width="15vw"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <StylePwrong ref={validateName} style={{ display: "none" }}>
                Campo obligatorio
              </StylePwrong>
            </div>
            <div>
              <StyledLabel htmlFor="lastName">Apellido</StyledLabel>
              <StyledInput
                width="15vw"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <StylePwrong ref={validateLastName} style={{ display: "none" }}>
                Campo obligatorio
              </StylePwrong>
            </div>
          </StyledDivName>
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
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPasword(e.target.value);
              }}
            />
            <StylePwrong ref={firstPassword} style={{ display: "none" }}>
              Campo obligatorio
            </StylePwrong>
          </div>
          <div>
            <StyledLabel htmlFor="repeatPassword">
              Confirmar contraseña
            </StyledLabel>
            <StyledInput
              className="margin-bottom-last-input"
              type="password"
              id="repeatPassword "
              name="repeatPassword"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPasword(e.target.value);
              }}
            />
            <StylePwrong
              ref={validateRepeatPassword}
              style={{ display: "none" }}
            >
              Campo obligatorio
            </StylePwrong>
          </div>
          {loading ? (
            <img className="spinnerr3" src={spinner2} alt="" />
          ) : (
            <>
              <Button
                text="Crear cuenta"
                color="white"
                backgroundColor="#1DBEB4"
              >
                Crear Cuenta
              </Button>
              <StyleP>
                ¿Ya tienes una cuenta?{" "}
                <StylePgo onClick={signIn}>Iniciar sesión</StylePgo>
              </StyleP>
            </>
          )}
        </StyleForm>
      </StyledContainer>
    </>
  );
}

export default SingUp;
