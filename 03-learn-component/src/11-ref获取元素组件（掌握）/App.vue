<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{ color: titleColor }">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner" />
  </div>
</template>

<script>
  import Banner from './Banner.vue'

  export default {
    components: {
      Banner
    },
    data() {
      return {
        message: "Hello world",
        titleColor: "red"
      }
    },
    methods: {
      changeTitle() {
        // 1.不要主动去获取DOM，并且修改DOM内容
        this.message = "你好啊，李银河"
        this.titleColor = "blue"

        // 2.获取h2/button元素
        console.log(this.$refs.title)
        console.log(this.$refs.btn)

        // 3.获取banner组件：组件实例
        console.log(this.$refs.banner)
        // 3.1.在父组件中可以主动调用子组件的对象方法
        this.$refs.banner.bannerClick()

        // 3.2.获取banner组件实例，获取banner中的元素
        console.log(this.$refs.banner.$el)

        // 3.3.如果banner template是多个根，拿到的是第一个node节点
        // 注意开发中不要再一个组件中有多个根
        console.log(this.$refs.banner.$el.nextSibling)

        // 4.组件实例还有两个属性
        console.log(this.$parent)
        console.log(this.$root)
      }
    }
  }
</script>

<style scoped>
</style>