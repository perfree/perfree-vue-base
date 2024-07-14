import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {index: "index.html", home: "src/modules/home/index.js"},
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
            const moduleName = match ? match[1] : null;
            if (chunkInfo.facadeModuleId.endsWith(".vue")){
              return `${moduleName}/[name]-view.js`
            }
            return `${moduleName}/[name].js`
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
