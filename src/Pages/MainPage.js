import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogMain from "../Components/BlogMain";
import CareerOpportunities from "../Components/CareerOpportunities";
import HighLights from "../Components/HighLights";
import MainArea from "../Components/MainArea";
import SSSMain from "../Components/SSSMain";

function MainPage() {
  return (
    <React.Fragment>
      <MainArea/>
      <HighLights/>
      <CareerOpportunities/>
      <Row>
        <Col>
        <BlogMain/>
        </Col>
        <Col>
        <SSSMain/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default MainPage;
