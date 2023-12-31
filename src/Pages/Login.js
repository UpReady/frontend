import React, { useState, useEffect } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../Styles/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState("");
  const apiURL = "http://localhost:3001";

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

    fetch(`${apiURL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("sessionToken", data.token);
        console.log("Giriş başarılı:", data);
        //successinde request atıp isLogin kontrolü yapsın
        fetch(`${apiURL}/auth/isLogin`, {
          method: "GET",
          credentials: "include",
        })
          .then((response) => response.json())
          .then((dataisLogin) => {
            console.log("get -> isLogin durumu :", dataisLogin);
          })
          .catch((error) => {
            console.error("Hata:", error);
          });
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  };

  return (
    <Container fluid>
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
          <a href="/is-arayan-hesabi-olustur">
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
