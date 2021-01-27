import { Table, Container } from 'react-bootstrap';
import '../footer/Footer.css';

export default function Adress() {

    return (
        <>
            <Container className="my-4 w-100 font">
                <Table striped bordered hover className="shadow-sm p-3 mb-5 bg-white rounded">
                    <thead>
                        <tr className="text-center bg-dark text-white">
                            <th>Cidade</th>
                            <th>Endereço</th>
                            <th>Complemento</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>São Paulo</td>
                            <td>Avenida Paulista, 985	</td>
                            <td>3º Andar</td>
                            <td>(11) 4444-4444</td>
                        </tr>
                        <tr>
                            <td>Rio de Janeiro</td>
                            <td>Avenida Presidente Vargas, 500</td>
                            <td>10º Andar</td>
                            <td>(21) 3333-3333</td>
                        </tr>
                        <tr>
                            <td>Minas Gerais</td>
                            <td>Avenida Presidente Tancredo Neves</td>
                            <td>2º Andar</td>
                            <td>(31) 4941-9849</td>
                        </tr>
                        <tr>
                            <td>Santa Catarina</td>
                            <td>Rua Major Vila, 370</td>
                            <td>10º Andar</td>
                            <td>(48) 5555-5555</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
} 