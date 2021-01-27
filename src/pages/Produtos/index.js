import { Container, Row, Col } from 'react-bootstrap';
import Produtos from '../../components/produto/Produtos_api';
import Pagamento from '../../components/pagamento/Pagamento';
import Categorias from '../../components/categoria/Categoria';

export default function Produtos_api() {

    return (

        <>
            <Container fluid>
                <p className="text-center text-info h1 my-4">Produtos</p>
                <Row className="mr-4">
                    <Col lg={3}>
                        <Categorias />
                    </Col>
                    <Col lg={9}>
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
