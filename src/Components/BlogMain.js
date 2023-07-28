import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
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
          <div className="blog-header text-center">BLOG ve HABERLER</div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={BlogImg} width="90%" />
          </div>
        </>
      )}
      {width <= 450 && (
        <>
          <div className="blog-header-mobile ">BLOG ve HABERLER</div>
          <div className=" pt-3 pb-4 text-center">
            <Image src={BlogImg} width="100%" />
          </div>
        </>
      )}
    </Container>
  );
}

export default BlogMain;
