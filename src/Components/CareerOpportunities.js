import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "../Styles/MainPage.css";
import CareerImg from "../img/career.png";

function CareerOpportunities() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <Container fluid>
      {width >= 1024 && (
        <>
          <div className="header-career-opp text-center">
            Kariyer Fırsatları
          </div>
          <div className="career-bg-img pt-3 pb-4 text-center">
            <Image src={CareerImg} width="40%" />
          </div>
        </>
      )}
      {width <= 450 && (
        <>
          <div className="header-career-opp-mobile ">Kariyer Fırsatları</div>
          <div className="career-bg-img pt-3 pb-4 text-center">
            <Image src={CareerImg} width="100%" />
          </div>
        </>
      )}
    </Container>
  );
}

export default CareerOpportunities;
