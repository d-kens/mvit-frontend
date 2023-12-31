import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
    const [ isLoading, setIsLoading ] = useState(true) 
    const refresh = useRefreshToken()
    const { auth } = useAuth();

    console.log('Auth object before refresh:', auth)


    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                console.log('Auth object before refresh:', auth);
                await refresh();
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }


        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    }, [])


    return (
        <>
            {
                isLoading ? <p>Loading....</p>
                           : <Outlet />
            }
        </>
    )
}

export default PersistLogin