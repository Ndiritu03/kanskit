import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace kanskit with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/kanskit/',
})
