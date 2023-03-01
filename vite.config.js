import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:" https://edisson89.github.io/test-productos/",
  plugins: [react()],
})
