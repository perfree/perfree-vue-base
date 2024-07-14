import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
  plugins: [vue(), commonjs()],
  server: {
    port: 4200,
    host: '0.0.0.0',
  },
  base: "/",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      entry: {index: "index.html", home: "src/modules/home/index.js"},
      formats: ["es"],
      name: "Perfree"
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-router",
      ],
      output: {
        entryFileNames: (chunkInfo)=> {
          return '[name]/[name].js'
        },
        chunkFileNames: (chunkInfo)=> {
          if (chunkInfo.facadeModuleId) {
            const match = chunkInfo.facadeModuleId.match(/\/src\/modules\/([^/]+)/);
            if (chunkInfo.facadeModuleId.endsWith(".vue")){
              return match? `${match[1]}/[name]-view.js` : `[name]-view.js`
            }
            return match? `${match[1]}/[name].js` : `[name].js`
          }

          return '[name]/[name].js'
        },
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        }
      }
    }
  }
})
