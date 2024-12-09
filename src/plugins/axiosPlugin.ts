import axios from "axios";
import type {  AxiosInstance } from "axios";
import { FINGERPRINT, LS_KEY_ACCESS_TOKEN } from "@/const/index";
import IResponceLogin from "@/types/IResponceLogin";

let baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL
let loginBaseUrl = baseUrl
if(!import.meta.env.PROD){
  baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL+"/api"
}else{
  baseUrl = "/api"
}

const $api = axios.create({
  baseURL: baseUrl ,
  withCredentials:true
});

$api.interceptors.request.use((config) => {
  const access_token:string = localStorage.getItem(LS_KEY_ACCESS_TOKEN)+''
  console.log(`Bearer ${access_token}`)
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});
$api.interceptors.response.use(
  (config)=>{
    return config
  },
  async (error)=>{
    const originalRequest = error.config;
    console.log("api axios error nterceptors.response.use")
    console.log(error)
    if(error.response){//TODO refresh token not work in dev mode because first error shows ALLOW-ORIGEN Blocked CORS , why?
      if(error.response.status == 401 && error.config && !originalRequest._isRetry){
        originalRequest._isRetry = true
        console.log("Do refreshToken")
        const access_token  = await refreshToken()
        if(access_token){
          localStorage.setItem(LS_KEY_ACCESS_TOKEN, access_token)
          console.log("Do retry originalRequest")
          originalRequest.headers.Authorization = `Bearer ${access_token}`
        }
        return await axios.request(originalRequest)
      }
    }else{
      console.log("NO ERROR RESPONCE ")
    }
    
    console.log("AXIOS REJECT REQUEST")
    return Promise.reject(error)
  }
)

const $loginApi:AxiosInstance = axios.create({
  baseURL: loginBaseUrl ,
});
const $refreshTokenApi:AxiosInstance = axios.create({
  baseURL: loginBaseUrl ,
  withCredentials: true
});



export const $apiLogin = $loginApi

async function refreshToken():Promise<string>{
  return new Promise((resolve)=>{
    $refreshTokenApi.post("refreshtoken",{fingerPrint:FINGERPRINT}).then(function (response) {
       const tokens = response.data as IResponceLogin
       resolve(tokens.accessToken)
    }).catch(()=>{
      resolve("")
    });
  })
  
}
  
export default $api;
