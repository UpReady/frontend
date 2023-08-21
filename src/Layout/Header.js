import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Image,
  NavItem,
  Form,
} from "react-bootstrap";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../Icons/HeaderLogo";
import ProfilePic from "../img/profile-pic.png";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col lg={1}>
          <div className="p-lg-4">
            <HeaderLogo />
          </div>
        </Col>
        <Col lg={4}>
          <span>{HeaderLogo}</span>
          <Form.Control
            className="mt-4 mx-lg-4"
            type="text"
            placeholder="Arama"
          />
        </Col>
        <Col lg={7}>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3">
                      Anasayfa
                    </div>
                  </NavItem>
                </Link>
                <Link to="/is-ilanlari">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3">
                      İş İlanları
                    </div>
                  </NavItem>
                </Link>
                <Link to="/vizyonumuz">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3">
                      Hakkımızda
                    </div>
                  </NavItem>
                </Link>
                <Link to="/sss">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3">
                      S.S.S.
                    </div>
                  </NavItem>
                </Link>
                <Link to="/teknoloji">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3">
                      Blog & Haberler
                    </div>
                  </NavItem>
                </Link>
                {/* <Link to="/profile">
                  <NavItem>
                    <div className="header-tab px-lg-3 mt-lg-4 mb-lg-3 px-lg-3 row">
                      <div className="col-lg-12">Hoş geldin Aysel</div>
                    </div>
                  </NavItem>
                </Link> */}
                <Link to="/giris-yap">
                  <NavItem>
                    <div className="header-tab px-lg-3 mx-lg-5 px-lg-5 mt-lg-4 mb-lg-3">
                      <div className="login-header-btn px-lg-3 pt-lg-1 pb-lg-1">
                        Giriş Yap
                      </div>
                    </div>
                  </NavItem>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
    // <Container fluid>
    //   <Navbar expand="lg" className="bg-body-tertiary">
    //     {/* <Navbar.Brand className="mx-lg-5" href="/">
    //       <Row>
    //         <Col>
    //           <HeaderLogo/>
    //         </Col>
    //         <Col>
    //           <div className="mt-lg-2">UpReady</div>
    //         </Col>
    //       </Row>
    //     </Navbar.Brand> */}
    //     <Link to="/vizyonumuz">
    //       <NavItem>
    //         <Row>
    //           <Col>
    //             <HeaderLogo />
    //           </Col>
    //           <Col>
    //             <div className="header-tab px-lg-3 mt-lg-3 mb-lg-3">
    //               UpReady
    //             </div>
    //           </Col>
    //         </Row>
    //       </NavItem>
    //     </Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Link to="/vizyonumuz">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               Vizyonumuz
    //             </div>
    //           </NavItem>
    //         </Link>
    //         <Link to="/calisan-bul">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               Çalışan Bul
    //             </div>
    //           </NavItem>
    //         </Link>
    //         <Link to="/calisan-ol">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               Çalışan Ol
    //             </div>
    //           </NavItem>
    //         </Link>
    //         <Link to="/sss">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               SSS
    //             </div>
    //           </NavItem>
    //         </Link>
    //         <Link to="/teknoloji">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               Blog
    //             </div>
    //           </NavItem>
    //         </Link>
    //         <Link to="/giris-yap">
    //           <NavItem>
    //             <div className="header-tab mx-lg-5 px-lg-3 mt-lg-3 mb-lg-3">
    //               Giriş Yap
    //             </div>
    //           </NavItem>
    //         </Link>
    //         {/* <NavDropdown
    //           className="mx-lg-5 mt-2"
    //           title="Giriş Yap / Hesap Oluştur"
    //           id="basic-nav-dropdown"
    //         >
    //           <NavDropdown.Item href="giris-yap"> Giriş Yap</NavDropdown.Item>
    //           <NavDropdown.Item href="is-arayan-hesabi-olustur">
    //             Hesap Oluştur
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </Container>
  );
}

export default Header;
