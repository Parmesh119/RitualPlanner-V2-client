import axios from 'axios'

export const backendUrl = import.meta.env.BACKEND_URL || "http://localhost:8080"

export const axiosInstance = axios.create({
    baseURL: `${backendUrl}/api/v2`,
    withCredentials: true
})