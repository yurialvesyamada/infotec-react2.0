import { Row, ListGroup, Container } from 'react-bootstrap';

export default function Categorias() {
    return (
        <>
            <Row>
                <Container className="bg-info text-center rounded shadow w-100" fluid>
                    <h2 className="py-5 h2 text-light">Categorias</h2>
                    <ListGroup variant="flush" className="rounded">
                        <ListGroup.Item>Todos</ListGroup.Item>
                        <ListGroup.Item>Notebooks</ListGroup.Item>
                        <ListGroup.Item>Processadores</ListGroup.Item>
                        <ListGroup.Item>Placa de Vídeo</ListGroup.Item>
                        <ListGroup.Item>Memória RAM</ListGroup.Item>
                        <ListGroup.Item>Monitores</ListGroup.Item>
                        <ListGroup.Item>SSD</ListGroup.Item>
                        <ListGroup.Item>Pc Gamer</ListGroup.Item>
                    </ListGroup>
                    <h4 className="py-3 h4 text-light">Processadores</h4>
                    <ListGroup variant="flush" className="rounded">
                        <ListGroup.Item>Intel Core i9</ListGroup.Item>
                        <ListGroup.Item>Intel Core i7</ListGroup.Item>
                        <ListGroup.Item>Intel Core i5</ListGroup.Item>
                        <ListGroup.Item>Intel Core i3</ListGroup.Item>
                        <ListGroup.Item>AMD Ryzen 7</ListGroup.Item>
                        <ListGroup.Item>AMD Ryzen 5</ListGroup.Item>
                        <ListGroup.Item>AMD Ryzen 3</ListGroup.Item>
                    </ListGroup>
                    <h4 className="py-3 h4 text-light">Marcas</h4>
                    <ListGroup variant="flush" className="rounded">
                        <ListGroup.Item>Apple</ListGroup.Item>
                        <ListGroup.Item>Acer</ListGroup.Item>
                        <ListGroup.Item>Asus</ListGroup.Item>
                        <ListGroup.Item>Samsung</ListGroup.Item>
                        <ListGroup.Item>Lenovo</ListGroup.Item>
                        <ListGroup.Item>Dell</ListGroup.Item>
                        <ListGroup.Item>Sony</ListGroup.Item>
                    </ListGroup>
                        <br /> <br />
                </Container>
            </Row>
        </>
    );
}