import { Row } from 'react-bootstrap';

export default function Categorias() {
    return (
        <div>
            <Row>
                <div className="bg-info text-white rounded shadow">
                    <div className="produtos p-4">
                        <p className="text-center my-4 h1">Categorias</p>
                        <div className="p-lists">
                            <div className="d-flex justify-content-between mt-2">
                                <span>Todos</span> <span>16</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Notebooks</span> <span>8</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Placa de Vídeo</span> <span>4</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Processadores</span> <span>2</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Memória RAM</span> <span>1</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Monitores</span> <span>1</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>CPU</span> <span>Em breve</span>
                            </div>


                            <div className="p-2 border-top border-light">
                                <div className="heading d-flex justify-content-between">
                                    <p className="text-uppercase h5">Processadores</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Intel Core i9</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Intel Core i7</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Intel Core i5</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Intel Core i3</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>AMD Ryzen 7</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>AMD Ryzen 5</span> <span>--</span>
                            </div>

                            <div className="p-2 border-top border-light">
                                <div className="heading d-flex justify-content-between">
                                    <p className="text-uppercase h5">Marcas</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Acer</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Apple</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Samsung</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Lenovo</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Asus</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Sony</span> <span>--</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Dell</span> <span>--</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        </div>
    );
}