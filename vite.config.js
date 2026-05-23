import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 1. Force the base path to match your repo name exactly
  base: '/HAU_Updated_site-/',
  build: {
    // 2. Ensure Vite builds explicitly into the 'dist' directory at the root
    outDir: 'dist',
    // 3. Prevent any asset path compression errors
    assetsDir: 'assets',
  }
})