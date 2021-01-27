import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Cards from './Cards';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/react-redux-project/public/api/produtos.php")
            const dados = await resposta.json()
            setProducts(dados);
        }
        fetchData();
    }, []);

    return (
        <Row>
            {products && products.map(item => <Cards key={item.idproduto} imagem={item.imagem} nome={item.descricao} categoria={item.categoria} preco={item.preco} preco_final={item.preco_final} />)}
        </Row>
    )
}