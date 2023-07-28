import React from "react";
import { Container, Nav, Navbar, Row, Col, Image, NavDropdown } from "react-bootstrap";
import "../Styles/Header.css";
import Logo from "../img/header-logo.svg";

function Header() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className="mx-lg-5" href="/">
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
            <Nav.Link className="mx-lg-5" href="/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link className="mx-lg-5" href="/calisan-bul">Çalışan Bul</Nav.Link>
            <Nav.Link className="mx-lg-5" href="/calisan-ol">Çalışan Ol</Nav.Link>
            <Nav.Link className="mx-lg-5" href="/sikca-sorulan-sorular">S.S.S.</Nav.Link>
            <Nav.Link className="mx-lg-5" href="/teknoloji">Blog</Nav.Link>
            <NavDropdown className="mx-lg-5" title="Giriş Yap / Hesap Oluştur" id="basic-nav-dropdown">
              <NavDropdown.Item href="giris-yap">Giriş Yap</NavDropdown.Item>
              <NavDropdown.Item href="is-arayan-hesabi-olustur">
                Hesap Oluştur
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
