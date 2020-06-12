import httpClient from "./httpClient";

export const getPostingsService = (filter) => {

    return httpClient.get(`https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings?country=${filter.country}&department=${filter.department}`)
        .then(res => {
            return res.data;
        })
}

export const getPostingService = (id) => {

    return httpClient.get(`https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/${id}`)
        .then(res => {
            return res.data;
        })
}