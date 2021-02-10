import { Container, Row, Col, Card } from 'react-bootstrap';
import '../footer/Footer.css';

export default function CardTecnologias() {
    return (
        <Container className="text-center font">
            <p className="h1 my-4">Tecnologias Utilizadas</p>
            <Row className="p-1 mb-4 rounded">
                <Col sm={12} md={3} lg={3}>
                    <Card>
                        <Card.Header>
                            <p className="h1">HTML5</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-html5 fa-10x text-danger"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={3} lg={3}>
                    <Card>
                        <Card.Header>
                            <p className="h1">CSS3</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-css3-alt fa-10x text-primary"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={3} lg={3}>
                    <Card>
                        <Card.Header>
                            <p className="h1">PHP</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-php fa-10x text-dark"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={3} lg={3}>
                    <Card>
                        <Card.Header>
                            <p className="h1">JavaScript</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-js fa-10x text-warning"></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="p-1 mb-5 rounded">
                <Col sm={12} md={6} lg={6}>
                    <Card>
                        <Card.Header>
                            <p className="h1">React.Js</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-react fa-10x text-info"></i>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Card>
                        <Card.Header>
                            <p className="h1">GitHub</p>
                        </Card.Header>
                        <Card.Body>
                            <i className="fab fa-github fa-10x text-dark"></i>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}