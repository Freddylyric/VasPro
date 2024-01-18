<!-- HomePage.vue -->
<template>
    <div>
      <HeroComponent />
      <ProductsComponent />
      <SolutionsComponent />
      <DevelopersComponent />
      <Locations />
      <Footer />
    </div>
  </template>
  
  <script>
  import HeroComponent from '../components/HeroComponent.vue';
  import ProductsComponent from '../components/ProductsComponent.vue';
  import SolutionsComponent from '../components/SolutionsComponent.vue';
  import DevelopersComponent from '../components/DevelopersComponent.vue';
  import Locations from '../components/Locations.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      HeroComponent,
      ProductsComponent,
      SolutionsComponent,
      DevelopersComponent,
      Locations,
      Footer,
    },
  };
  </script>
  