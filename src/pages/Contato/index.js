import { Container } from 'react-bootstrap';
import FaleConosco from '../../components/form/Form_contato';
import Logos from '../../components/logos/Contact';
import { Row } from 'react-bootstrap';

export default function Contatos() {
    return (

        <>
            <Container className="text-center text-info bg-light" fluid>
                <h1 className="h1 py-5">Fale Conosco</h1>
                <Row>
                    <FaleConosco />
                    <Logos />
                </Row>
            </Container>
        </>
    )
}