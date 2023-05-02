import {createRouter, createWebHistory} from 'vue-router';
import HOME from '../pages/home.vue';
import Sango from '../pages/record/_sango.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'HOME',
      component:HOME
    },
    {
      path:'/record/:sango',
      name:'SANGO',
      component:Sango
    },
  ]
});

export default router;