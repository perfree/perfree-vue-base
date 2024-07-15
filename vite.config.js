import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import progress from 'vite-plugin-progress'
import fs from 'fs'
import path from 'path'
import ElementPlus from "element-plus";

/**
 * 扫描生成入口文件
 * @returns {{index: string}}
 */
function scanEntry () {
  let result = {core: "index.html"};
  const modulesDir = path.resolve(__dirname, 'src/modules');
  fs.readdirSync(modulesDir).forEach(moduleName => {
    const modulePath = path.join(modulesDir, moduleName, 'index.js');
    if (fs.existsSync(modulePath)) {
      result[moduleName] = modulePath;
    }
  });
  return result;
}

// 定义入口参数
const entry = scanEntry();
export default defineConfig({
  plugins: [vue(), progress()],
  optimizeDeps: {
    enabled: true,
  },
  server: {
    port: 4201,
    host: '0.0.0.0',
  },
  base: "/",
  define: {
    process: {
      env: {}
    }
  },
  build: {
    modulePreload: false,
    lib: {
      entry: entry,
      formats: ["es"],
      name: "Perfree"
    },
    rollupOptions: {
    /*  external: [
        "vue",
        "vue-router",
          "ElementPlus"
      ],*/
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/[name][extname]';
        },
        entryFileNames: (chunkInfo)=> {
          return 'modules/[name]/[name].js'
        },
        chunkFileNames: (chunkInfo)=> {
          if (chunkInfo.facadeModuleId) {
            if (chunkInfo.facadeModuleId.indexOf("_import-prod.js") >= 0) {
              return 'lib/[name].js'
            }
            const match = chunkInfo.facadeModuleId.match(/\/src\/modules\/([^/]+)/);
            if (chunkInfo.facadeModuleId.endsWith(".vue")){
              return match? `modules/${match[1]}/[name]-view.js` : `[name]-view.js`
            }
            return match? `modules/${match[1]}/[name].js` : `[name].js`
          }

          return 'lib/[name].js'
        },
      /*  globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
          "ElementPlus": "ElementPlus"
        }*/
      },

    }
  }
})
