<template>
  <div>
    <form>
      账号：<input type="text" v-model="account.username">
      密码：<input type="password" v-model="account.password">
    </form>

    <form>
        账号：<input type="text" v-model="username">
        密码：<input type="password" v-model="password">
    </form>

    <hr>

    <show-info :name="name" :age="age"></show-info>
  </div>
</template>

<script>
  import ShowInfo from './ShowInfo.vue'
  import { onMounted, reactive,ref } from 'vue'

  export default {
    components: {
      ShowInfo
    },
    data() {
      return {
        message: "hello world"
      }
    },
    setup() {
      // 定义响应式数据：reactive/ref
      // 强调：ref也可以定义复杂的数据
      const info = ref({

      })
      console.log(info.value)
      // 1.reactive的使用场景
      // 1.1.条件一：reactive应用于本地数据
      // 1.2.条件二：多个数据之间是有关系/联系（聚合的数据，组织在一起会有特定的作用）
      const account = reactive({
        username: "coderwhy",
        password: "123456"
      })

      const username = ref("coderwhy")
      const password = ref("123456")

      // 2.ref的应用场景：其他的场景基本都用ref(computed)
      // 2.1.定义本地的一些简单数据
      const message = ref("Hello World")
      const counter = ref(0)
      const name = ref("why")
      const age = ref(18)

      // 2.定义网络中获取的数据也是使用ref
      // const music = reactive([])
      const music = ref([])
      onMounted(() => {
        const serveMusic = ["海阔天空", "小苹果", "野狼"]
        music.value = serveMusic
      })

      return {
        account,
        username,
        password,
        name,
        age
      }
    }
  }
</script>

<style scoped>
</style>