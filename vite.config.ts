import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { track } from 'motion/react-client'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    host:true
  }
})
