import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
