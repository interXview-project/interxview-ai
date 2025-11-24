import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],resolve: {
=======
  plugins: [react()], resolve: {
>>>>>>> 7580a3c2d9b766dca7c47449ddf5ae602ef908b3
    dedupe: ['react', 'react-dom']
  }
})
