import {
    GET_PEDIDOS,
    GET_PEDIDO,
    LIMPAR_PEDIDO,
    CANCELAR_PEDIDO
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type){
        case GET_PEDIDOS:
            return {
                ...state,
                pedidos: action.payload.pedidos
            }
        case GET_PEDIDO:
            return {
                ...state,
                pedido: action.payload
            }
        case LIMPAR_PEDIDO:
            return {
                ...state,
                pedido: null
            }
        case CANCELAR_PEDIDO:
            return {
                ...state,
                pedido: {
                    ...state.pedido,
                    pedido: {
                        ...state.pedido.pedido,
                        cancelado: action.payload.cancelado
                    }
                }
            }
        default:
            return state;
    }
}