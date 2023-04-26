<template>
  <meetForm />
  <meetRecord />
</template>

<script>
import axios from "axios";
import meetForm from "@/components/meetForm.vue";
import meetRecord from "@/components/meetRecord.vue";
export default {
  components:{meetForm,meetRecord},
  setup(){
    const url = "https://port-0-react-mangoshop-server-6g2llfg440fy.sel3.cloudtype.app";
    const paramMeets = "/meets";

    axios.get(`${url}${paramMeets}`).then((success)=>{
      console.log(success.data)
    }).catch((error)=>{
      console.log(error);
    })
  }
}
</script>

<style lang="scss">
  @import './scss/style.scss';
</style>