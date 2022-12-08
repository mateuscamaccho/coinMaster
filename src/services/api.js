import axios, { AxiosError } from "axios";

export function setupAPIClient() {
    const api = axios.create({
        // baseURL: "https://api.coinranking.com/v2",
        baseURL: "http://127.0.0.1:3333",
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error) => {
        console.log(error.response.status)

        return Promise.reject(error);
    })

    return api;

}