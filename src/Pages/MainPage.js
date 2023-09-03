import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BlogMain from "../Components/BlogMain";
import HighLights from "../Components/HighLights";
import MainArea from "../Components/MainArea";
import RoadMapMain from "../Components/RoadMapMain";
import SSSMain from "../Components/SSSMain";

function MainPage() {
  return (
    <Container>
      <MainArea />
      <HighLights />
      <Row>
        <Col lg={6} sm={12}>
          <a href="/teknoloji">
            <BlogMain />
          </a>
        </Col>
        <Col lg={6} sm={12}>
          <SSSMain />
        </Col>
      </Row>
      <RoadMapMain/>
    </Container>
  );
}

export default MainPage;
