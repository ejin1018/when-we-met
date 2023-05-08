<template>
  <meetForm @tossAdd="postThis" />
  <meetRecord :meetList={meetLists} @tossDel="delThis" />
</template>

<script>
import axios from "axios";
import {ref,onMounted} from "vue";
import meetForm from "@/components/meetForm.vue";
import meetRecord from "@/components/meetRecord.vue";

export default {
  components:{meetForm,meetRecord},
  setup(){
    let meetLists = ref([]);
    const url = "https://port-0-react-mangoshop-server-6g2llfg440fy.sel3.cloudtype.app";
    const paramMeets = "/meets";
    
    const getMeetsAtHome = ()=>{
      // get
      axios.get(`${url}${paramMeets}`)
      .then((result)=>{
        meetLists.value = result.data.meets;
        // console.log('🏠',meetLists.value)
      }).catch((error)=>{
        console.log('조회실패',error)
      })
    }
    getMeetsAtHome();
    
    const postThis = (emitFromForm)=>{
      console.log('👊',emitFromForm);
      // post
      axios.post(`${url}${paramMeets}`,{
        when:emitFromForm.when,
        where:emitFromForm.where,
        cafe:emitFromForm.cafe,
        who:emitFromForm.who,
      }).then((result)=>{
        getMeetsAtHome();
        console.log('🐟포스트🐟',result);
      }).catch((err)=>{
        console.log('등록실패',err)
      })
    }

    const delThis = (emitFromRecord)=>{
      console.log('🖐️',emitFromRecord)
      // delete
      axios.delete(`${url}${paramMeets}/${emitFromRecord}`)
      .then((result)=>{
        console.log('🤖삭제🤖',result);
        getMeetsAtHome();
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    onMounted(()=>{
      getMeetsAtHome();
    })

    return{
      getMeetsAtHome,
      postThis,
      delThis,
      meetLists
    }
  }
}
</script>

<style>

</style>