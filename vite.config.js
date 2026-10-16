// Import the React plugin
import react from '@vitejs/plugin-react'

// Import Vite's config helper
import { defineConfig } from 'vite'

// Configure Vite
export default defineConfig({
  // Enable React
  plugins: [react()],
})