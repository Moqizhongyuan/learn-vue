<template>
  <!-- 1.获取元素 -->
  <h2 ref="titleRef">我是标题</h2>
  <button ref="btnRef">按钮</button>

  <!-- 获取组件实例 -->
  <show-info ref="showInfoRef"></show-info>

  <button @click="getElements">获取元素</button>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    setup() {
      const titleRef = ref()
      const btnRef = ref()
      const showInfoRef = ref()
      function getElements() {
        console.log(titleRef.value)
      }

      // mounted生命周期函数
      onMounted(() => {
        console.log(titleRef.value)
        console.log(btnRef.value)
        console.log(showInfoRef.value)

        showInfoRef.value.showInfoFoo()
      })

      return {
        titleRef,
        getElements,
        btnRef,
        showInfoRef
      }
    }
  }
</script>

<style scoped>
</style>