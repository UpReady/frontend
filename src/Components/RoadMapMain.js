import React from "react";
import { Container, Image } from "react-bootstrap";
import "../Styles/MainPage.css";
import RoadMapImg from '../img/roadmap.jpg';

const RoadMapMain = () => {
  return (
    <Container fluid>
      <div className="roadmap-title mt-lg-5">
        5 adımda istediğin işe ulaşabilirsin !
      </div>
      <Image src={RoadMapImg}/>
    </Container>
  );
};

export default RoadMapMain;
