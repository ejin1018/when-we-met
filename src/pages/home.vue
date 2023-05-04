<template>
  <meetForm @tossAdd="postThis" />
  <meetRecord :meetList={meets} @tossDel="delThis" />
</template>

<script>
import axios from "axios";
import {ref} from 'vue';
import meetForm from "@/components/meetForm.vue";
import meetRecord from "@/components/meetRecord.vue";

export default {
  components:{meetForm,meetRecord},
  setup(){
    const meets = ref([]);
    const url = "https://port-0-react-mangoshop-server-6g2llfg440fy.sel3.cloudtype.app";
    const paramMeets = "/meets";
    
    const getMeetsAtHome = ()=>{
      axios.get(`${url}${paramMeets}`)
      .then((result)=>{
        meets.value = result.data.meets;
        console.log('🏠',meets.value)
      }).catch((error)=>{
        console.log('조회실패',error)
      })
    }
    getMeetsAtHome();
    
    const postThis = (emitFromForm)=>{
      console.log('👊',emitFromForm);
      // 여기서 post 하셈 !!
      axios.post(`${url}${paramMeets}`,{
        when:emitFromForm.when,
        where:emitFromForm.where,
        cafe:emitFromForm.cafe,
        who:emitFromForm.who,
      }).then((result)=>{
        console.log('🐟포스트🐟',result);
        getMeetsAtHome();
      }).catch((err)=>{
        console.log('등록실패',err)
      })
    }

    const delThis = (emitFromRecord)=>{
      console.log('🖐️',emitFromRecord)
      axios.delete(`${url}${paramMeets}/${emitFromRecord}`).then(()=>{
        getMeetsAtHome();
      }).catch((err)=>{
        console.log(err);
      })
    }
    
    return{getMeetsAtHome,postThis,delThis}
  }
}
</script>

<style>

</style>