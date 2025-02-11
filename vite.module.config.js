import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import progress from 'vite-plugin-progress'
import {viteExternalsPlugin} from "vite-plugin-externals";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const entry = process.env.entry;
const moduleName = process.env.moduleName;
export default defineConfig({
  plugins: [
    vue(),
    progress(),
    viteExternalsPlugin({
      vue: 'Vue',
      "vue-router": "VueRouter",
      "element-plus": "ElementPlus",
    }),
    cssInjectedByJsPlugin(),
  ],

  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      formats: ["es"],
      entry: entry,
      name: `_module_${moduleName}`
    },
    outDir: `dist/modules/${moduleName}`,
    modulePreload: false,
    rollupOptions: {
      external: [
        "vue",
        "vue-router",
        "element-plus",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/[name][extname]';
        },
        entryFileNames: (chunkInfo)=> {
          return `[name].js`
        },
        chunkFileNames: (chunkInfo)=> {
          if (chunkInfo.facadeModuleId) {
            if (chunkInfo.facadeModuleId.endsWith(".vue")){
              return `[name]-view.js`
            }
            return `[name].js`
          }

          return 'lib/[name].js'
        },
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
          "element-plus": "ElementPlus",
        }
      },

    }
  }
})
