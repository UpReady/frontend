import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Blog3 from "../img/news1.jpg";
import Blog4 from "../img/news2.jpg";
import Blog5 from "../img/news3.jpg";
import HeaderImg from "../img/header-img.png";
import "../Styles/Blog.css";

function BlogEdu() {
  return (
    <Container fluid>
      <Image src={HeaderImg} width="100%" height="50" />
      <div className="blog-header mt-5 mb-5 text-center">BLOG ve HABERLER</div>
      <Row>
        <Col lg={4} sm={12}>
          <a href="/teknoloji">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3 mb-lg-3">
              Teknoloji
            </div>
          </a>
        </Col>
        <Col lg={4} sm={12}>
          <a href="/firmalar">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3 mb-lg-3">
              Firmalar
            </div>
          </a>
        </Col>
        <Col lg={4} sm={12}>
          <a href="/egitim">
            <div className="selected-blog-tab text-center pt-lg-3 pb-lg-3 mb-lg-3">
              Eğitim
            </div>
          </a>
        </Col>
      </Row>

      <div className=" mb-5">
        <Row>
          <Col lg={3} sm={12}>
            <div className="card-blog pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog5} width="100%" />
              <div className="card-title px-2">
                Eğitim Haberleri
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card-blog pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog3} width="100%" />
              <div className="card-title px-2">
                Eğitim Haberleri
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card-blog pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog4} width="100%" />
              <div className="card-title px-2">
                Eğitim Haberleri
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card-blog pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog5} width="100%" />
              <div className="card-title px-2">
                Eğitim Haberleri
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default BlogEdu;
