<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>

  <div class="other">
    <slot name="default"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  background-color: orange;
  width: 80px;
}

.center {
  background-color: skyblue;
  flex: 1;
}

.right {
  width: 80px;
  background-color: aquamarine;
}
</style>