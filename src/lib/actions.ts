// define axios actions like /backend_endpoint_url/auth/login with request body and use hooks here to mutate or query

import type { TContactFormData } from "@/schemas/contact";
import { axiosInstance } from "./axios";

// Contact form landing page
export const contactFormAction = async (data: TContactFormData): Promise<string> => {
    try {
        const response = await axiosInstance.post("/contact", data)
        return response.data
    } catch(error: any) {
        throw Error(error.response.data.message)
    }
}