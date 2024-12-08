import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'path'
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//TODO install ts types 
export default ({ mode }:any) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
    
    return defineConfig({
      plugins: [react()],
      base: process.env.VITE_BASE_URL || '/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
      },
      server:{
        port: Number(process.env.VITE_PORT) ,
        /*proxy:{
          '/api': {
            target: process.env.VITE_BACKEND_API_BASE_URL,
            changeOrigin: true,
            rewrite: (path:string) => path.replace(/^\/api/, '')
          }
        }*/
      }
    })
  };