import axios from "axios";
import { Component } from 'react';
import FormPedidos from '../../components/form/Form_pedidos';
import FormRecebePedidos from '../../components/form/Form_recebepedidos';


class Pedido extends Component {
    state = {
        produto: [],
        pedidos: []
    }
    componentDidMount() {
        axios.get(`http://localhost/react-redux-project/public/api/produtos.php`)
            .then(res => {
                const produto = res.data;
                this.setState({ produto });
            })
        axios.get(`http://localhost/react-redux-project/public/api/pedido.php`)
            .then(res => {
                const pedidos = res.data;
                this.setState({ pedidos });
            })
    }
    render() {
        return (
            <>
                <div className="text-center text-info bg-light py-4">
                    <p className="h1">Pedidos</p>
                    <FormPedidos data={this.state.produto} />
                    <FormRecebePedidos lista={this.state.pedidos} />
                </div>
            </>
        )
    }
}

export default Pedido;
