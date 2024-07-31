import { env } from '@/config/env';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T = any> {
    status: number;
    message: string;
    data: T;
}

interface ApiError {
    status: number;
    message: string;
    data?: any;
}

export class ApiService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: env.BACKEND_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Add request interceptor
        this.api.interceptors.request.use(
            config => {
                // Modify request config before sending (e.g., add auth token)
                const token = localStorage.getItem('token'); // Example token retrieval
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        // Add response interceptor
        this.api.interceptors.response.use(
            response => response,
            error => {
                const axiosError = error as AxiosError<{ message?: string }>;
                if (axiosError.response) {
                    return Promise.reject<ApiError>({
                        status: axiosError.response.status,
                        message: axiosError.response.data?.message || axiosError.message,
                        data: axiosError.response.data,
                    });
                } else {
                    return Promise.reject<ApiError>({
                        status: 500,
                        message: axiosError.message,
                    });
                }
            }
        );
    }

    async get<T = any>(url: string, params: object = {}): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.get(url, { params });
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            return error as ApiError;
        }
    }

    async post<T = any>(url: string, data: any): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.post(url, data);
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            return error as ApiError;
        }
    }

    async put<T = any>(url: string, data: any): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.put(url, data);
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            return error as ApiError;
        }
    }

    async delete<T = any>(url: string): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.delete(url);
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            return error as ApiError;
        }
    }

    async upload<T = any>(url: string, formData: FormData): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            return error as ApiError;
        }
    }
}
