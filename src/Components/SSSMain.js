import React from "react";
import { useState, useEffect } from "react";
import { Image, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "../Styles/MainPage.css";
import SSSImg from "../img/main-sss.png";
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
          <div className="sss-main-header text-left mt-lg-4 pt-lg-4">
            Sıkça Sorulan Sorular
          </div>
          <div className=" pt-3 pb-4 ">
          <Row>
            <Col>
              <Image src={SSSImg} width="90%" />
            </Col>
            <Col>
              <div className="main-sss-p">
                UpReady ile ilgili merak ettiklerini uygulama ile ilgili daha
                detaylı bilgileri Sıkça Sorulan Sorular’da bulabilirsin.
              </div>
            </Col>
          </Row>
          </div>
        </>
      )}
      {width <= 450 && (
        <>
          <div className="blog-header-mobile ">Sıkça Sorulan Sorular</div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={SSSImg} width="100%" />
          </div>
        </>
      )}
    </Container>
  );
}

export default SSSMain;
