import { createRouter, createWebHistory } from 'vue-router';
//import ProductsComponentVue from './components/ProductsComponent.vue';
//import EngageComponentVue from './components/EngageComponent.vue';

import LandingPage from './views/LandingPage.vue';
import Solutions from './components/landing_components/SolutionsComponent.vue';
import Developers from './components/landing_components/DevelopersComponent.vue';
import Pricing from './views/Pricing.vue';
import Reach from './views/Reach.vue';


const routes = [
  { path: '/', component: LandingPage }, // Set up a default route for the home page
  { path: '/products', component: LandingPage },
  { path: '/solutions', component: Solutions },
  { path: '/developers', component: Developers },
  { path: '/pricing', component: Pricing },
  { path: '/reach', component: Reach },


];
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;