import { getDepartmentsService } from "../../services/departmentServices"
import { GET_DEPARTMENTS } from "../actionTypes";

export const getDepartments = () => async (dispatch) => {

    let res = await getDepartmentsService();

    return dispatch({
        type: GET_DEPARTMENTS,
        payload: res
    })
}