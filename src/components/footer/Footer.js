import { Container, Row, Col, Image, } from 'react-bootstrap';
import './Footer.css';
import logo from '../../assets/img/infotec-logo.png';


export default function Footer() {
    return (

        <>
            <footer className="bg-info text-white py-5 link-white">
                <Container>
                    <Row className="text-center">
                        <Col className="my-auto" sm={12} md={3} lg={3}>
                            <a href="/">
                                {<Image src={logo} title="© 2020 Copyright InfoTec" className="w-50 shadow-sm bg-white rounded" fluid />}
                            </a>
                        </Col>

                        <Col className="my-auto" sm={12} md={3} lg={3}>

                            <ul className="m-auto">
                                <li className="h2 pb-2 font">Inicio</li>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/produtos">Produtos</a>
                                </li>
                                <li>
                                    <a href="/pedidos">Carrinho</a>
                                </li>
                            </ul>
                        </Col>

                        <Col className="my-auto" sm={12} md={3} lg={3}>

                            <ul className="m-auto">
                                <li className="h2 pb-2 font">Sobre Nós</li>
                                <li>
                                    <a href="/loja">Nossas Lojas</a>
                                </li>
                                <li>
                                    <a href="/faleconosco">Fale Conosco</a>
                                </li>
                                <li>
                                    <a href="/parceiros">Parceiros</a>
                                </li>
                            </ul>
                        </Col>

                        <Col className="m-auto" sm={12} md={3} lg={3}>
                            <div>
                                <a href="https://github.com/yurialvesyamada/infotec-react2.0/tree/redux" target="_blank" title="GitHub" className="github"><i
                                    className="fa fa-3x mx-2 fa-github text-light"></i></a>
                                <a href="#" target="_blank" title="Linkedin" className="linkedin"><i
                                    className="fa fa-3x mx-2 fa-linkedin text-light"></i></a>
                                <a href="https://www.facebook.com/yuri.alvesyamada/" target="_blank" title="Facebook" className="facebook"><i
                                    className="fa fa-3x mx-2 fa-facebook text-light"></i></a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </footer>
            <div className="bg-dark text-center text-white py-2 font" title="&copy; 2020 InfoTec">
                &copy; 2020 InfoTec
            </div>
        </>

    )
}