import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/SearchJobScreen.css";
import JobsForYou from "../Components/JobsForYou";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SearchFilter from "../Components/SearchFilter";
import Companies from "../Components/Companies";

const SearchJobScreen = () => {
  return (
    <Container fluid className="bg-jobscreen-color">
      <div>
        <div className="jobs-for-you mx-lg-2 pt-lg-5 pb-lg-3">
          Sizin için öne çıkan ilanlar
        </div>
        <JobsForYou />
        <SearchFilter/>
        <Row>
            <Col lg={3}>
                <Companies/>
            </Col>
            <Col lg={6}>
                ays
            </Col>
            <Col lg={3}>
                ays
            </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SearchJobScreen;
