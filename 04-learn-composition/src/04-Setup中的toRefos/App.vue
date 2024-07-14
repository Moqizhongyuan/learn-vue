<template>
  <div>
    <h2>info: {{ name }} - {{ age }} - {{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height = 1.89">修改height</button>
  </div>
</template>

<script setup>
  import { reactive, toRef, toRefs } from 'vue';

    const info = reactive({
      name: "why",
      age: 18,
      height: 1.88
    })

    const { name, age } = toRefs(info)
    const height = toRef(info, "height")
</script>

<style scoped>
</style>