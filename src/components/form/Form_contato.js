import { Container, Form, Button, Col } from 'react-bootstrap';
import '../footer/Footer.css';
import { useSelector } from 'react-redux';


export default function FaleConosco() {

    const caminho = useSelector(state => state.caminho.caminho)


    return (


        <>
            <Container className="font shadow-sm border text-center rounded col-md-6">

                <Form className="my-5" method="POST" action={caminho + "/api/contato.php"}>

                    <Form.Group controlId="exampleForm.ControlInput1" className="h5">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="name" placeholder="Digite seu nome" name="nome" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2" className="h5">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput4" className="h5">
                        <Form.Label>Telefone - Celular</Form.Label>
                        <Form.Control type="number" placeholder="Digite seu telefone" name="telefone" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1" className="h5">
                        <Form.Label>Temas</Form.Label>
                        <Form.Control as="select" name="tema">
                            <option defaultValue>Selecione um tema</option>
                            <option>Dicas e Opiniões</option>
                            <option>Produtos</option>
                            <option>Relatar Erros/Bugs</option>
                            <option>Compras</option>
                            <option>Outros</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1" className="h5">
                        <Form.Label>Escreva aqui</Form.Label>
                        <Form.Control as="textarea" rows={3} name="mensagem" required />
                    </Form.Group>
                    <Col md={4} sm={6} lg={4} className="mx-auto">
                        <Button as="input" type="reset" value="Limpar" variant="outline-info" className="w-100 mt-4" />
                    </Col>
                    <Col md={4} sm={6} lg={4} className="mx-auto">
                        <Button as="input" type="submit" value="Enviar" variant="info" className="w-100 mt-4" />{' '}
                    </Col>
                </Form>
            </Container>
        </>
    );
}

