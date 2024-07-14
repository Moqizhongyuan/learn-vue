<template>
  <div class="home">
    <h2>Home Page</h2>
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';

  // 告诉vuex发送网络请求
  const store = useStore()
  
  store.dispatch("fetchHomeMultidataAction").then(res => {
    console.log("home中的then被回调:", res)
  })
</script>

<style scoped>
</style>