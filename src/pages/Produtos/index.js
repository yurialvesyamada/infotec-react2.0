import { Container, Row, Col } from 'react-bootstrap';
import Produtos from '../../components/produto/Produtos_api';
import Pagamento from '../../components/pagamento/Pagamento';
import Categorias from '../../components/categoria/Categoria';

export default function Produtos_api() {

    return (

        <>
            <Container fluid>
                <p className="text-center text-info h1 my-4">Produtos</p>
                <Row>
                    <Col lg={2}>
                        <Categorias />
                    </Col>
                    <Col lg={10} className="px-5">
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