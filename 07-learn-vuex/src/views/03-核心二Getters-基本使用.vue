<template>
  <div class="app">
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>friendsTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>

    <!-- 根据某一个id，获取朋友的信息 -->
    <h2>id-111的朋友信息：{{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-112的朋友信息：{{ $store.getters.getFriendById(112) }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {

    }
  }
</script>

<script setup>
  
</script>

<style scoped>
</style>