import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyProducts } from '../redux';


function HooksProductsContainer() {
    const quantidade = useSelector(state => state.buyProducts.quantidade)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Quantidade: {quantidade}</h2>
            <button onClick={() => dispatch(buyProducts())}>Adicionar</button>
        </>
    )
}

export default HooksProductsContainer;



/* HooksCakeContainer = HooksProductsContainer */