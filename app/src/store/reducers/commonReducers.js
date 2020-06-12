import { SHOW_COMMON_PROGRESS_BAR, HIDE_COMMON_PROGRESS_BAR } from "../actionTypes";

const initialState = {
    showProgressBar: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SHOW_COMMON_PROGRESS_BAR: {
            return {
                showProgressBar: true
            }
        }
        case HIDE_COMMON_PROGRESS_BAR: {
            return {
                showProgressBar: false
            }
        }
        default:
            return state;
    }
}