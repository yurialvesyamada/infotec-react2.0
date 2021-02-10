import { Col, Card, Button } from 'react-bootstrap';
import './Produto.css';
import stars from '../../assets/img/avaliacoes.png';


export default function Cards(props) {

    return (

        <>

            <Col sm={12} md={6} lg={3} className="text-center shadow-sm p-2 mb-5 bg-light rounded">

                <div>
                    <Card className="shadow bg-white rounded">
                        <img src={require(`../../../src/assets/img/${props.imagem}`).default} alt="Imagem de Produtos" className="card-img-top w-75 my-2" title={props.nome} />
                        <Card.Body>

                            <img src={stars} title="Conferir avaliações" className="w-50 mb-3" alt="Avaliações" />

                            <p className="card-text" className="nome-prod" className="h5">
                                {props.nome}
                            </p>
                            <p className="card-text" className="preco-prod" className="text-danger h6">
                                <del> R$ {props.preco} </del>
                            </p>
                            <p className="card-text" className="preco_final-prod" className="text-info h2">
                                R$ {props.preco_final}
                            </p>

                            <Button className="btn-block my-3 shadow-sm" variant="outline-info" href="/pedidos"><i className="fas fa-shopping-cart"></i> Comprar</Button>
                        </Card.Body>


                    </Card>

                </div>

            </Col>
        </>
    )
}
