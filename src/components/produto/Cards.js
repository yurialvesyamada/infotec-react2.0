import { Col, Card, Image } from 'react-bootstrap';
import './Produto.css';
import stars from '../../assets/img/avaliacoes.png';
import { Link } from 'react-router-dom';

export default function Cards(props) {

    return (

        <>

            <Col sm={6} md={4} lg={4} className="text-center shadow-sm p-2 mb-5 bg-light rounded border">

                <Card className="shadow bg-white rounded" style={{ 'height': '38rem' }}>
                    <Image src={require(`../../../src/assets/img/${props.imagem}`).default} alt="Imagem de Produtos" className="card-img-top py-2" title={props.nome} style={{ 'width': '15rem' }} />
                    <Card.Body className="py-4">
                        <Image src={stars} title="Conferir avaliações" className="pb-3" width={"110"} />
                        <h5 className="card-text" className="nome-prod" className="h5">
                            {props.nome}
                        </h5>
                        <h6 className="card-text" className="preco-prod" className="text-danger h6">
                            <del> R$ {props.preco} </del>
                        </h6>
                        <h2 className="card-text" className="preco_final-prod" className="text-info h2">
                            R$ {props.preco_final}
                        </h2>
                        <div className="py-4">
                            <Link to="/pedidos" className="btn btn-block btn-outline-info">
                                <i className="fa fa-shopping-cart"></i> Comprar</Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}






