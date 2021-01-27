
import { Image, Container } from 'react-bootstrap';
import pagamento from './pagamento_new.png';

export default function Pagamento() {
    return (
        <>
        <Container className="text-center my-5 text-info h1">
            <p>Formas de Pagamento</p>
            <Image src={pagamento} className="w-50" title="Formas de Pagamento" alt="Formas de Pagamento" />
        </Container>
        </>
    );
}