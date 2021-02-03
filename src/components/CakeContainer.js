import React from 'react';
import { buyProducts } from '../redux';
import { connect } from 'react-redux';


 function CakeContainer(props) {
    return (
        <div>
            <h6>Pedidos Efetuados {props.quantidade}</h6>
            {/* <button onClick={props.buyProducts}>Remover</button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        quantidade: state.buyProducts.quantidade
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyProducts: () => dispatch(buyProducts()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)