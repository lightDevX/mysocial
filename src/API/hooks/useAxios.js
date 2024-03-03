import axios from "axios";
import { useEffect } from "react";
import { api } from "../axios";
import { useAuth } from "./useAuth";


const useAxios = () => {

    const { auth, setAuth } = useAuth();

    useEffect(() => {
        //Add a request intercepter
        api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        )

        //Add a response interceptor
        api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const orginalRequest = error.config;
                if (error.response.status === 401 && !orginalRequest._retry) {
                    orginalRequest._retry = true;
                    try {
                        const refreshToken = auth?.refreshToken;
                        await axios.post(config);
                    }
                    catch (e) { }
                }
                return Promise.reject(error);
            })
    }, [])
}

export { useAxios };

