import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/urbancart/',
  build: {
    // Existing 'urbancart' settings (keep as it is)
    rollupOptions: {
      output: {
        // Add manualChunks option here
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux'] // Extract these libraries into a separate chunk
        }
      }
    }
  }
})
