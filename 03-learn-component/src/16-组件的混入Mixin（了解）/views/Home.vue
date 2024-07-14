<template>
  <div>Home组件</div>
</template>

<script>
  import messageMixin from '../mixins/message-mixin';
  export default {
    mixins: [messageMixin],
    data() {
      return {
        homeNames: [ "abc", "cba" ]
      }
    },
    components: {

    },
    created() {
      console.log("home created")
    },
    methods: {
      
    }
  }
</script>

<style scoped>
</style>