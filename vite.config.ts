import * as path from "node:path"

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
      '@': path.resolve(__dirname, "src")
    }
  },
  /*server: {
    port: appData.app_port,
    proxy: {}
  }*/
})
