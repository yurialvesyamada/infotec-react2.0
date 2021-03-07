
import { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../footer/Footer.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
/* import CakeContainer from '../CakeContainer';
import HooksProductsContainer from '../HooksProductsContainer';
import EstoqueContainer from '../EstoqueContainer';
 */


class FormPedidos extends Component {
    render() {
        return (

            <Provider store={store}>
                <Container className="rounded font w-50 shadow-sm my-4 border">
                    <Form className="py-5" method="post" action="http://localhost/react-redux-project/public/api/pedidos.php">

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

                        {/* <div>
                            <HooksProductsContainer name="quantidade"/>
                            <CakeContainer />
                            <EstoqueContainer />
                        </div> */}
                        <Button as="input" type="reset" value="Limpar" className="btn btn-info w-25 mx-5 mt-4" />
                        <Button as="input" type="submit" value="Enviar" className="btn btn-info w-25 mx-5 mt-4" />{' '}
                    </Form>
                </Container>
            </Provider>
        );
    }

};

export default FormPedidos;