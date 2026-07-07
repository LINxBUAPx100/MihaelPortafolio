import { defineConfig } from 'vite'

// En build usamos el base path del repo (GitHub Pages sirve en /MihaelPortafolio/).
// En desarrollo servimos desde la raíz '/' para simplificar el preview local.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MihaelPortafolio/' : '/',
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    cssMinify: true,
  },
}))
