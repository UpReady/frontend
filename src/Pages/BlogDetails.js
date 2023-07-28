import React, { useState, useRef } from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import Blog5 from "../img/news3.jpg";
import HeaderImg from "../img/header-img.png";
import "../Styles/Blog.css";

function BlogDetails() {
  return (
    <Container fluid>
      <div className="blog-header text-center">DERİN ÖĞRENME PROBLEMLERİ</div>
      <Image src={HeaderImg} width="100%" height="30" />
      <div className="details-container mt-5 mb-5">
        <Row>
          <Col lg={6} xs={12} sm={12}>
            <Image src={Blog5} width="100%" />
          </Col>
          <Col lg={6} xs={12} sm={12}>
            <div className="blog-details-title mb-3 mt-3">Yapay Zeka çıldırdı</div>
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
