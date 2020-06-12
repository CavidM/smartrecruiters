import { GET_POSTINGS, GET_POSTING, SET_FILTER } from "../actionTypes"

export const initialState = {
    list: {},
    filter: {
        country: '',
        department: ''
    },
    posting: {}
}

export default function (state = initialState, action) {

    const payload = action.payload;

    switch (action.type) {
        case GET_POSTINGS: {

            return {
                ...state,
                list: payload
            }
        }
        case GET_POSTING: {

            return {
                ...state,
                posting: payload
            }
        }
        case SET_FILTER: {

            return {
                ...state,
                filter: {
                    ...state.filter,
                    [payload.filterField]: payload.filterValue
                }
            }
        }
        default:
            return state;
    }
}