import axios from "../api/axios";
import useAuth from "./useAuth";


const useRefreshToken = () => {
  
  const { auth, setAuth } = useAuth();

  const refresh = async () => {

    const { refreshToken } = auth

    const response = await axios.get('/auth/refresh', {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
    });
  

    setAuth(prev => {
        console.log('Prev access Token')
        console.log(JSON.stringify(prev));
        console.log('New access token')
        console.log(response.data.access_token)

        return { ...prev, accessToken: response.data.access_token}
    })

    return response.data.access_token;  
  }

  return refresh;
}

export default useRefreshToken