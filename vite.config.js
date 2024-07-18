import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import progress from 'vite-plugin-progress'
import {viteExternalsPlugin} from "vite-plugin-externals";
import {createHtmlPlugin} from "vite-plugin-html";
import {viteStaticCopy} from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
      vue(),
    viteStaticCopy({
        targets: [
          { src: './node_modules/vue/dist/vue.global.prod.js', dest: 'assets/vue' },
          { src: './node_modules/vue-router/dist/vue-router.global.prod.js', dest: 'assets/vue-router' },
          // { src: './node_modules/axios/dist/axios.min.js', dest: 'assets/axios' },
          { src: './node_modules/element-plus/dist', dest: 'assets/element-plus' }
        ]
      }),
      createHtmlPlugin({
        minify: true,
        template: 'index.html',
        inject: {
          data: {
            title: 'index',
            injectScript: ` 
                <script src="/assets/vue/vue.global.prod.js"></script>
                <script src="/assets/vue-router/vue-router.global.prod.js"></script>
                <script src="/assets/element-plus/dist/index.full.min.js"></script>
            `,
          },
        },
      }),
      viteExternalsPlugin({
        vue: 'Vue',
        "vue-router": "VueRouter",
        "element-plus": "ElementPlus",
      }),
    progress()
  ],
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
    outDir: "dist",
    modulePreload: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/[name]/[name][extname]';
        },
        chunkFileNames: (chunkInfo)=> {
          return 'assets/[name]/[name].js'
        },
      },

    }
  }
})
