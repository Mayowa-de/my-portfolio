import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindConfig from './tailwind.config'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts:["eb0c5f82ebf7.ngrok-free.app"]
  },
  plugins: [
    react()],
})
