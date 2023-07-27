import React, { useState } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../Styles/Register.css";
import HeaderImg from "../img/header-img.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Ad:",
      firstName,
      "Soyad:",
      lastName,
      "Email:",
      email,
      "Şifre:",
      password
    );
  };
  return (
    <Container>
      <Image src={HeaderImg} width="100%" />
      <div className="register-header text-center mt-4 mb-4">HESAP OLUŞTUR</div>
      <div className="justify-content-center row">
        <Col lg={4} sm={12}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} sm={12}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Adınız :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adınızı giriniz"
                    value={firstName}
                    onChange={handleChangeFirstName}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} sm={12}>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Soyadınız :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Soyadınızı giriniz"
                    value={lastName}
                    onChange={handleChangeLastName}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Mail Adresiniz :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Mail adresinizi giriniz"
                value={email}
                onChange={handleChangeEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Şifreniz :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifre oluşturunuz"
                value={password}
                onChange={handleChangePassword}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Row>
              <Button className="submit-btn mt-4 mb-4 " type="submit">
                Hesap Oluştur
              </Button>
            </Row>
          </Form>
        </Col>
      </div>
    </Container>
  );
};

export default Register;
