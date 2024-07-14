<template>
  <div>Home组件：{{ name }} - {{ age }}</div>
  <button @click="homeBtnClick">homeBtn</button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ["homeClick"],
    methods: {
      homeBtnClick() {
        this.$emit("homeClick", "home")
      }
    }
  }
</script>

<style scoped>
</style>