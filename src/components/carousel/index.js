import { Carousel, Container, Image } from 'react-bootstrap';
import amd from './img-carousel/amd.jpg';
import corei9 from './img-carousel/core-i9.jpg';
import kitgamer from './img-carousel/kit-gamer.png';
import './carousel.css';
import { Link } from 'react-router-dom';

export default function Carouselhome() {

    return (

        <>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <Image
                        className="d-block w-100"
                        src={corei9}
                        alt="First slide"
                    />

                    <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-2 rounded border ">
                        <h1>Processadores Intel Core i9</h1>
                        <h6>Processador Intel Core i9-9900k Coffee Lake Refresh 9a Geração, Cache 16MB, 3.6GHz (5.0GHz Max Turbo), LGA 1151 - BX80684I99900K</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <Image
                        className="d-block w-100"
                        src={amd}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-2 rounded border">
                        <h1>AMD Ryzen</h1>
                        <h6>Processadores para desktop AMD Ryzen™ da série 5000 já estão aqui.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1500000} className="bg-dark">
                    <Container className="mx-auto align-items-center">
                        <Image
                            className="d-block w-100 rounded shadow-sm border"
                            src={kitgamer}
                            alt="Third slide"


                        />
                    </Container>
                    <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-2 rounded border">
                        <h1> Computadores Gamer</h1>
                        <h6>PCs Gamer das mais renomadas marcas do mercado com preços incríveis e de ultima geração.
                       </h6>
                        <h6 className="my-3">Cupom de Desconto:
                        <Link to="/produtos"> @INFOTECGAMERS</Link>
                        </h6>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}