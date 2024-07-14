<template>
  <div>AppContent</div>
  <button @click="changeTitle">修改title</button>

  <!-- 1.计数器 -->
  <!-- <hr>
  <home></home>
  <hr>
  <about></about> -->

  <!-- 2.home和about页面的切换 -->
  <button @click="currentPage = 'home'">home</button>
  <button @click="currentPage = 'about'">about</button>

  <component :is="currentPage"></component>

  <div class="content"></div>
  <!-- <hr> -->
  <!-- <button @click="currentPosition">获取ScrollPosition</button> -->

  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
</template>

<script>
  // import { useScrollPosition } from './hooks/useScrollPosition'
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import useTitle from './hooks/useTitle'
  import { ref } from 'vue'

  export default {
    components: {
      Home,
      About
    },
    setup() {
      // function currentPosition() {
      //   console.log(useScrollPosition())
      // }
      const currentPage = ref("home")

      function changeTitle() {
        useTitle("app title")
      }

      return {
        changeTitle,
        currentPage,
        // currentPosition
      }
    }
  }
</script>

<style scoped>
.content {
  width: 3000px;
  height: 100px;
  background-color: orange;
}
</style>