import { Blockchain } from './../blockchain/blockchain.model';

export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';

export function coinReducer(state: Blockchain[] = [], action) {
    switch (action.type) {
        case ADD_COIN:
            return [...state, action.payload];
        case REMOVE_COIN:
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}
