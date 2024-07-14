<template>
  <h2>Home计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <button @click="popularClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songMenuClick">首页-歌单</button>

  <div class="scroll">
    <h2>x: {{ scrollPosition.x }}</h2>
    <h2>y: {{ scrollPosition.y }}</h2>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import useCounter from '../hooks/useCounter'
  import useTitle from '../hooks/useTitle'
  import { useScrollPosition } from '../hooks/useScrollPosition';


  export default {
    setup() {
      // 1.counter逻辑
      const { counter, increment, decrement } = useCounter()

      // 2.修改标题
      const title = useTitle("首页")

      // 3.监听按钮的点击
      function popularClick() {
        title.value = "首页-流行"
      }
      function hotClick() {
        title.value = "首页-热门"
      }
      function songMenuClick() {
        title.value = "首页-歌单"
      }

      // 4.获取滚动位置
      const { scrollPosition } = useScrollPosition()
      console.log(scrollPosition)

      return {
        counter,
        increment,
        decrement,
        popularClick,
        hotClick,
        songMenuClick,
        scrollPosition
      }
    }
  }
</script>

<style scoped>
</style>