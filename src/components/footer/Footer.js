import { Container, Row, Col, Image, } from 'react-bootstrap';
import './Footer.css';
import logo from '../../assets/img/infotec-logo.png';


export default function Footer() {
    return (

        <>
            <Container className="bg-dark text-white py-5 link-white" fluid>
                <Row className="text-center">
                    <Col className="my-auto" sm={4} md={3} lg={3} xs={12}>
                        <a href="/">
                            <Image src={logo} title="© 2020 InfoTec" className="w-50 shadow-sm rounded sm-w-25" fluid />
                        </a>
                    </Col>

                    <Col className="my-auto" sm={4} md={3} lg={3} xs={12}>
                        <div className="h2 pb-3">Explorar Paginas</div>
                        <ul>
                            <li className="my-1">
                                <a href="/">Pagina Inicial</a>
                            </li>
                            <li className="my-1">
                                <a href="/produtos">Produtos</a>
                            </li>
                            <li className="my-1">
                                <a href="/pedidos">Carrinho</a>
                            </li>
                        </ul>
                    </Col>


                    <Col className="my-auto" sm={4} md={3} lg={3} xs={12}>

                        <div className="h2 pb-3">Sobre Nós</div>
                        <ul>
                            <li className="my-1">
                                <a href="/loja">Nossas Lojas</a>
                            </li>
                            <li className="my-1">
                                <a href="/faleconosco">Fale Conosco</a>
                            </li>
                            <li className="my-1">
                                <a href="/parceiros">Parceiros</a>
                            </li>
                        </ul>
                    </Col>

                    <Col sm={4} md={3} lg={3} xs={12} className="m-auto">
                        <a href="https://github.com/yurialvesyamada/infotec-react2.0/tree/redux" target="_blank" rel="noopener noreferrer" title="GitHub" className="github"><i
                            className="fa fa-3x px-2 fa-github text-light"></i></a>

                        <a href="https://www.linkedin.com/in/yuri-alves-yamada-804076188" target="_blank" rel="noopener noreferrer" title="Linkedin" className="linkedin"><i
                            className="fa fa-3x px-2 fa-linkedin text-light"></i></a>

                        <a href="https://api.whatsapp.com/send?phone=5511948756799&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Meu%20nome%20%C3%A9%20%5Bnome%5D%2C%20irei%20fazer%20o%20seu%20atendimento%20hoje.%20Me%20conta%20como%20posso%20ajudar%20voc%C3%AA%20hoje!" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="whatsapp"><i
                            className="fa fa-3x px-2 fa-whatsapp text-light"></i></a>
                    </Col>
                </Row>
            </Container>
            <footer className="bg-dark text-center text-white py-3" title="&copy; 2020 InfoTec">
                {/*  <hr className="style-lines bg-light" /> */}
                &copy; 2020 InfoTec. Todos os Direitos Reservados.
            </footer>
        </>

    )
}

