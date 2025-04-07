
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SPA_react/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
})
