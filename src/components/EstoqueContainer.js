import React from 'react';
import { conferirEstoque } from '../redux';
import { connect } from 'react-redux';


function EstoqueContainer(props) {
    return (
        <div>
            <h2>Estoque {props.estoqueDeProdutos}</h2>
            <button onClick={props.conferirEstoque}>Verificar Estoque</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        estoqueDeProdutos: state.estoque.estoqueDeProdutos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        conferirEstoque: () => dispatch(conferirEstoque())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EstoqueContainer)


/*
   iceCreamContainer = EstoqueContainer

*/