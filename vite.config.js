// Import the React plugin
import react from '@vitejs/plugin-react'

// Import Vite's config helper
import { defineConfig } from 'vite'

// Configure Vite
export default defineConfig({
  // GitHub Pages serves this project from /portfolio/
  base: '/portfolio/',

  // Enable React
  plugins: [react()],
})
