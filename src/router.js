import { createRouter, createWebHistory } from 'vue-router';
//import ProductsComponentVue from './components/ProductsComponent.vue';
//import EngageComponentVue from './components/EngageComponent.vue';

import LandingPage from './views/LandingPage.vue';

import Developers from './components/landing_components/DevelopersComponent.vue';
import Pricing from './views/Pricing.vue';
import Reach from './views/Reach.vue';
import SignUp from './views/auth/SignUp.vue'
import Login from './views/auth/Login.vue'
import Verify from './views/auth/Verify.vue'
import ForgotPassword from './views/auth/ForgotPassword.vue'
import Solutions from './components/landing_components/SolutionsComponent.vue';

import EngageComponent from './components/EngageComponent.vue';
import GrowComponent from './components/GrowComponent.vue';



const routes = [
  { path: '/', component: LandingPage }, // Set up a default route for the home page
  { path: '/products', name: 'Products', component: LandingPage },
  { path: '/solutions', name: 'Solutions', component: Solutions },
  { path: '/developers', name: 'Developers', component: Developers },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/reach', name: 'Reach', component: Reach },
  { path: '/signup', name: 'SignUp', component: SignUp},
  { path: '/login', name: 'Login', component: Login},
  { path: '/verify', name: 'Verify', component: Verify},
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  { path: '/engage', name: 'Engage', component: EngageComponent },
  { path: '/grow', name: 'Grow', component: GrowComponent },

];
  

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
