import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

/*const appData = {
  app_port: import.meta.env.VITE_PORT
}*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
      ]
    },
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
