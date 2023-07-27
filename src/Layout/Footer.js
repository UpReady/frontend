import React from 'react'
import { Container, Image } from 'react-bootstrap';
import FooterImg from '../img/footer-img.png';

function Footer() {
  return (
    <Container fluid>
        <Image src={FooterImg} width="100%"/>
    </Container>
  )
}

export default Footer