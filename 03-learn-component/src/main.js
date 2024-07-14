import { createApp } from 'vue'
// import { sum } from './utils/math'
// import App from './01-组件的嵌套使用/App.vue'
// import App from './02-组件通信-父传子/App.vue'
// import App from './03-组件通信-子传父/App.vue'
// import App from './04-组件通信-案例练习/App.vue'
// import App from './05-组件插槽-基本使用/App.vue'
// import App from './06-组件插槽-具名插槽/App.vue'
import App from './07-组件插槽-作用域插槽/App.vue'
// import App from './08-Provide和Inject/App.vue'
// import App from './09-事件总线的使用/App.vue'
// import App from './10-生命周期函数演练/App.vue'
// import App from './11-ref获取元素组件/App.vue'
// import App from './12-动态组件的使用/App.vue'
// import App from './13-Keep-Alive的使用/App.vue'
// import App from './14-异步组件的使用/App.vue'
// import App from './15-组件的v-model/App.vue'
// import App from './16-组件的混入Mixin/App.vue'


// sum(20, 30)
// import函数可以让webpage对导入的文件进行分包处理
// import("./utils/math").then(res => {
//   res.sun(20, 30)
// })

const app = createApp(App)
app.mixin({
  created() {
    console.log("mixin created")
  }
})
app.mount('#app')
