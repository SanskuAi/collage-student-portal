// AXIOS INSTANCE - Backend ko connect karta hai
// =============================================

import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { config } from 'dotenv';
import { response } from 'express';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type ' : 'application/json'
    }
});

// interceptor = har req may toke add
apiClient.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token'); 
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    } ,(error)=>{
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR ==ERROR HANDLE KRTA HAI
apiClient.interceptors.response.use(
    (response)=> response ,
    (error)=>{
        if (error.response?.status === 401){
            // TOKEN EXPIRED => LOGOUT
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.href = '/login'
        }

        return Promise.reject(error);
    }
);

export default apiClient
