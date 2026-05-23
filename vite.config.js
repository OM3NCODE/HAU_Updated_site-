import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'your-repo-name' with the exact name of your GitHub repository
  base: '/HAU_Updated_site/', 
})