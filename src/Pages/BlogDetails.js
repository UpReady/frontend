import React, { useState, useRef } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Blog5 from "../img/news3.jpg";
import "../Styles/Blog.css";
import Facebook from '../img/facebook.svg';
import Linkedin from '../img/linkedin.svg';
import Twitter from '../img/twitter.svg';
import Whatsapp from '../img/whatsapp.svg';
function BlogDetails() {
  return (
    <Container fluid>
      <div className="blog-header text-center mt-4 mb-4">DERİN ÖĞRENME PROBLEMLERİ</div>
      <div className="details-container mt-5 mb-5">
        <Row>
          <Col lg={6} xs={12} sm={12}>
            <Image src={Blog5} width="100%" />
          </Col>
          <Col lg={6} xs={12} sm={12}>
            <div className="blog-details-title mb-3 mt-3">
              Yapay Zeka çıldırdı
            </div>
            <div className="row justify-content-end">
              <Col lg={5} xs={12} sm={12}>
                <Row>
                  <Col>
                  <Image src={Whatsapp} width="22"/>
                  </Col>
                  <Col>
                  <Image src={Facebook} width="22"/>
                  </Col>
                  <Col>
                  <Image src={Twitter} width="22"/>
                  </Col>
                  <Col>
                  <Image src={Linkedin} width="22"/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="blog-details-date-title mb-3 mt-3">
                      Yayınlanma Tarihi :
                    </div>
                  </Col>
                  <Col>
                    <div className="blog-details-date mb-3 mt-3">
                      28.12.2022 20:20
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>

            <p className="blog-details-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="blog-details-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="blog-details-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default BlogDetails;
