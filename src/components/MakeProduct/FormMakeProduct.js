import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CalendarProduct from "./../Product/CalendarProduct";
import Button from "./../Button";
import { GiCookingPot } from "react-icons/gi";
import { IoIosTv } from "react-icons/io";
import { BsSnow } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { MdPool } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import swal from "sweetalert";
import { fetchUtil } from "./../../utils/fetchUtil";
const StyledDescriptionTitle = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: #383b58;
  padding-top: 40px;
  height: auto;
  margin-bottom: 30px;
`;
const StyledContainer = styled.div`
  padding-left: 3.4vw;
  background-color: rgba(0, 0, 0, 0.07);
  @media all and (max-width: 900px) {
    padding-left: 4.5vw;
  }
  @media all and (max-width: 600px) {
    padding-left: 3.4vw;
  }
  overflow-y: auto !important;
  height: 100%;
  height: calc(100vh - 228px);
  padding-bottom: 100px;
`; //STYLES
const StyledLabel = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383b58;
  margin-bottom: 10px;
`;
const StyledLabel22 = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #383b58;
`;
const StyledLabel3 = styled.label`
  display: block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
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
  background-color: rgba(0, 0, 0, 0.07);
  outline-color: #1dbeb4;

  width: 90%;
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
const StyledInput2 = styled.input`
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
  background-color: rgba(0, 0, 0, 0.07);
  outline-color: #1dbeb4;
  width: 70%;
  height: 40px;
  @media all and (max-width: 900px) {
    width: 100%;
    height: 40px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
    height: 40px;
  }
`;

const StyledDivName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 900px) {
    flex-direction: column;
  }
  .margin-right-form-sing-up {
    margin-right: 18px;
  }
  div {
    width: 100%;
  }
`;
const StyledDivName2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  div {
    margin-left: 58px;
  }
`;
const StyleForm = styled.form`
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: white;
  width: 90%;
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media all and (max-width: 800px) {
    width: 85%;
  }
  @media all and (max-width: 600px) {
    width: 80%;
  }
  textarea {
    width: 90%;
    min-width: 90%;
    max-width: 90%;
    min-height: 70px;
    margin-bottom: 10px;
    padding: 20px;
    outline-color: #1dbeb4;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.05);
  }
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

const StyledSelect = styled.select`
  width: 500px;
  padding-left: 20px;
  height: 40px;
  font-size: 16px;
  color: #383b58;
  border-color: rgba(0, 0, 0, 0.2);
  outline: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    outline: rgba(0, 0, 0, 0.1);
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
const StyledSelect22 = styled.select`
  width: 90%;
  padding-left: 20px;
  height: 40px;
  font-size: 16px;
  color: #383b58;
  background-color: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  outline: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    outline: rgba(0, 0, 0, 0.1);
  }
  @media all and (max-width: 900px) {
    margin-bottom: 15px;
    margin-top: 10px;
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
const StyledOption = styled.option`
  width: 500px;
  padding-left: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #383b58;
  border-color: #383b58;
  outline: #383b58;
  &:focus {
    border-color: #383b58;
    outline: #383b58;
  }
  @media all and (max-width: 600px) {
    padding-left: 5px;
    width: 155px;
  }
`;
const StyledMore = styled.div`
  background: #1dbeb4;
  color: white;
  width: 35px;
  height: 35px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const StyledButton = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  width: 30%;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin-bottom: 10px;
  @media all and (max-width: 700px) {
    width: 90%;
  }
