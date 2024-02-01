<template>
  <v-app-bar style="padding: 12px 0.8em" app color="white" light elevation="4" elevate-on-scroll>
    <v-toolbar-title class="logo-container d-sm-flex" style="min-width: 60%;">
      <img src="../assets/main-logo.svg" class="logo">
      <span class="logo-text">Vaspro</span>
    </v-toolbar-title>
  
    <v-list-item  class=" d-sm-none align-end;
  "  >
        <v-icon @click="openMenu">mdi-menu</v-icon>
      </v-list-item>

    <v-spacer />
    <v-list class=" align-center d-none d-sm-flex">
      <v-list-item v-for="(menu, i) in menus" :key="i" :to="menu.route" @click="$router.push(menu.route)">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-spacer />
    
    <v-list class="d-none d-sm-flex">
      <v-list-item>
        <v-btn color="#26A842" style="text-transform: capitalize;" @click="$router.push('/login')"> Login</v-btn>
      </v-list-item>
      <v-list-item>
        <!-- <v-list-item-title>Sign up</v-list-item-title> -->
        <v-btn variant="tonal" style="background-color:#26A842; color: white; text-transform: capitalize; "
          class="border-radius-16" @click="$router.push('/signup')">
          Sign up
        </v-btn>
      </v-list-item>
    </v-list>
   
  </v-app-bar>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
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
  }),

}
</script>





<style> .logo-container {
   display: flex;
 }

 .logo {
   height: 50px;
   will-change: filter;
   transition: filter 300ms;
 }

 .logo-text {
   font-size: 20px;
   font-weight: 700;
   color: #26A842;
   margin: 10px;
   width: 100%;
 }

 .logo:hover {
   filter: drop-shadow(0 0 2em #64ffcbaa);
 }

 .logo.vue:hover {
   filter: drop-shadow(0 0 2em #42b883aa);
 }

 .h1 {
   font-size: 24px;
   font-weight: 700;
   line-height: 32px;
   letter-spacing: 0em;
   text-align: left;
   color: #26A842;
   padding-left: 0;
   margin-left: 0%;

 }
</style>