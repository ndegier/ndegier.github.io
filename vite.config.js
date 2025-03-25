import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/WebsiteMayra/', // This should match your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
