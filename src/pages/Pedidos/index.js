import FormPedidos from '../../components/form/Form_pedidos';
import FormRecebePedidos from '../../components/form/Form_recebepedidos';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';


export default function Pedido() {

    const caminho = useSelector(state => state.caminho.caminho)

    const [produto, setProduto] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch(`${caminho}/api/produtos.php`)
            const produto = await resposta.json()
            setProduto(produto);
        }
        fetchData();
    }, []);

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch(`${caminho}/api/pedido.php`)
            const pedidos = await resposta.json()
            setPedidos(pedidos);
        }
        fetchData();
    }, []);


    return (
        <>
            <Container className="text-center text-info bg-light" fluid>
                <h1 className="h1 py-5">Pedidos</h1>
                <FormPedidos data={produto} />
                <FormRecebePedidos lista={pedidos} />
            </Container>
        </>
    )
}






