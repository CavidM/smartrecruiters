import { GET_DEPARTMENTS } from "../actionTypes";

const initialState = {
    list: {}
}

export default function (state = initialState, action) {

    switch(action.type) {
        case GET_DEPARTMENTS: {
            return {
                ...state,
                list: action.payload
            };
        }
        default:
            return state;
    }
}