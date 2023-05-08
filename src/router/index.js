import {createRouter, createWebHistory} from 'vue-router';
import HOME from '../pages/home.vue';
import WRITE from '../pages/record/_write.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'HOME',
      component:HOME
    },
    {
      path:'/record/:username',
      name:'WRITE',
      component:WRITE
    }
  ]
});

export default router;