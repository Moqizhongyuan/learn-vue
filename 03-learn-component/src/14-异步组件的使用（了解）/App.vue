<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentTab === item }" @click="itemClick(item)">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- include：组件定义时的名称来自于组件定义时的name选项 -->
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

  import { defineAsyncComponent } from 'vue'

  import Home from './views/Home.vue'
  import About from './views/About.vue'
  // const Category = import("./views/Category.vue")
  // import Category from './views/Category.vue'
  const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))

  export default {
    components: {
      Home,
      About,
      Category: AsyncCategory
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        // currentIndex: 0
        currentTab: "home"
      }
    },
    methods: {
      itemClick(tab) {
        this.currentTab = tab
      },
      homeClick(payload) {
        console.log("homeClick", payload)
      }
    }
  }
</script>

<style scoped>
.active {
  color: red;
}
</style>