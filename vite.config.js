/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    }
  },
  assetsInclude: ['**/*.JPG'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
    // Ajout de assetsDir pour s'assurer que les assets sont bien copiés
    assetsDir: 'assets'
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs'],
    }
  }
})
