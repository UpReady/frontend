import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import HeaderLogo from "../Icons/HeaderLogo";
import "../Styles/Header.css";
const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 mt-1">
          <Container fluid>
            <Navbar.Brand href="/">
              <HeaderLogo width="100%" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="row">
                    <div className="col-3">
                    <HeaderLogo width="100%" />
                    </div>
                    <div className="col-9 mt-1">
                      UpReady
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex col-12 col-lg-4">
                  <Form.Control
                    type="search"
                    placeholder="Ara"
                    className="me-2"
                    aria-label="Ara"
                  />
                  {/* <Button variant="outline-success">Ara</Button> */}
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="header-tab">
                    Anasayfa
                  </Nav.Link>
                  <Nav.Link href="/is-ilanlari" className="header-tab">
                    İş İlanları
                  </Nav.Link>
                  <Nav.Link href="/hakkimizda" className="header-tab">
                    Hakkımızda
                  </Nav.Link>
                  <Nav.Link href="/sss" className="header-tab">
                    S.S.S.
                  </Nav.Link>
                  <Nav.Link href="/teknoloji" className="header-tab">
                    Blog & Haberler{" "}
                  </Nav.Link>
                  <Nav.Link href="/giris-yap">
                    
                      <div className="login-header-btn px-lg-3 text-center">Giriş Yap</div>
                    
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
