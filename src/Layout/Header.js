import React from "react";
import { Container, Nav, Navbar, Row, Col, Image } from "react-bootstrap";
import "../Styles/Header.css";
import Logo from "../img/header-logo.svg";

function Header() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/">
          <Row>
            <Col>
              <Image src={Logo} width="100%"/>
            </Col>
            <Col>
              <div className="mt-lg-2">UpReady</div>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="/calisan-bul">Çalışan Bul</Nav.Link>
            <Nav.Link href="/calisan-ol">Çalışan Ol</Nav.Link>
            <Nav.Link href="/sikca-sorulan-sorular">S.S.S.</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/giris-yap" className="mx-lg-5 px-lg-5">
              Giriş Yap
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
