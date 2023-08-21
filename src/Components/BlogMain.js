import React from "react";
import { useState, useEffect } from "react";
import { Image, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "../Styles/MainPage.css";
import BlogImg from "../img/main-blog.png";
function BlogMain() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <Container fluid>
      {width >= 1024 && (
        <>
          <div className="sss-main-header text-left mt-lg-4 pt-lg-4">
            Blog ve Haberler
          </div>
          <div className=" pt-3 pb-4 ">
            <Row>
              <Col>
                <Image src={BlogImg} width="90%" />
              </Col>
              <Col>
                <div className="main-sss-p">
                  Sektörün ile alakalı haberleri buradan takip edebilir,
                  kafandaki soru işaretlerinde deneyimli meslektaşlarının
                  bloglarında cevaplarını bulabilirsin.
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      {width <= 450 && (
        <>
          <div className="blog-header-mobile ">Blog ve Haberler</div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={BlogImg} width="100%" />
          </div>
        </>
      )}
    </Container>
  );
}

export default BlogMain;
