import axios from "axios";
import type { AxiosInstance } from "axios";
import { ERR_NETWORK, LS_KEY_ACCESS_TOKEN } from "@/const/index";

let baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL
if(!import.meta.env.PROD){
  baseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL
}else{
  baseUrl = "/"
}
//export const BASE_URL_BACKEND:string = baseUrl

const $api = axios.create({
  baseURL: baseUrl ,
  withCredentials:true
});

$api.interceptors.request.use((config) => {
  //const access_token:string =authStore.getToken() + ''
  const access_token:string = localStorage.getItem(LS_KEY_ACCESS_TOKEN)+''

  console.log(`Bearer ${access_token}`)
  config.headers.Authorization = `Bearer ${access_token}`;
 // config.headers['Access-Control-Allow-Origin'] = '*'
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
    if(error.code === ERR_NETWORK){
      return Promise.reject(error)
    }
    if(error.response.status === 500){
      return Promise.reject(error)//TODO test
      //authStore.resetState() //its auto because reload page
      //window.location.replace("/error?msg="+BACKEND_500_ERRORE_SERVICE)//not see header navigation because page reload
    }
    if(error.response.status == 401 && error.config && !originalRequest._isRetry){
        originalRequest._isRetry = true
        console.log("Do refreshToken")
        //const access_token  = await refreshToken()
        const access_token  = "1231";

        console.log("Do retry originalRequest")
        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return await axios.request(originalRequest)
    }
    console.log("AXIOS REJECT REQUEST")
    return Promise.reject(error)
  }
)

const $loginApi:AxiosInstance = axios.create({
  baseURL: baseUrl ,
});



export const $apiLogin = $loginApi

/*async function refreshToken(){
  return new Promise((resolve,reject)=>{
    var options = getRefreshTokenOptionsRequest(authStore.dataAuth.refresh_token)
    axios.request(options).then(function (response) {
      /*
      response.data = {
        access_token:  "CpKT3z5UttFcdM3NEBTamZvvE9AVA42hXPnPAmtDkWkU4i_MuDRYidyZb414bwHYKJ2HanQK29E5OUmYJIVgNEGas_Bb_zKIKD7uyD0RwLvmjzkaGuXOBe5ro1c82_6v",
        expires_in: 599,
        refresh_token: "qhpLr_d5dj1yd4ot59cXHAwY1ruJ16G12mfco3zW9UuTRx4jl1YgnJbp_F154W1YWe4Z1IIuiCZp-oq46dIb8sJtlnlqcdi8s2dL9fmpwP1lYwlGLSC6Q3zrDeUXEo4X",
        scope: "notebook_web_posts email profile",
        token_type: "Bearer",
      }
        
       authStore.setIsAuthUser(true,response.data)
       resolve(response.data.access_token)
    }).catch((error)=>{
      authStore.logout('')//TODO (2)show message(use search)  1) when you logout on click 2) when you logout because token expired
    });
  })
  
}
  */
export default $api;
