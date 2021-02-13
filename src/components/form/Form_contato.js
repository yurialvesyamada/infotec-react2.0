import { Container, Form, Button } from 'react-bootstrap';
import '../footer/Footer.css';

export default function FaleConosco() {



    return (

        <>
            <Container className="rounded font w-50 shadow-sm my-4 border">
                <Form className="py-5" method="POST" action="http://localhost:5000/usuarios">

                    <Form.Group controlId="exampleForm.ControlInput1" className="h5">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="name" placeholder="Digite seu nome" name="nome" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2" className="h5">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" required />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput3" className="h5">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="password" name="senha" required />
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
                    <Button as="input" type="reset" value="Limpar" className="btn btn-info w-25 mx-5 mt-4" />
                    <Button as="input" type="submit" value="Enviar" className="btn btn-info w-25 mx-5 mt-4" />{' '}
                </Form>
            </Container>
        </>
    );
}

