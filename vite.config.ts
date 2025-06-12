import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your ngrok URL:
const allowedHost = 'a5a9-118-185-219-17.ngrok-free.app'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    allowedHosts: [allowedHost],
    host: true,
    port: 5173,
  }
})
