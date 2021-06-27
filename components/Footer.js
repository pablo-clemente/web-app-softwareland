import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Secciones",
      child : [
          { title : "Presentación", link : "/" },
          { title : "Fotografía", link : "#feature" },
          { title : "Viajes", link : "#service" },
          { title : "Acerca de mi", link : "#about" }
      ]
    },
    { id : 2, title : "Otros",
      child : [
          { title : "Contacto", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Politicas & Privacidad", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">pablocm1998@email.com</p>
                <h6 className="text-muted font-weight-normal">+52 1234-5678-9</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Dirección</h6>
                <p className="text-muted f-14">1234 Av. Camelinas, 12345</p>
                <h6 className="text-muted pb-2">Email: pablocm1998@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Pablo. Design by Pablo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;