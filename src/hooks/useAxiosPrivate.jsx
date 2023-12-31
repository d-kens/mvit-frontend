import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";


const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAcessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAcessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept )
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;  


/*
- useAxiosPrivate, is designed to work with Axios for making private API requests. 
- It handles authentication by automatically attaching the access token to the Authorization header of outgoing requests.
- Additionally, it includes logic to handle token expiration and refresh.

*/