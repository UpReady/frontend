import React, { useState } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../Styles/Login.css";
import HeaderImg from '../img/header-img.png';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    console.log("Email:", email, "Şifre:", password);
  };
  return (
    <Container  fluid>
      <Image src={HeaderImg} width="100%" height="50"/>
      {/* <div className="login-header text-center mt-4 mb-4">GİRİŞ YAP</div> */}
      <div className="justify-content-center row mt-5">
        <Col lg={4} sm={12}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Mail Adresiniz :</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={handleChangeEmail}
                required
              />
              <Form.Control.Feedback type="invalid">
                Lütfen Mail Adresinizi Giriniz !
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Şifreniz :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifrenizi giriniz"
                value={password}
                onChange={handleChangePassword}
                required
              />
              <Form.Control.Feedback type="invalid">
                Lütfen Parola Giriniz !
              </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Row>
              <Button className="submit-btn mt-4 mb-4 " type="submit">
                Giriş Yap
              </Button>
            </Row>
          </Form>
          <a href="/hesap-olustur">
            <div className="create-account text-right">
              Hesabınız yok mu? <b> Hesap Oluştur </b>
            </div>
          </a>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
