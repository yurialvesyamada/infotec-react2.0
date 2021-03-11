import { Col, Card, Image } from 'react-bootstrap';
import './Produto.css';
import stars from '../../assets/img/avaliacoes.png';
import { Link } from 'react-router-dom';

export default function Cards(props) {

    return (

        <>

            <Col sm={6} md={4} lg={4} className="text-center shadow-sm p-2 mb-5 bg-light rounded border">

                <Card className="shadow bg-white rounded" style={{ 'height': '40rem' }}>
                    <Image src={require(`../../../src/assets/img/${props.imagem}`).default} alt="Imagem de Produtos" className="card-img-top pt-3" title={props.nome} style={{ 'width': '15rem' }} />
                    <Card.Body>
                        <div className="py-2">
                            <Image src={stars} title="Conferir avaliações" className="w-50" />
                        </div>
                        <h5 className="card-text" className="nome-prod" className="h5 py-2">
                            {props.nome}
                        </h5>
                        <h5 className="card-text" className="preco-prod" className="text-danger h5 py-2">
                            <del> R$ {props.preco} </del>
                        </h5>
                        <h2 className="card-text" className="preco_final-prod" className="text-info h2 pt-4">
                            R$ {props.preco_final}
                        </h2>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/pedidos" className="btn btn-block btn-info">
                            <i className="fa fa-shopping-cart"></i> Comprar</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}






