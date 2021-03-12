import { Component } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import '../footer/Footer.css';



class FormPedidos extends Component {
    render() {
        return (

            <Container className="font shadow-sm border text-center rounded col-md-6">
                <Form className="my-5" method="post" action="http://localhost/react-redux-project/public/api/pedidos.php">

                    <Form.Group controlId="exampleForm.ControlInput1" className="h5">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="name" placeholder="Nome" name="nome_cliente" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2" className="h5">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="adress" placeholder="Digite o Endereço" name="endereco" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput3" className="h5">
                        <Form.Label>Telefone - Celular</Form.Label>
                        <Form.Control type="number" placeholder="Telefone" name="telefone" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect4" className="h5">
                        <Form.Label>Selecione o Produto</Form.Label>
                        <Form.Control as="select" name="produto" required>
                            <option defaultValue>Selecione o Produto</option>
                            {this.props.data.map((produto, index) => <option key={index} value={produto.idproduto}>{produto.descricao} - R${produto.preco_final}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Col md={4} sm={6} lg={4} className="mx-auto">
                        <Button as="input" type="reset" value="Limpar" variant="outline-info" className="w-100 mt-4" />
                    </Col>
                    <Col md={4} sm={6} lg={4} className="mx-auto">
                        <Button as="input" type="submit" value="Enviar" variant="info" className="w-100 mt-4" />{' '}
                    </Col>
                </Form>
            </Container>
        );
    }

};

export default FormPedidos;