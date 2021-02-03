import { combineReducers } from 'redux';
import productReducer from './produtos/productsReducer';
import estoqueReducer from './estoque/estoqueReducer';

const rootReducer = combineReducers({
    buyProducts: productReducer,
    estoque: estoqueReducer
})


export default rootReducer;



/* cakeReducer = productReducer 
  iceCreamReducer  = estoqueReducer

*/
