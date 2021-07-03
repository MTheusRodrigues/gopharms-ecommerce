import {
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                usuario: action.payload.usuario,
                authorized: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                usuario: null,
                authorized: false
            }
        default:
            return state;
    }
}