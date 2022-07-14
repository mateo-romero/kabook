// import data from '../json/categories.json';
import styled from "styled-components";
import CardCategories from "./CardCategories";
import { fetchUtil } from "../utils/fetchUtil";
import React, { useEffect, useState } from "react";
import spinner2 from "../images/spinner.gif";
import { Link } from "react-router-dom";

const StyledSlide = styled.div`
  display: flex;
  margin-left: 2.93vw;
  margin-right: 2.93vw;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  flex-wrap: wrap;
  text-aling: center;
  @media all and (max-width: 1400px) {
    @media (min-width: 900px) {
      justify-content: space-around;
    }
  }

  @media all and (max-width: 900px) {
    margin-left: 3.9vw;
    margin-right: 3.9vw;
  }
  @media all and (max-width: 740px) {
    justify-content: space-around;
    text-align: center;
  }
  .spinnerr {
    text-aling: center;
    margin-left: 40%;
  }
`;
const StyledH2 = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: #383b58;
  margin-bottom: 2rem;
  margin-top: 35px;
  margin-left: 2.93vw;
  @media all and (max-width: 900px) {
    margin-left: 3.9vw;
  }
  @media all and (max-width: 740px) {
    text-align: center;
  } ;
`;
export default function Categories() {
  const [data, setData] = useState([]);

  let api = fetchUtil();
  let url = "https://kahoot12.herokuapp.com/categories";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.error) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, [url]);
  return (
    <>
      <StyledH2>Buscar por tipo de alojamiento</StyledH2>

      <StyledSlide>
        {data.map((category) => (
          <Link
            to={`categoria/${category.id}`}
            key={category.id}
            style={{ textDecoration: "none" }}
          >
            <CardCategories
              img={category.urlImage}
              key={category.id}
              category={category.title}
              amount={category.productsCount}
            />
          </Link>
        ))}
      </StyledSlide>
      {data.length === 0 ? (
        <>
          <img className="spinnerr2" src={spinner2} alt="" />
        </>
      ) : (
        ""
      )}
    </>
  );
}
