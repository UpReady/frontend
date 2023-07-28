import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "../Styles/MainPage.css";
import SSSImg from '../img/main-sss.png';
function SSSMain() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <Container fluid>
      {width >= 1024 && (
        <>
          <div className="blog-header text-center">
            SIKÇA SORULAN SORULAR
          </div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={SSSImg} width="90%" />
          </div>
        </>
      )}
      {width <= 450 && (
        <>
          <div className="blog-header-mobile ">SIKÇA SORULAN SORULAR</div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={SSSImg} width="100%" />
          </div>
        </>
      )}
    </Container>
  );
}

export default SSSMain;
