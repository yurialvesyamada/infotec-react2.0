import { Container, Row, Col } from 'react-bootstrap';
import Produtos from '../../components/produto/Produtos_api';
import Pagamento from '../../components/pagamento/Pagamento';
import Categorias from '../../components/categoria/Categoria';
import '../../components/produto/Produto.css';

export default function Produtos_api() {

    return (

        <>
            <Container className="text-center style-fonts" fluid>
                <h1 className="text-info h1 py-4">Produtos</h1>
                <Row>
                    <Col lg={2}>
                        <Categorias />
                    </Col>
                    <Col lg={9} className="mx-auto">
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
