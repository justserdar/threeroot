import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['socket.io-client'],
  },
})
