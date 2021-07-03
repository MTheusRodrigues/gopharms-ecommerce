import {
    GET_CONFIGURACOES,
    LIMPAR_CONFIGURACOES
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type){
        case GET_CONFIGURACOES:
            return { loja: action.payload.loja };
        case LIMPAR_CONFIGURACOES:
            return { loja: null }
        default: 
            return state;
    }
}