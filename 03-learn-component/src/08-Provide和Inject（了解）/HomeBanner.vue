<template>
  <div class="banner">
    <h2>HomeBanner: {{ name }} - {{ age }} - {{ message }}</h2>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "message"]
  }
</script>

<style scoped>
</style>