import {
    SET_NEWSLETTER
} from '../actions/types';

const INITIAL_STATE = {
    newsletters: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTER:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters: action.payload
            }
        default: return state;
    }
}