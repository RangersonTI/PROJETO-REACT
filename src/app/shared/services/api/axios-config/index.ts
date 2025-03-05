
import axios from 'axios'
import { Enviroments } from '../../../environments';
import { erroInterceptor, responseInterceptor } from './interceptor';

const Api = axios.create({
    baseURL: Enviroments.URL_BASE
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => erroInterceptor(error)
)

export {Api}