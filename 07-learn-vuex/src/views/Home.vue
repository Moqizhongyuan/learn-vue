<template>
  <div class="home">
    <h2>Home Page</h2>
    <!-- 1.使用state时，是需要state.moduleName.xxx -->
    <h2>Counter模块的counter: {{ $store.state.counter.count }}</h2>
    <!-- 2.使用getters时，是直接getters.xxx -->
    <h2>Counter模块的doubleCounter: {{ $store.getters["counter/doubleCount"] }}</h2>

    <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';

  // 告诉vuex发送网络请求
  const store = useStore()
  // 派发事件时，也是不需要跟模块名称
  // 提交mutation时，默认也是不需要跟模块名称
  store.dispatch("fetchHomeMultidataAction").then(res => {
    console.log("home中的then被回调:", res)
  })

  function incrementCount() {
    store.dispatch("counter/incrementCountAction")
  }
</script>

<style scoped>
</style>