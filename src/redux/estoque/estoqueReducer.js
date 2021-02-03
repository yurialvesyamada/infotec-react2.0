import { ESTOQUE } from './estoqueTypes';

const initialState = {
    estoqueDeProdutos: 20
}

const estoqueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ESTOQUE: return {
            ...state,
            estoqueDeProdutos: state.estoqueDeProdutos + 1
        }

        default: return state
    }
}

export default estoqueReducer;


/* numOfIceCreams = estoqueDeProdutos
   iceCreamReducer = estoqueReducer


*/