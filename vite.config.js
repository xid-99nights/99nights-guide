import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import path from 'path'
import mdRollup from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

// https://vite.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    mdRollup({
      remarkPlugins: [remarkGfm]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})