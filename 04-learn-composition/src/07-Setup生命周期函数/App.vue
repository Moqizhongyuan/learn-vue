<template>
  <div>AppContent</div>
</template>

<script>
import { onMounted } from 'vue';

  export default {
    // created() {

    // },
    // beforeMount() {

    // },
    // mounted() {

    // },
    // beforeUpdate() {

    // },
    // updated() {
      
    // }
    setup() {
      // 在执行setup函数过程中，你需要注册别的生命周期函数
      onMounted(() => {
        console.log("nomounted")
      })
      onMounted(() => {
        console.log("nomounted")
      })
      onMounted(() => {
        console.log("nomounted")
      })
    }
  }
</script>

<style scoped>
</style>