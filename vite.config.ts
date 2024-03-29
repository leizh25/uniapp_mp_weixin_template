import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      // 使用
      imports: ["vue", "uni-app", "pinia"],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      dts: "src/auto-import.d.ts",
      // 如有用到eslint记得加上写段，没有用到可以忽略
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入，'vue'为默认值
      // extensions: ['vue'],
      // // 解析组件，这里以 Element Plus 为例
      // // resolvers: [],
      // // 生成components.d.ts
      dts: "components.d.ts",
      // // 遍历子目录
      // deep: true,
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
