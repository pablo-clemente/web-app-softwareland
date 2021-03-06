import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <Image src={feature.img} width="500" height="300"  alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Ver en unsplash <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Ver en unsplash <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <Image src={feature.img} width="500" height="300" alt="" className="img-fluid d-block mx-auto" layout-fill/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "/pablo-clemente-1-unsplash.jpeg", title : "Paseo de la Reforma", desc : "Esta imagen fue tomada desde el castillo de Chapultepec, me encanta la perspectiva y el hecho de poder alcanzar a observar los edificios, ??rboles y autos desde aquella distancia tan lejana, sin duda se ha convertido en una de mis fotograf??as favoritas (hasta el momento).", link : "https://unsplash.com/photos/d-twITljclM"},
    {id : 2, img : "/pablo-clemente-2-unsplash.jpeg", title : "Museo Soumaya", desc : "Simplemente qued?? fascinado por la arquitectura del museo pero qued?? a??n m??s fascinado con las obras y esculturas que se encuentran en su intrior. Este era unos de los lugaes que m??s deseaba conocer y fotografiar, definitivamente recomiendo visitarlo.", link : "https://unsplash.com/photos/zOOjv-c2FQ0"},
    {id : 3, img : "/pablo-clemente-3-unsplash.jpg", title : "El ??ngel de la Independencia", desc : "Esta la tome mientras caminaba de regreso al hotel, la idea era jugar con el contraste entre el detalle de la escultura y el desenfoque de las ramas. De igual forma la considero una de mis fotos favoritas de cuando iba empezando.", link : "https://unsplash.com/photos/vfaLqCrczhQ"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Fotograf??a</span></h3>
              <p className="text-muted">En esta secci??n me gustar??a compartir unas cuantas de mis primeras tomas que hice durante mi ??ltimo viaje a la ciudad de M??xico.</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;