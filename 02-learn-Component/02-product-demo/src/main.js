import { createApp } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

import "./utils/abc/cba/nba/index"

// 1.jsconfig.json的演练
// 作用：给vscode来进行读取，vs在读取到其中的内容时，给我们代码更加友好的提示
// 2.引入Vue的版本
// 默认vue版本：runtime，vue-loder完成template的编译过程
// vue.esm-bundler：runtime + compile，对template进行编译
// 3.补充：单文件vue.style是有自己的作用域
// 4.补充：vite创建一个vue项目


// 元素->createVNode:vue中的源码来完成
// const App = {
//   template: `<h2>Hello Vue3 App</h2>`,
//   data() {
//     return {}
//   }
// }

createApp(App).mount('#app')
