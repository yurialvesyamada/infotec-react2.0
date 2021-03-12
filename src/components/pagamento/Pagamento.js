
import { Image, Container } from 'react-bootstrap';
import pagamento from './pagamento_new.png';

export default function Pagamento() {
    return (
        <>
            <Container className="text-center my-5 text-info">
                <h2 className="h2">Formas de Pagamento</h2>

                <Image src={pagamento} className="w-100 d-inline d-sm-none" title="Formas de Pagamento" alt="Formas de Pagamento" />
                <Image src={pagamento} className="w-50 d-none d-sm-inline" title="Formas de Pagamento" alt="Formas de Pagamento" />
            </Container>
        </>
    );
}