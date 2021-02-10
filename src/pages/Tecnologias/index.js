import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Tecnologias() {
    return (
        <>
            <Container className="text-center text-info">
                <p className="h1 my-4">Tecnologias Utilizadas</p>
                <Row className="p-1 mb-4 rounded">
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-html5 fa-10x text-danger"></i>
                            </Card.Header>
                            <Card.Body>
                                <p className="h1">HTML5</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-css3-alt fa-10x text-primary"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">CSS3</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-php fa-10x text-dark"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">PHP</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-js fa-10x text-warning"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">JavaScript</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="p-1 mb-5 rounded">
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-react fa-10x text-info"></i>
                            </Card.Header>
                            <Card.Body>
                                <p className="h1">React.Js</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-css3-alt fa-10x text-primary"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">CSS3</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-php fa-10x text-dark"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">PHP</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <Card>
                            <Card.Header>
                                <i className="fab fa-js fa-10x text-warning"></i>
                            </Card.Header>
                            <Card.Body>
                            <p className="h1">JavaScript</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}


/* fa-10x */