import { env } from '@/config/env';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export interface ApiResponse<T = any> {
    status: number;
    message: string;
    data: T;
}

export interface ApiError {
    status: number;
    message: string;
    data?: any;
}

export class ApiService {
    private api: AxiosInstance;

    constructor(tokenRetriever: () => string | null = () => localStorage.getItem('token')) {
        this.api = axios.create({
            baseURL: env.BACKEND_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000, // Set a default timeout
        });

        // Add request interceptor
        this.api.interceptors.request.use(
            config => {
                const token = tokenRetriever();
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
            this.logError(error);  // Optionally log error
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
            this.logError(error);  // Optionally log error
            return error as ApiError;
        }
    }

    async put<T = any>(url: string, data?: any): Promise<ApiResponse<T> | ApiError> {
        try {
            const response: AxiosResponse<T> = await this.api.put(url, data);
            return {
                status: response.status,
                message: 'Success',
                data: response.data,
            };
        } catch (error) {
            this.logError(error);  // Optionally log error
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
            this.logError(error);  // Optionally log error
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
            this.logError(error);  // Optionally log error
            return error as ApiError;
        }
    }

    private logError(error: any): void {
        // Implement your logging logic here, such as sending the error to a logging service
        console.error('API Error:', error);
    }
}
