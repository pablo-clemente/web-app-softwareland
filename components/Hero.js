import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Pablo Clemente Moreno</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Presentación <span className="text-primary font-weight-medium">Personal</span></h1>
              <p className="text-muted mb-4 pb-2">Hola, mi nombre es Pablo Clemente Moreno, tengo 23 años y estudie la Lic. Tecnologías para la Información en Ciencias. Me gusta viajar para conocer nuevos lugares, también soy aprendiz de fotografía, como resultado de esto, me gusta aprovechar los viajes que hago para practicar y tomar muchas fotos. En este sitio compartire un poco de ambas cosas.</p>
              <a href="https://www.instagram.com/clemxnte/" className="btn btn-warning">
                Sigueme en Instagram <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src="/images/perfil.JPG" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;