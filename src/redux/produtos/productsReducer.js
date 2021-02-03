import { BUY_PRODUCTS } from './productsTypes';

const initialState = {
    quantidade: 0
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCTS: return {
            ...state, 
            quantidade: state.quantidade + 1
        }
        default: return state 
    }
}

export default productReducer;


/* cakeReducer */