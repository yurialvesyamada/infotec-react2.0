import { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../footer/Footer.css';


class FormRecebePedidos extends Component {
    render() {
        return (

            <>
                <Container className="py-5 font">
                    <Table className="shadow-sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Produto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.lista.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nome_cliente}</td>
                                    <td>{item.descricao}</td>
                                    {console.log(item)}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

export default FormRecebePedidos;