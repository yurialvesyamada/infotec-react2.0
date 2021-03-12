import { Table, Container } from 'react-bootstrap';
import '../footer/Footer.css';

export default function Adress() {

    return (
        <>
            <Table responsive="sm" striped bordered hover className="shadow-sm mx-auto bg-white text-center w-100 col-md-10">
                <thead>
                    <tr className="bg-info text-light">
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
        </>
    );
}