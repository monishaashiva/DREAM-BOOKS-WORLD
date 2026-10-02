import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DREAM-BOOKS-WORLD/', // GitHub Pages repo name (no username hardcoded)
})
