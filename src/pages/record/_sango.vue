<template>
  <h1>for sango</h1>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  setup(){
    const route = useRoute();
    console.log(route.params.sango)
  }
}
</script>

<style>

</style>