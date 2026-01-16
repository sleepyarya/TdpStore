import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/roblox-api': {
        target: 'https://users.roblox.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/roblox-api/, ''),
      },
    },
  },
})
