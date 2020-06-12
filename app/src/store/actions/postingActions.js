import { getPostingsService, getPostingService } from "../../services/postingServices";
import { GET_POSTINGS, GET_POSTING, SET_FILTER } from "../actionTypes";
import store from '../../store'

export const getPostings = () => async (dispatch) => {


    let filter = store.getState().postings.filter;

    let req = getPostingsService(filter);

    req.then(res => {
        return dispatch({
            type: GET_POSTINGS,
            payload: res
        });
    })
    .catch(error => {
        console.log(error.message);
    })
}

export const getPosting = (id) =>  async (dispatch) => {

    let res = await getPostingService(id);

    return dispatch({
        type: GET_POSTING,
        payload: res
    })
}

export const setPostingFilter = (filter) => async (dispatch) => {

    return dispatch({
        type: SET_FILTER,
        payload: filter
    })
}