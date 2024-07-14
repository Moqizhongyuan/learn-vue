import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import hyRequest from './service/index'

createApp(App).mount('#app')

hyRequest.request({
  url: "http://123.207.32.32:9001/lyric?id=500665346"
}).then(res => {
  console.log("res", res)
})

hyRequest.get({
  url: "http://123.207.32.32:9001/lyric?",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res)
})