/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PORT: string,
    readonly VITE_BACKEND_API_BASE_URL :string,
    readonly VITE_BASE_URL:string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }