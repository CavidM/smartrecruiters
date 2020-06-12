import { toggleCommonProgressBar } from '../store/actions/commonActions';
import store from '../store';
import { SHOW_COMMON_PROGRESS_BAR, HIDE_COMMON_PROGRESS_BAR } from '../store/actionTypes';

const axios = require('axios');

const httpClient = axios.create();

httpClient.interceptors.request.use((config) => {

    store.dispatch(toggleCommonProgressBar(SHOW_COMMON_PROGRESS_BAR))

    return config;
}, (error) => {
    return Promise.reject(error);
});

httpClient.interceptors.response.use((response) => {

    store.dispatch(toggleCommonProgressBar(HIDE_COMMON_PROGRESS_BAR));

    return response;
}, (error) => {
    return Promise.reject(error);
});

export default httpClient;


