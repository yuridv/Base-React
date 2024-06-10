import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }

  return {
    plugins: [react()],
    base: './',
    build: {
      outDir: 'build',
      // target: 'esnext',
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    esbuild: {
      target: 'esnext',
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    server: {
      port: 80,
    },
  }
})