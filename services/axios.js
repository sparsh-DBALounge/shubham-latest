import axios from 'axios';
import store from '@/redux/store';
import { startLoaderAct, stopLoaderAct } from '@/redux/slice/loaderSlice';

const request = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true
});

request.interceptors.request.use(
    (config) => {
        store.dispatch(startLoaderAct())
        return config;
    },
    (error) => {
        store.dispatch(stopLoaderAct())
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (config) => {
        store.dispatch(stopLoaderAct())
        return config;
    },
    (error) => {
        store.dispatch(stopLoaderAct())
        return Promise.reject(error);
    }
)

export default request;