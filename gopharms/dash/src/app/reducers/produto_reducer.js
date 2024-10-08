import {
    GET_PRODUTOS,
    GET_PRODUTO,
    LIMPAR_PRODUTO
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type){
        case GET_PRODUTOS:
            return {
                ...state,
                produtos: action.payload.produtos
            }
        case GET_PRODUTO:
            return {
                ...state,
                produto: action.payload.produto
            }
        case LIMPAR_PRODUTO:
            return {
                ...state,
                produto: null
            }
        default:
            return state;
    }
}