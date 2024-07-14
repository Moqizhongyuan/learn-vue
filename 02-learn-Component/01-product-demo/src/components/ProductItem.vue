<template>
  <div class="product">
    <h2>{{ title }}</h2>
    <p>我是商品描述</p>
    <div>价格：{{ price }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "我还是标题",
      price: 9.9
    }
  }
}

</script>

<style>
</style>