<template>
  <!-- 1.展示个人信息 -->
  <!-- 如果当前的属性是一个非prop的attribute，那么该属性会默认添加到子组件的根元素上 -->
  <show-info name="why" :age="18" :height="1.88" address="广州市" abc="cba" class="active" />
  <show-info name="kobe" :age="30" :height="1.87" />
  <show-info :age="100" show-message="哈哈哈哈"/>
  <!-- 2.展示 -->
</template>

<script>
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    }
  }
</script>

<style scoped>
</style>