<!-- App.vue -->
<template>
  <v-app class="whitebg">
    <v-main>
      <Header :menus="menus" />
      <router-view></router-view>
     
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
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
      ],
    };
  },
};
</script>

<style scoped>
.whitebg {
  background-color: white;
  width: 100%;
}
</style>
