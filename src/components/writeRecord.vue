<template>
  <div class="record-wrap">
    <div class="record-container">
      <form action="post" v-on:submit.prevent="recordSubmit">
        <div class="record-top">
          <router-link :to="{name:'HOME'}" class="record-top-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09Z"/></g></svg>
            <p>뒤로</p>
          </router-link>
          <div class="record-top-middle">
            <p class="middle-when">{{ dayjs(thisMeet.when).format('MM월 DD일') }}</p>
            <p class="middle-who">{{ name }} 의 일지</p>
          </div>
          <button type="submit" class="record-top-submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M19 19a1 1 0 0 1 .117 1.993L19 21h-7a1 1 0 0 1-.117-1.993L12 19h7ZM16.096 4.368a2.5 2.5 0 0 1 3.657 3.405l-.122.13L8.735 18.8a1.5 1.5 0 0 1-.32.244l-.12.06l-3.804 1.73c-.808.367-1.638-.417-1.365-1.225l.04-.1l1.73-3.805a1.5 1.5 0 0 1 .213-.34l.09-.1L16.097 4.368Zm2.121 1.414a.5.5 0 0 0-.638-.057l-.069.057L6.678 16.614l-.589 1.297l1.296-.59L18.217 6.49a.5.5 0 0 0 0-.708Z"/></g></svg>
            <p class="record-submit-text">등록</p>
          </button>
        </div>
        <div class="record-bottom">
          <textarea 
            class="record-bottom-text" 
            name="record-box" 
            rows="15" 
            :value=userRecord ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import dayjs from "dayjs";
import axios from 'axios';
import router from '../router'

export default {
  setup(){
    const url = "https://port-0-react-mangoshop-server-6g2llfg440fy.sel3.cloudtype.app";
    const paramMeets = "/meets";

    const thisMeet = ref([]);
    const route = useRoute();
    const name = route.query.name;
    const user = route.params.username;
    let recordId = route.query.id;
    let userRecord = ref();
    
    const getThisMeet = ()=>{
      axios.get(`${url}${paramMeets}/${recordId}`)
      .then((result)=>{
        thisMeet.value = result.data.meets;
        console.log('🏠',thisMeet.value)
        console.log('💁‍♂️',user)

        if(thisMeet.value){
          if(user === 'sango'){
            userRecord.value = thisMeet.value.sango 
          }else if(user === 'aek'){
            userRecord.value = thisMeet.value.aek 
          }else if(user === 'gugu'){
            userRecord.value = thisMeet.value.gugu 
          }else if(user === 'ejin'){
            userRecord.value = thisMeet.value.ejin 
          }
        }

      }).catch((error)=>{
        console.log('조회실패',error)
      })
    }
    getThisMeet();
    

    const recordSubmit = (e)=>{
      if(e.target[1].value){
        // 값이 있을 때
        if(user === 'sango'){
          axios.post(`${url}${paramMeets}/${recordId}`,{
            sango:e.target[1].value,
            id:recordId
          })
        }else if(user === 'aek'){
          axios.post(`${url}${paramMeets}/${recordId}`,{
            aek:e.target[1].value,
            id:recordId
          })
        }else if(user === 'gugu'){
          axios.post(`${url}${paramMeets}/${recordId}`,{
            gugu:e.target[1].value,
            id:recordId
          })
        }else if(user === 'ejin'){
          axios.post(`${url}${paramMeets}/${recordId}`,{
            ejin:e.target[1].value,
            id:recordId
          })
        }
        router.push('/');
      }else{
        console.log('값 없음')
      }
    }

    return {
      thisMeet,
      dayjs,
      name,
      user,
      recordSubmit,
      userRecord,
    }
  }
}
</script>

<style>

</style>