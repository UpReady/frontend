import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../Styles/Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import axios from "axios";

const RegisterJobSeeker = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kvkk, setKvkk] = useState("");
  const [validated, setValidated] = useState(false);
  const apiURL = "http://localhost:3001";

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
  const handleChangeKvkk = (e) => {
    setKvkk(e.target.value);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    e.preventDefault();
    console.log(
      "Ad:",
      firstName,
      "Soyad:",
      lastName,
      "Email:",
      email,
      "Şifre:",
      password,
      "Kvkk Durumu:",
      kvkk
    );
    fetch(`${apiURL}/auth/register`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("sessionToken", data.token);
      }).catch(error => {
        console.error('Hata:', error);
      });
  };
  return (
    <Container fluid>
        <div className="mt-5 mb-5 row justify-content-center">
        {/* <Col lg={4} sm={12}>
          <Row>
            <Col lg={6} sm={6} xs={6}>
            <a href="/isveren-hesabi-olustur">
              <div className="nonselected-tab text-center pt-lg-3 pb-lg-3">
                İşveren
              </div>
              </a>
            </Col>
            <Col lg={6} sm={6} xs={6}>
            <a href="/is-arayan-hesabi-olustur">
              <div className="selected-tab text-center pt-lg-3 pb-lg-3">
                İş Arayan
              </div>
              </a>
            </Col>
          </Row>
        </Col> */}
      </div>
      {/* <div className="register-header text-center mt-4 mb-4">İŞ ARAYAN HESABI OLUŞTUR</div> */}
      <div className="justify-content-center row">
        <Col lg={4} sm={12}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} sm={12}>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Adınız :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adınızı giriniz"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    required
                  />
                   <Form.Control.Feedback type="invalid">
                    Lütfen Adınızı Giriniz !
                  </Form.Control.Feedback>
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
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Lütfen Soyadınızı Giriniz !
                  </Form.Control.Feedback>
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
                placeholder="Şifre oluşturunuz"
                value={password}
                onChange={handleChangePassword}
                required
              />
               <Form.Control.Feedback type="invalid">
                Lütfen Parola Giriniz !
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formKvkk">
              <Form.Check
                type="checkbox"
                label="KVKK metnini okudum, onaylıyorum"
                value={kvkk}
                onChange={handleChangeKvkk}
                required
                feedbackType="invalid"
              />
            </Form.Group>

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

export default RegisterJobSeeker;
