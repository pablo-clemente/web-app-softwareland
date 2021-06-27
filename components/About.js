import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Acerca de <span className="text-warning">mi</span></h3>
              <p className="text-muted">Además de viajar y hacer fotos, yo diría que me gusta hacer deporte, atletismo y natación; ambos me relajan y me hacen sentir en forma. También soy fan de ver series todo el día, mi anime favorito es Naruto, estoy aprendiendo Japonés y Francés, soy adicto a comprar tenis y a comer pizza. Me gustaría aprender a tocar el piano y escribir una novela de suspenso/terror.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">“Me gusta ver ganar a la gente buena”. – Mac Miller</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Me gusta</h6>
                <ul>
                  <li>Café helado</li>
                  <li>El Hip-Hop/Rap y Rock Alternativo</li>
                  <li>Los Videojuegos</li>
                </ul>  
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">No me gusta</h6>
                <ul>
                  <li>El atole</li>
                  <li>El futbol</li>
                  <li>Las novelas</li>
                </ul>  
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;