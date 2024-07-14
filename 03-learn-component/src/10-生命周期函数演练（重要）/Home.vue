<template>
  <div>Home</div>
</template>

<script>
  export default {
    beforeUnmount() {
      console.log("home beforeUnmount")
    },
    unmounted() {
      console.log("home unmounted")
    }
  }
</script>

<style scoped>
</style>