<template>
  <div class="user">
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
  import { onBeforeRouteUpdate, useRoute } from 'vue-router';

  const route = useRoute()
  console.log(route.params.id)
  // 获取router跳转id
  onBeforeRouteUpdate((to, from) => {
    const route = useRoute()
    console.log("from:", from.params.id)
    console.log("to:", to.params.id)
  })

</script>

<style scoped>
</style>