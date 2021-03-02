import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/infotec-logo.png';


function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <Image
                    src={logo}
                    className="shadow-sm rounded"
                    alt="Infotec" title="© 2020 Copyright InfoTec"
                    width="80px"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname}>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/faleconosco" to="/faleconosco" >Fale Conosco</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/loja" to="/loja">Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Header = withRouter(BaseMenu)

export default Header;