`;
const StyledContainerPolitics = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default function FormMakeProduct({ product, jwt }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [direction, setDirection] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [directionLatitud, setDirectionLatitud] = useState("");
  const [directionLongitud, setDirectionLongitud] = useState("");

  const [description3, setDescription3] = useState("");

  const [urlImage, setUrlImage] = useState("https://");
  const [atributeSelect, setAtributeSelect] = useState("Cocina");
  const [categorySelect, setCategorySelect] = useState("Hotel");
  const [citySelect, setCitySelect] = useState("Córdoba");

  let validateName = useRef();
  let validateLastName = useRef();
  let validateEmail = useRef();
  let validateCity = useRef();
  let validateDescription = useRef();
  let atributes = useRef();
  let images = useRef();
  let validatedirectionLatitud = useRef();
  let validatedirectionLongitud = useRef();
  let form = useRef();
  useEffect(() => {
    pedro();
  });
  const pedro = () => {
    let cruz = document.querySelectorAll(".menos");

    cruz.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.target.parentNode.style.marginBottom = "0px";
        e.target.parentNode.innerHTML = "";
      });
    });
  };
  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/products/save";
  useEffect(() => {
    if (citySelect.includes("Córdoba")) {
      setCity("1");
    } else if (citySelect.includes("Bariloche")) {
      setCity("2");
    } else if (citySelect.includes("CABA")) {
      setCity("3");
    } else if (citySelect.includes("Mendoza")) {
      setCity("4");
    } else if (citySelect.includes("Rosario")) {
      setCity("5");
    }
  }, [citySelect]);
  useEffect(() => {
    if (categorySelect.includes("Hotel")) {
      setCategory("1");
    } else if (categorySelect.includes("Hostel")) {
      setCategory("2");
    } else if (categorySelect.includes("Depa")) {
      setCategory("3");
    } else if (categorySelect.includes("Break")) {
      setCategory("4");
    }
  }, [categorySelect]);
  const validator = (e) => {
    e.preventDefault();
    let agregar = document.querySelectorAll("#zuliban1");
    let atributesArray = [];
    agregar.forEach((element) => {
      atributesArray.push(element.value);
    });
    let newAtributesArray = [];
    atributesArray.forEach((element) => {
      console.log(element);
      if (element.includes("Cocin")) {
        newAtributesArray.push(1);
      } else if (element.includes("Tele")) {
        newAtributesArray.push(2);
      } else if (element.includes("Esta")) {
        newAtributesArray.push(3);
      } else if (element.includes("Pile")) {
        newAtributesArray.push(4);
      } else if (element.includes("Aire")) {
        newAtributesArray.push(5);
      } else if (element.includes("Wif")) {
        newAtributesArray.push(6);
      } else if (element.includes("Apt")) {
        newAtributesArray.push(7);
      } else if (element.includes("Bar")) {
        newAtributesArray.push(8);
      } else if (element.includes("Desayuno")) {
        newAtributesArray.push(9);
      } else if (element.includes("Restaurante")) {
        newAtributesArray.push(10);
      } else if (element.includes("Seguridad 24 horas")) {
        newAtributesArray.push(11);
      } else if (element.includes("Servicio")) {
        newAtributesArray.push(12);
      }
    });

    let imagenes = document.querySelectorAll(".zull");
    let imagenesArray = [];
    imagenes.forEach((element) => {
      imagenesArray.push(element.value);
    });
    let objectf = (urlImage) => {
      let object = {
        titleImage: "Primer Imagen",
        descriptionImage: "borrame",
        urlImage: urlImage,
      };
      return object;
    };
    let arrayObject = [];
    imagenesArray.forEach((element) => {
      arrayObject.push(objectf(element));
    });

    swal({
      title: "Estas seguro de cargar producto?",
      text: "Cargar un producto en Kabook",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let normalizar = {
          name: name,
          policies: [
            { title: "Normas de la casa", description: description1 },
            { title: "Salud y Seguridad", description: description2 },
            { title: "Politica de cancelación", description: description3 },
          ],
          location: direction,
          isActive: true,
          features: [],
          rating: 9,
          latitude: directionLatitud,
          longitude: directionLongitud,
          description: description,
          images: arrayObject,
          cityId: city,
          categoryId: category,
          featuresIds: newAtributesArray,
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
            console.log(normalizar);
            console.log(res);
            if (!res.err) {
              swal("Se ha creado correctamente", {
                icon: "success",
              });
            } else {
              swal("Intentalo de nuevo");
            }
          });
      } else {
        swal("Intentalo de nuevo");
      }
    });
  };

  const handleClickAtributes = () => {
    atributes.current.innerHTML += `<div class="divImage"><input id="zuliban1" value=${atributeSelect} class="selectTake" type="text"/><div class="menos">x</div></div>`;
    pedro();
  };
  const handleClickImages = () => {
    images.current.style.width = "100%";

    images.current.innerHTML += `<div class="divImage"><input id="zuliban" class="zull" value=${urlImage} class="input2" type="text"/><div class="menos">x</div></div>`;
    setUrlImage("https://");
    pedro();
  };

  return (
    <>
      <StyledContainer>
        <StyledDescriptionTitle>Crear Propiedad</StyledDescriptionTitle>

        <StyleForm ref={form} onSubmit={validator}>
          <StyledDivName>
            <div className="margin-right-form-sing-up">
              <StyledLabel htmlFor="name">Nombre de la propiedad</StyledLabel>
              <StyledInput
                required
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
              <StyledLabel22 htmlFor="category">Categoria</StyledLabel22>

              <StyledSelect22
                onChange={(e) => {
                  setCategorySelect(e.target.value);
                }}
              >
                <StyledOption>Hotel</StyledOption>

                <StyledOption>Hostels</StyledOption>
                <StyledOption>Break and Breakfast</StyledOption>
                <StyledOption>Departamentos</StyledOption>
              </StyledSelect22>
            </div>
          </StyledDivName>
          <StyledDivName>
            <div className="margin-right-form-sing-up">
              <StyledLabel htmlFor="direction">Dirección</StyledLabel>
              <StyledInput
                required
                type="text"
                id="direction"
                name="direction"
                value={direction}
                onChange={(e) => {
                  setDirection(e.target.value);
                }}
              />
              <StylePwrong ref={validateEmail} style={{ display: "none" }}>
                Campo obligatorio
              </StylePwrong>
            </div>
            <div>
              <StyledLabel22 htmlFor="city">Ciudad</StyledLabel22>

              <StyledSelect22
                value={citySelect}
                onChange={(e) => {
                  setCitySelect(e.target.value);
                }}
              >
                <StyledOption>Córdoba</StyledOption>

                <StyledOption>Bariloche</StyledOption>
                <StyledOption>CABA</StyledOption>
                <StyledOption>Mendoza</StyledOption>
                <StyledOption>Rosario</StyledOption>
              </StyledSelect22>
            </div>
          </StyledDivName>
          <StyledDivName>
            <div className="margin-right-form-sing-up">
              <StyledLabel htmlFor="directionLatitud">
                Latitud (Coordenada)
              </StyledLabel>
              <StyledInput
                type="text"
                id="directionLatitud"
                name="directionLatitud"
                value={directionLatitud}
                onChange={(e) => {
                  setDirectionLatitud(e.target.value);
                }}
              />
              <StylePwrong
                ref={validatedirectionLatitud}
                style={{ display: "none" }}
              >
                Campo obligatorio
              </StylePwrong>
            </div>
            <div>
              <StyledLabel htmlFor="directionLongitud">
                Longitud (Coordenada)
              </StyledLabel>
              <StyledInput
                type="text"
                id="directionLongitud"
                name="directionLongitud"
                value={directionLongitud}
                onChange={(e) => {
                  setDirectionLongitud(e.target.value);
                }}
              />
              <StylePwrong
                ref={validatedirectionLongitud}
                style={{ display: "none" }}
              >
                Campo obligatorio
              </StylePwrong>
            </div>
          </StyledDivName>
          <StyledLabel htmlFor="description">Descripción</StyledLabel>
          <textarea
            id="description"
            name="description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <StylePwrong ref={validateDescription} style={{ display: "none" }}>
            Campo obligatorio
          </StylePwrong>
          <StyledDescriptionTitle>Agregar atributos</StyledDescriptionTitle>
          <div ref={atributes}></div>
          <StyledDivName2>
            <StyledSelect
              value={atributeSelect}
              onChange={(e) => {
                setAtributeSelect(e.target.value);
              }}
            >
              <StyledOption>Cocina</StyledOption>

              <StyledOption>Televisión</StyledOption>
              <StyledOption>Estacionamiento gratuito</StyledOption>
              <StyledOption>Pileta</StyledOption>
              <StyledOption>Aire acondicionado</StyledOption>
              <StyledOption>Wifi</StyledOption>
              <StyledOption>Apto mascotas</StyledOption>
              <StyledOption>Bar</StyledOption>
              <StyledOption>Desayuno</StyledOption>
              <StyledOption>Restaurante</StyledOption>
              <StyledOption>Seguridad 24 horas</StyledOption>
              <StyledOption>Servicio de limpieza diario</StyledOption>
            </StyledSelect>
            <StyledMore onClick={handleClickAtributes}>+</StyledMore>
          </StyledDivName2>

          <StyledDescriptionTitle>
            Políticas del producto
          </StyledDescriptionTitle>
          <StyledContainerPolitics>
            <StyledCard>
              <StyledLabel3>Normas de la casa</StyledLabel3>
              <StyledLabel htmlFor="Norma">Descripción</StyledLabel>
              <textarea
                id="description22"
                name="description"
                value={description1}
                onChange={(e) => {
                  setDescription1(e.target.value);
                }}
              />
            </StyledCard>
            <StyledCard>
              <StyledLabel3>Salud y Seguridad</StyledLabel3>
              <StyledLabel htmlFor="Salud">Descripción</StyledLabel>
              <textarea
                id="description22"
                name="description"
                value={description2}
                onChange={(e) => {
                  setDescription2(e.target.value);
                }}
              />
            </StyledCard>
            <StyledCard>
              <StyledLabel3>Política de cancelación</StyledLabel3>
              <StyledLabel htmlFor="Politica">Descripción</StyledLabel>
              <textarea
                id="description22"
                name="description"
                value={description3}
                onChange={(e) => {
                  setDescription3(e.target.value);
                }}
              />
            </StyledCard>
          </StyledContainerPolitics>

          <StyledDescriptionTitle>Cargar imágenes</StyledDescriptionTitle>
          <div ref={images}></div>
          <StyledDivName2>
            <StyledInput2
              id="zuliban"
              placeholder="insertar https://"
              type="text"
              name="urlImage"
              value={urlImage}
              onChange={(e) => {
                setUrlImage(e.target.value);
              }}
            />

            <StyledMore onClick={handleClickImages}>+</StyledMore>
          </StyledDivName2>

          <StyledButton>
            <Button
              color="white"
              width="30%"
              backgroundColor="#1DBEB4"
              text="Crear"
            ></Button>
          </StyledButton>
        </StyleForm>
      </StyledContainer>
    </>
  );
}
