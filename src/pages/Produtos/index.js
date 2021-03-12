import { Container, Row, Col } from 'react-bootstrap';
import Produtos from '../../components/produto/Produtos_api';
import Pagamento from '../../components/pagamento/Pagamento';
import Categorias from '../../components/categoria/Categoria';
import '../../components/produto/Produto.css';

export default function Produtos_api() {

    return (

        <>
            <Container className="text-center" fluid>
                <h1 className="text-info h1 py-5">Produtos</h1>
                <Row>
                    <Col lg={2} sm={12}>
                        <Categorias />
                    </Col>
                    <Col lg={9} className="mx-auto style-fonts">
                        <Produtos />
                    </Col>
                </Row>
                <Row>
                    <Pagamento />
                </Row>
            </Container>
        </>
    );
}   
