import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Image,
  NavItem,
} from "react-bootstrap";
import "../Styles/Header.css";
import Logo from "../img/header-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className="mx-lg-5" href="/">
          <Row>
            <Col>
              <Image src={Logo} width="100%" />
            </Col>
            <Col>
              <div className="mt-lg-2">UpReady</div>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/vizyonumuz">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">Vizyonumuz</div>
              </NavItem>
            </Link>
            <Link to="/calisan-bul">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">Çalışan Bul</div>
              </NavItem>
            </Link>
            <Link to="/calisan-ol">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">Çalışan Ol</div>
              </NavItem>
            </Link>
            <Link to="/sss">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">SSS</div>
              </NavItem>
            </Link>
            <Link to="/teknoloji">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">Blog</div>
              </NavItem>
            </Link>
            <Link to="/giris-yap">
              <NavItem>
                <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">Giriş Yap</div>
              </NavItem>
            </Link>
            {/* <NavDropdown
              className="mx-lg-5 mt-2"
              title="Giriş Yap / Hesap Oluştur"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="giris-yap"> Giriş Yap</NavDropdown.Item>
              <NavDropdown.Item href="is-arayan-hesabi-olustur">
                Hesap Oluştur
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
