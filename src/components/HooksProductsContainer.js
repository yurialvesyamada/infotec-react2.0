import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyProducts } from '../redux';
import { Button} from 'react-bootstrap';


function HooksProductsContainer() {
    const quantidade = useSelector(state => state.buyProducts.quantidade)
    const dispatch = useDispatch()
    return (
        <>
            <h3 className="py-2">Quantidade: {quantidade}</h3>
            <Button onClick={() => dispatch(buyProducts())} className="rounded-pill btn-info w-25">Adicionar</Button>
        </>
    )
}

export default HooksProductsContainer;



/* HooksCakeContainer = HooksProductsContainer */