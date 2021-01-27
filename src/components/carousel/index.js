import { Carousel } from 'react-bootstrap';
import amd from './img-carousel/amd.jpg';
import corei9 from './img-carousel/core-i9.jpg';
import intel from './img-carousel/9-gen-intel.png';

export default function Carouselhome() {

    return (

        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={corei9}
                    alt="First slide"

                />
                <Carousel.Caption>
                    <h3>Intel Core i9</h3>
                    <p>Processador Intel Core i9-9900k Coffee Lake Refresh 9a Geração, Cache 16MB, 3.6GHz (5.0GHz Max Turbo), LGA 1151 - BX80684I99900K</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={amd}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>AMD Ryzen</h3>
                    <p>Processadores para desktop AMD Ryzen™ da série 5000 estão aqui</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={intel}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3> 9th Gen Intel® Core</h3>
                    <p>Introducing the NEW 9th Gen Intel® Core™ desktop processors - the most powerful generation of Intel® Core™ desktop processors.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}