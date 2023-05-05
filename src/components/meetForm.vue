<template>
  <div class="choose-wrap">
    <form action="post" class="choose-container" v-on:submit.prevent="meetSubmit">
      <div class="choose-container-left">
        <label class="choose-when">
          <input type="date" v-model="meetDate" v-on:click="getDate">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7h18Zm-5-9a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1Z"/></g></svg>
          <p>{{ meetDate?dayjs(meetDate).format('MM DD'):'' }}</p>
        </label>
      </div>
      <div class="choose-container-middle">
        <label class="choose-location">
          <input v-model="meetWhere" type="text" placeholder="지역">
        </label>
        <label class="choose-cafe">
          <input v-model="meetCafe" type="text" placeholder="카페">
        </label>
      </div>
      <div class="choose-container-right">
        <select name="cafe_turn_name" id="cafe_turn">
          <option value="현우">현우</option>
          <option value="규연">규연</option>
          <option value="애경">애경</option>
          <option value="이진">이진</option>
        </select>
        <button type="submit">등록</button>
      </div>
    </form>
    <p v-if="submitErr" class="choose-error">{{ emptyHere }}! 👾</p>
  </div>
</template>

<script>
import {ref} from "vue";
import dayjs from 'dayjs';

export default {
  setup(props,context){
    let meetDate = ref('');
    let getDate = ()=>{
      console.log(meetDate.value);
    }

    const submitErr = ref(false);
    let emptyHere = ref('');
    let meetWhere = ref('');
    let meetCafe = ref('');
    const meetSubmit = (meet)=>{
      if(!meetDate.value || !meetWhere.value || !meetCafe.value){
        submitErr.value = true;
        emptyHere.value = '비어있는 입력창이 있습니다';
        if(!meetDate.value && !meetWhere.value && !meetCafe.value){
          emptyHere.value = '입력된 값이 없습니다';
        }
      }else{
        submitErr.value = false;
        meetDate.value = '';
        meetWhere.value = '';
        meetCafe.value = '';
        
        context.emit("tossAdd",{
          when:meet.target[0].value,
          where:meet.target[1].value,
          cafe:meet.target[2].value,
          who:meet.target[3].value
        });
      }
    }
    
    return {
      meetDate,
      getDate,
      dayjs,
      meetSubmit,
      submitErr,
      emptyHere,
      meetWhere,
      meetCafe
    }

  }
}
</script>

<style>

</style>