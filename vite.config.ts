import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your ngrok URL:
const allowedHost = 'c6d4-2409-40f4-37-3ed8-e9e3-27bc-9ae-6edf.ngrok-free.app'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    allowedHosts: [allowedHost],
    host: true,
    port: 5173,
  }
})
