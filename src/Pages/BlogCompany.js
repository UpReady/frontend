import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Blog3 from "../img/news1.jpg";
import Blog4 from "../img/news2.jpg";
import Blog5 from "../img/news3.jpg";
import "../Styles/Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function BlogCompany() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <Container fluid>
      <div className="blog-header mt-4 mb-4 text-center">
        BLOG ve HABERLER
      </div>
      <Row>
        <Col lg={4} sm={4} xs={4}>
        <Link to="/teknoloji">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3">
              Teknoloji
            </div>
          </Link>
        </Col>
        <Col lg={4} sm={4} xs={4}>
        <Link to="/firmalar">
            <div className="selected-blog-tab text-center pt-lg-3 pb-lg-3">
              Firmalar
            </div>
          </Link>
        </Col>
        <Col lg={4} sm={4} xs={4}>
          <Link to="/egitim">
            <div className="nonselected-blog-tab text-center pt-lg-3 pb-lg-3">
              Eğitim
            </div>
          </Link>
        </Col>
      </Row>
      {width >= 1024 && (
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
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>{" "}
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
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
      )}
      {width <= 450 && (
        <div className=" mb-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>{" "}
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="pt-5 pb-5">
              <Link to="/haber-detay:id">
                <div className="card-blog pt-3 pb-3 px-2">
                  <Image className="mb-3" src={Blog5} width="100%" />
                  <div className="card-title px-2">Teknolojik Gelişmeler</div>
                  <div className="card-text px-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </div>
                </div>
              </Link>
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
      )}
    </Container>
  );
}

export default BlogCompany;
