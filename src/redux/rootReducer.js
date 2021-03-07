import { combineReducers } from 'redux';
/* import productReducer from './produtos/productsReducer';
import estoqueReducer from './estoque/estoqueReducer'; */
import caminhoReducer from './caminho/caminhoReducer';

const rootReducer = combineReducers({
    /* buyProducts: productReducer,
    estoque: estoqueReducer, */
    caminho: caminhoReducer
})

export default rootReducer;

