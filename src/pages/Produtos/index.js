import { Container, Row, Col } from 'react-bootstrap';
/* import Produtos from '../../components/produto/Produtos_api'; */
import Pagamento from '../../components/pagamento/Pagamento';
import Categorias from '../../components/categoria/Categoria';
import Loading from '../../components/loading/index';
import { lazy, Suspense } from 'react';

const Produtos = lazy(() => import('../../components/produto/Produtos_api'));

export default function Produtos_api() {

    return (

        <>
            <Container fluid>
                <p className="text-center text-info h1 my-4">Produtos</p>
                <Row>
                    <Col sm={4} md={3} lg={2}>
                        <Categorias />
                    </Col>

                    <Col sm={8} md={9} lg={10} className="px-5">
                        <Suspense fallback={<Loading />}>
                            <Produtos />
                        </Suspense>
                    </Col>
                </Row>

                <Row>
                    <Pagamento />
                </Row>
            </Container>
        </>
    );
}   
