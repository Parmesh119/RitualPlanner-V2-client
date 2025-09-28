// define axios actions like /backend_endpoint_url/auth/login with request body and use hooks here to mutate or query

import type { TContactFormData } from "@/schemas/contact";
import { axiosInstance } from "./axios";
import type { TAuthResponse, TLoginFormData, TLoginResponse } from "@/schemas/Login";
import type { TRefreshTokenRequest } from "@/schemas/Token";

// Contact form landing page
export const contactFormAction = async (data: TContactFormData): Promise<string> => {
    try {
        const response = await axiosInstance.post("/contact", data)
        return response.data
    } catch(error: any) {
        throw Error(error.response.data.message)
    }
}

// Auth actions
export const loginAction = async (data: TLoginFormData): Promise<TAuthResponse> => {
    try {
        const response = await axiosInstance.post("/auth/login", data)
        return response.data
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}

export const refreshTokenAction = async (data: TRefreshTokenRequest): Promise<TLoginResponse> => {
    try {
        const response = await axiosInstance.put("/auth/refresh-token", data)
        return response.data
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}