<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="TabItemClick"/>

    <!-- <tab-control :titles="['流行', '最新', '优选']"/> -->

    <!-- 2.展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>

    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="TabItemClick">
      <!-- <template v-slot="props"> -->
      <template #default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>


    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="TabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </tab-control>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue';
  export default {
    components: {
      TabControl,
    },
    data() {
      return {
        pageContents: [ "衣服列表", "鞋子列表", "裤子列表" ],
        currentIndex: 0
      }
    },
    methods: {
      TabItemClick(index) {
        console.log("App:", index)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
</style>