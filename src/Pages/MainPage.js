import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogMain from "../Components/BlogMain";
import HighLights from "../Components/HighLights";
import MainArea from "../Components/MainArea";
import RoadMapMain from "../Components/RoadMapMain";
import SSSMain from "../Components/SSSMain";

function MainPage() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default MainPage;
