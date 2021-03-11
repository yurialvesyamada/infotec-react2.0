import FormPedidos from '../../components/form/Form_pedidos';
import FormRecebePedidos from '../../components/form/Form_recebepedidos';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


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
            <div className="text-center text-info bg-light py-4">
                <p className="h1">Pedidos</p>
                <FormPedidos data={produto} />
                <FormRecebePedidos lista={pedidos} />
            </div>
        </>
    )
}






