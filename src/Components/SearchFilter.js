import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/SearchJobScreen.css";
import JobsForYou from "../Components/JobsForYou";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchFilter = () => {
  return (
    <div className="search-filters-card mt-lg-5 mx-lg-2 pb-lg-4">
    <Form>
      <Row>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="İş ilanı ara" />
          </Form.Group>
        </Col>
        <Col lg={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Şehir" />
          </Form.Group>
        </Col>
        <Col lg={1}>
          <Button variant="primary" type="submit">
            ARA
          </Button>
        </Col>
        <Col lg={3}>
          <Form.Select aria-label="Default select example">
            <option>Sırala</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Jobs</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Jobs</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Experience Lv.</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Company</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Job Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Easy Apply</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Other Filter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  </div>
  )
}

export default SearchFilter