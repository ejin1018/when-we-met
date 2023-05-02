<template>
  <writeRecord />
</template>

<script>
  import writeRecord from '@/components/writeRecord.vue';
  import { useRoute } from 'vue-router';

  export default ({
    components:{writeRecord},
    setup(){
      const route = useRoute();
      console.log(route.params)
    }
  })
</script>

<style>

</style>