import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
const StyledSelect = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1em;
  color: #545776;
  border: none;
  &:focus {
    outline: none;
  }
  & p {
    color: #545776;
    width: 100%;
    height: 100%;
    padding: 0.45em 0;
  }
`;
const StyledOptionsContainer = styled.div`
  z-index: 123123213;
  background: #ffffff;
  display: ${({ displayList }) => displayList};
  color: #545776;
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 3em;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding-bottom: 0.5em;
  @media all and (max-width: 600px) {
    width: 100%;
  }
  .important {
    position: relative;
    z-index: 213123;
  }
`;
const StyledOption = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  & div {
    display: flex;
    flex-direction: column;
    padding: 1.2em;
  }
  & div.city-info-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    z-index: -1;
  }
  & p {
    margin-left: 5px;
  }
  & div.icon-container {
    justify-content: center;
    align-items: center;
  }
  ::after {
    position: absolute;
    bottom: 0;
    left: 2.5%;
    content: "";
    width: 95%;
    height: 0.2em;
    border-radius: 0.5em;
    background: #1dbeb4;
  }
`;
export default function DropdownList({ icon, takeCity }) {
  const [displayList, setDisplayList] = useState("none");
  const selectRef = useRef();
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("¿A donde vamos?");

  useEffect(() => {
    /* Funcion para obtener las ciudades de la api */
    const getCities = async () => {
      let response = await fetch("https://kahoot12.herokuapp.com/cities");
      response = await response.json();
      setData(response);
    };
    getCities();
    /* Al hacer click afuera de la lista se oculta el componente */
    const closeDropdown = (e) => {
      if (e.path[0] !== selectRef.current) {
        setDisplayList("none");
      }
    };
    /* Se agrega el listener al body */
    document.body.addEventListener("click", closeDropdown);
    /* Al desmontar el componente se quita el listener */
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  /* Funcion que muestra y oculta la lista */
  const toggleList = () => {
    displayList === "none" ? setDisplayList("initial") : setDisplayList("none");
  };

  const handleSelect = (e) => {
    setLocation(e.target.textContent);
    takeCity(e.target.textContent);
  };
  return (
    <>
      <StyledSelect onClick={() => toggleList()}>
        <p ref={selectRef}>{location}</p>
      </StyledSelect>
      <StyledOptionsContainer displayList={displayList}>
        {data.map((city, i) => (
          <div key={i} className="important" onClick={handleSelect}>
            <StyledOption key={i}>
              <div className="icon-container">{icon}</div>
              <div className="city-info-container">
                <h4>{city.name + ", "}</h4>
                <p>{" " + city.country}</p>
              </div>
            </StyledOption>
          </div>
        ))}
      </StyledOptionsContainer>
    </>
  );
}
