import { Container, Row, Col } from 'react-bootstrap';
import email from './email.png';
import instagram from './instagram.jpg';
import wpp from './whatsapp.png';
import facebook from './facebook.png';
import './Contact.css';

export default function Logos() {
  return (

    <>
      <Container className="py-5 text-center shadow-sm rounded" fluid> 
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} lg={3} className="my-3">
            <div className="styles">
              <img src={email} alt="" title="© 2020 Copyright InfoTec" />
            </div>
            <a href="https://web.whatsapp.com/" className="links">lojas@infotec.com</a>
          </Col>
          <Col xs={12} md={6} lg={3} className="my-3">
            <div className="styles">
              <img src={instagram} alt="" title="Instagram InfoTec" />
            </div>
            <a href="https://www.instagram.com/" className="links">@InfoTec</a>
          </Col>
          <Col xs={12} md={6} lg={3} className="my-3">
            <div className="styles">
              <img src={wpp} alt="" title="© 2020 Copyright InfoTec" />
            </div>
            <a href="https://web.whatsapp.com/" className="links">(11) 94875-6799</a>
          </Col>
          <Col xs={12} md={6} lg={3} className="my-3">
            <div className="styles">
              <img src={facebook} alt="" title="© 2020 Copyright InfoTec" />
            </div>
            <a href="https://web.whatsapp.com/" className="links">InfoTec</a>
          </Col>
        </Row>
      </Container>
    </>

  );
}

