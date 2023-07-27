import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import MainText from "../img/mp-text.svg";
import MainImg from "../img/mp-img.svg";
import "../Styles/MainPage.css";

function MainArea() {
  return (
    <Container fluid>
      <div className="line pb-lg-3">
        <Row>
          <Col lg={6} xs={12} sm={12}>
            <div>
              <Image src={MainText} width="100%" />
            </div>
            <div className="mt-lg-4 mb-lg-2">
              <Row>
                <Col xs={12} sm={12} lg={6}>
                  <Form.Control
                    className="mt-4"
                    type="text"
                    placeholder="Ara"
                  />
                </Col>
                <Col xs={12} sm={12} lg={4}>
                  <Form.Control
                    className="mt-4"
                    type="text"
                    placeholder="Şehir"
                  />
                </Col>
                <Col xs={12} sm={12} lg={2}>
                  <Row>
                    <Button className="main-src-btn mt-4">Ara</Button>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} xs={12} sm={12}>
            <div className="mt-lg-5">
              <Image className="mt-lg-5 pt-lg-5" src={MainImg} width="100%" />
            </div>
          </Col>
        </Row>{" "}
      </div>
    </Container>
  );
}

export default MainArea;
