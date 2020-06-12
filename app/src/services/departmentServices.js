import httpClient from "./httpClient";

export const getDepartmentsService = () => {

    return httpClient.get('https://api.smartrecruiters.com/v1/companies/smartrecruiters/departments')
        .then(res => {
            return res.data;
        })
}