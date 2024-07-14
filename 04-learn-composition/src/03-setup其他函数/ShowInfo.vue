<template>
  <h2>ShowInfo: {{ info }}</h2>
  <!-- 代码没有错误，但是违背规范（单向数据流） -->
  <button @click="info.name = 'kobe'">ShowInfo按钮</button>
  <!-- 正确做法：单项数据流 -->
  <button @click="ShowInfoBtnClick">ShowInfo按钮</button>
  <hr>
  <!-- 使用readonly的数据 -->
  <h2>ShowInfo: {{ roInfo }}</h2>
  <!-- 代码就会无效（报警告） -->
  <!-- <button @click="roInfo.name = 'james'">ShowInfo按钮</button> -->
  <!-- 正确做法 -->
  <button @click="roInfoBtnClick">roInfo按钮</button>
</template>

<script>
  export default {
    // reactive数据
    props: {
      info: {
        type: Object,
        default: () => ({})
      },
      // readonly数据
      roInfo: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["changeInfoName", "changeRoInfoName"],
    setup(props, context) {
      function ShowInfoBtnClick() {
        context.emit("changeInfoName", "kobe")
      }

      function roInfoBtnClick() {
        context.emit("changeRoInfoName", "james")
      }

      return {
        ShowInfoBtnClick,
        roInfoBtnClick
      }
    }
  }
</script>

<style scoped>
</style>