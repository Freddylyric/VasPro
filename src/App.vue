<template>
  <v-app class="whitebg">
    <v-main>
        <Header />
        <HeroComponent />
        <ProductsComponent />
        <SolutionsComponent />
        <DevelopersComponent/>
    </v-main>
  </v-app>
</template>

<script >
import Header from './components/Header.vue'
import HeroComponent from './components/HeroComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import SolutionsComponent from './components/SolutionsComponent.vue'
import DevelopersComponent from './components/DevelopersComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeroComponent,
    ProductsComponent,
    SolutionsComponent,
    DevelopersComponent

  },
  data(){
    return {
      menus: [
        {
          title: 'Products',
          route: '/products',
        },
        {
          title: 'Solutions',
          route: '/solutions',
        },
        {
          title: 'Developers',
          route: '/developers',
        },
        {
          title: 'Pricing',
          route: '/pricing',
        },
      ]
  }
}
};

</script>

<style scoped>
.whitebg {
  background-color: white;
  width: 100%;

}

/* .main-container {
  background-color: white;
  width: 100%;
} */


</style>
