import { Container } from 'react-bootstrap';
import Adress from '../../components/table/Enderecos';
import Pagamento from '../../components/pagamento/Pagamento';


export default function Contato() {
    return (

        <Container className="text-center text-info bg-light" fluid>
            <h1 className="h1 py-5">Conheça Já</h1>
            <Adress />
            <Pagamento />
        </Container>
    )
}
