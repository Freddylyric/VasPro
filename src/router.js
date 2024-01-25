import { createRouter, createWebHistory } from 'vue-router';
//import ProductsComponentVue from './components/ProductsComponent.vue';
//import EngageComponentVue from './components/EngageComponent.vue';

import LandingPage from './views/LandingPage.vue';
import Solutions from './components/SolutionsComponent.vue';
import Developers from './components/DevelopersComponent.vue';
import EngageComponent from './components/EngageComponent.vue';
import GrowComponent from './components/GrowComponent.vue';



const routes = [
  { path: '/', component: LandingPage }, // Set up a default route for the home page
  { path: '/products', component: LandingPage },
  { path: '/solutions', component: Solutions },
  { path: '/developers', component: Developers },
  { path: '/engage', component: EngageComponent },
  { path: '/grow', component: GrowComponent },

];
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;


