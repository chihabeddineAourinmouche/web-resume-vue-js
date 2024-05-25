import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const REPO_NAME = '/web-resume-vue-js.github.io/'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [vue()],
  base: ['', REPO_NAME][1],// TODO - MAKE SURE TO ADDRESS THIS IN THE FUTURE
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
