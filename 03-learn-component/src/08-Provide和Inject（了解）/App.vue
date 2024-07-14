<template>
  <Home></Home>
  <h2>{{ message }}</h2>
  <button @click="message = 'hello world'">修改message</button>
</template>

<script>
  import { computed } from 'vue'
  import Home from './Home.vue';
  export default {
    data() {
      return {
        message: "Hello App"
      }
    },
    components: {
      Home
    },
    provide() {
      return {
        name: "why",
        age: 18,
        message: computed(() => {
          return this.message
        })
      }
    }
  }
</script>

<style scoped>
</style>