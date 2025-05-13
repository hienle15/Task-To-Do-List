import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    allowedHosts: ['task-to-do-list-cfnq.onrender.com'],
    host: true, // hoặc '0.0.0.0' nếu cần
  },
})
