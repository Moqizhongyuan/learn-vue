<template>
  <div class="app">
    <app-header></app-header>

    <app-content></app-content>

    <!-- app footer -->
    <app-footer></app-footer>

  </div>
</template>

<script>
  import AppHeader from './component/AppHeader.vue'
  import AppContent from './component/AppContent.vue'
  import AppFooter from './component/AppFooter.vue'

  export default {
    components: {
      AppHeader,
      AppContent,
      AppFooter
    }
  }
</script>

<style scoped>
</style>