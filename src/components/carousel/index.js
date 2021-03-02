import { Carousel, Image } from 'react-bootstrap';
import amd from './img-carousel/amd.jpg';
import corei9 from './img-carousel/core-i9.jpg';
import intel from './img-carousel/9-gen-intel.png';
import './carousel.css';

export default function Carouselhome() {

    return (

        <>
            <Carousel>
                <Carousel.Item interval={1000}>
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

                <Carousel.Item interval={1000}>
                    <Image
                        className="d-block w-100"
                        src={amd}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-2 rounded border">
                        <h1>AMD Ryzen</h1>
                        <h6>Processadores para desktop AMD Ryzen™ da série 5000 estão aqui.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Image
                        className="d-block w-100"
                        src={intel}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="justify-content-center d-none d-md-block color-dark p-2 rounded border">
                        <h1> 9th Gen Intel® Core</h1>
                        <h6>Introducing the NEW 9th Gen Intel® Core™ desktop processors - the most powerful generation of Intel® Core™ desktop processors.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}