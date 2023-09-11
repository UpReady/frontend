import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Styles/SearchJobScreen.css";
import JobsForYou from "../Components/JobsForYou";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CompanyLogo from "../img/ericsson-logo-1.svg";
import LocationIcon from "../Icons/LocationIcon";

const Companies = () => {
  return (
    <div className="mx-lg-2">
      <div className="companies-card p-lg-2">
        <div className="line-companies p-2">
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <Image src={CompanyLogo} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="position-name">Social Media Expert</div>
              <div className="company-name">Ericsson</div>
              <div className="location-name">
                <LocationIcon /> İstanbul
              </div>
            </Col>
          </Row>
        </div>
        <div className="line-companies p-2">
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <Image src={CompanyLogo} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="position-name">Social Media Expert</div>
              <div className="company-name">Ericsson</div>
              <div className="location-name">
                <LocationIcon /> İstanbul
              </div>
            </Col>
          </Row>
        </div>
        <div className="line-companies p-2">
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <Image src={CompanyLogo} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="position-name">Social Media Expert</div>
              <div className="company-name">Ericsson</div>
              <div className="location-name">
                <LocationIcon /> İstanbul
              </div>
            </Col>
          </Row>
        </div>
        <div className="line-companies p-2">
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <Image src={CompanyLogo} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="position-name">Social Media Expert</div>
              <div className="company-name">Ericsson</div>
              <div className="location-name">
                <LocationIcon /> İstanbul
              </div>
            </Col>
          </Row>
        </div>
        <div className="line-companies p-2">
          <Row>
            <Col lg={4}>
              <div className="p-3">
                <Image src={CompanyLogo} />
              </div>
            </Col>
            <Col lg={8}>
              <div className="position-name">Social Media Expert</div>
              <div className="company-name">Ericsson</div>
              <div className="location-name">
                <LocationIcon /> İstanbul
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Companies;
