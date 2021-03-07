import React from 'react';
import { conferirEstoque } from '../redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


function EstoqueContainer(props) {
    return (
        <div>
            <h5>Estoque: {props.estoqueDeProdutos} Unidades disponíveis</h5>
            <Button onClick={props.conferirEstoque} className="rounded-pill btn-info w-25">Verificar Estoque</Button>
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
