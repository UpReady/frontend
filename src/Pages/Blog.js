import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Blog1 from "../img/blog1.png";
import Blog2 from "../img/blog2.png";
import Blog3 from "../img/blog3.png";
import Blog4 from "../img/blog4.png";
import Blog5 from "../img/blog5.png";
import HeaderImg from "../img/header-img.png";
import "../Styles/Blog.css";

function Blog() {
  return (
    <Container fluid>
      <Image src={HeaderImg} width="100%" height="50" />
      <div className="blog-header mt-5 mb-5">BLOG ve HABERLER</div>
      <div className=" mb-5">
        <Row>
          <Col lg={3} sm={12}>
            <div className="card pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog5} width="100%" />
              <div className="card-title px-2">
                İş görüşmesinde nelere dikkat edilmeli ?
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog3} width="100%" />
              <div className="card-title px-2">
                İş görüşmesinde nelere dikkat edilmeli ?
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog4} width="100%" />
              <div className="card-title px-2">
                İş görüşmesinde nelere dikkat edilmeli ?
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div className="card pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog5} width="100%" />
              <div className="card-title px-2">
                İş görüşmesinde nelere dikkat edilmeli ?
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

export default Blog;
