import React, { useState, useRef } from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import Blog3 from "../img/news1.jpg";
import Blog4 from "../img/news2.jpg";
import Blog5 from "../img/news3.jpg";
import HeaderImg from "../img/header-img.png";
import "../Styles/Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function BlogTechnology() {
  return (
    <Container fluid>
      <div className="blog-header text-center">BLOG ve HABERLER</div>
      <Image src={HeaderImg} width="100%" height="50" />

      <Row>
        <Col lg={4} sm={12}>
          <a href="/teknoloji">
            <div className="selected-blog-tab text-center pt-lg-3 pb-lg-3">
              Teknoloji
            </div>
          </a>
        </Col>
        <Col lg={4} sm={12}>
          <a href="/firmalar">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3">
              Firmalar
            </div>
          </a>
        </Col>
        <Col lg={4} sm={12}>
          <a href="/egitim">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3">
              Eğitim
            </div>
          </a>
        </Col>
      </Row>

      <div className=" mb-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="pt-5 pb-5">
            <a href="/haber-detay:id">
              <div className="card-blog pt-3 pb-3 px-2">
                <Image className="mb-3" src={Blog5} width="100%" />
                <div className="card-title px-2">Teknolojik Gelişmeler</div>
                <div className="card-text px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since...
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="pt-5 pb-5">
            <a href="/haber-detay:id">
              <div className="card-blog pt-3 pb-3 px-2">
                <Image className="mb-3" src={Blog5} width="100%" />
                <div className="card-title px-2">Teknolojik Gelişmeler</div>
                <div className="card-text px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since...
                </div>
              </div>{" "}
            </a>
          </SwiperSlide>
          <SwiperSlide className="pt-5 pb-5">
            <a href="/haber-detay:id">
              <div className="card-blog pt-3 pb-3 px-2">
                <Image className="mb-3" src={Blog5} width="100%" />
                <div className="card-title px-2">Teknolojik Gelişmeler</div>
                <div className="card-text px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since...
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="pt-5 pb-5">
            <a href="/haber-detay:id">
              <div className="card-blog pt-3 pb-3 px-2">
                <Image className="mb-3" src={Blog5} width="100%" />
                <div className="card-title px-2">Teknolojik Gelişmeler</div>
                <div className="card-text px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since...
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="pt-5 pb-5">
            <a href="/haber-detay:id">
              <div className="card-blog pt-3 pb-3 px-2">
                <Image className="mb-3" src={Blog5} width="100%" />
                <div className="card-title px-2">Teknolojik Gelişmeler</div>
                <div className="card-text px-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since...
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
        {/* <Row>
          <Col lg={3} sm={12}>
            <div className="card-blog pt-3 pb-3 px-2">
              <Image className="mb-3" src={Blog5} width="100%" />
              <div className="card-title px-2">
                Teknolojik Gelişmeler
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
                Teknolojik Gelişmeler
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
                Teknolojik Gelişmeler
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
                Teknolojik Gelişmeler
              </div>
              <div className="card-text px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </div>
            </div>
          </Col>
        </Row> */}
      </div>
    </Container>
  );
}

export default BlogTechnology;
