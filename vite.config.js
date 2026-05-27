import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(function ({ mode }) {
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [vue(), tailwindcss()],

  base: '/',

  server: {
    port: Number(env.VITE_PORT) || 5173,
    host: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'oxc',
    rollupOptions: {
      output: {
        manualChunks: function (id) {
          if (!id.includes('node_modules')) return
          if (id.includes('element-plus') || id.includes('@headlessui')) return 'ui-vendor'
          if (id.includes('@vueuse') || id.includes('pinia')) return 'utils-vendor'
          if (id.includes('/vue/') || id.includes('@vue/')) return 'vue-vendor'
        },
      },
    },
  },
  }
})

