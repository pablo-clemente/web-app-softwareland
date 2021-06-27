import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Ciudad de México", desc : "Es una ciudad muy grande, por lo que 1 día no bastará para conocerla a detalle, sin embargo en la zona centro está llena de edificios icónicos y museos como Bellas Artes, el Zócalo, la calle Madero, Torre Latinoamericana, Paseo de la Reforma, etc. Recomendación para comer: Taquería “El Califa”." },
    { title : "Guadalajara", desc : "Si van a “guanatos” como me gusta llamarle, deben visitar el centro, Chapultepec donde se encuentran varios restaurantes y bares, el estadio del chivas, asistir a la FIL en diciembre, el GuadaZoo; lugares que quedan cercas: Tlaquepaque al Sur y Zapopan al Norte. Recomendación para comer: cualquier tacos ahogados." },
    { title : "Tijuana", desc : "En Tijuana hay de todo un poco, están playas de Tijuana; donde se puede comer mariscos, Av. Revolución; encuentras muchos bares, al ser frontera con EUA existe mucha mezcla de cultura. Lugares cercanos atractivos como Tecate, Ensenada y Rosarito. Recomendación para comer: Sushi Moma y  tacos de pescado en Ensenada." },
    { title : "Toluca", desc : "Toluca es una ciudad con muchos lugares turísticos, está el Cosmovitral junto con un jardín botánico, el nevado de Toluca es una excelente opción si son fanáticos de subir cerros y la naturaleza, el centro tiene muchas tiendas y museos para recorrer. Recomendación para comer: Comida china o antojitos del centro." },
    { title : "Morelia", desc : "No podía faltar mi ciudad natal, el centro histórico es el corazón de la ciudad, tiene restaurantes, bares, cafés, plazas, museos; está diseñada para caminar y caminar. En mi opinión la catedral es uno de los lugares más bellos del país, lugares turísticos cercanos que valen la pena darse la vuelta son: Pátzcuaro, Zamora, Lago de Camecuaro. Recomendaciones para comer: gazpachos, antojitos, hamburguesas de la vía, carnitas en Quiroga y dulces tradicionales." },
    { title : "Los Angeles", desc : "Otra ciudad enorme, recomiendo ir a ver el Staples Center y edificios en Downtown LA, ir de compras a los miles de outlets, Hollywood solo para ver el paseo de fama e ir de hiking, Disneyland y todos los parque temáticos, Pacific Park en Santa Mónica y el farmers market cercas de Venice Beach. Recomendación de comer: In-N-Out." },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Viajes</span></h3>
              <p className="text-muted">Cuando viajo me gusta recibir recomendaciones de lugares a visitar, estos son algunos de los lugares en los que he estado (bueno, mis favoritos o a donde segura regresaría sin dudarlo) y mis recomendaciones en base a mi experiencia.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;