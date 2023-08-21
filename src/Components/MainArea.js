import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import MainImg from "../img/mp-img.jpg";
import "../Styles/MainPage.css";

function MainArea() {
  return (
    <Container>
      <div className="pb-lg-3 p-0">
        <Row>
          <Col lg={6} xs={12} sm={12}>
            <div className="main-first-text mt-lg-5 pt-lg-5 mx-lg-3">
            İster ofiste, ister nomad! İş bul, hazırlan, başvur, kazan!
            </div>
          </Col>
          <Col lg={6} xs={12} sm={12}>
            <div className="">
              <Image className="" src={MainImg} width="130%" />
            </div>
          </Col>
        </Row>{" "}
      </div>
    </Container>
  );
}

export default MainArea;
