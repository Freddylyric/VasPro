<template>
  <v-div >
    <v-col class="ml-md-16 mr-md-16 mt-16">
    <v-row >
  
      <!-- Content Column -->
      <v-col  style="background-color: #F7F7F7 width: 50%;" >
        <h1 class="title-text">Download App Now & enjoy our services</h1>
        <p class="mediumText">
          Experience Vaspro at the palm of your hands, get it on both Play & App store.
        </p>
        <v-row class="mt-5">
          <v-col md="6" xs="12">
            <img src="@/assets/playstore.svg" alt="playstore" width="100%" height="100%">
          </v-col>
          <v-col md="6" xs="12" class="mt-2">
            <img src="@/assets/appstore.svg" alt="appstore" width="100%">
          </v-col>
        </v-row>
      </v-col>
  
      <!-- Image Column -->
     
      <v-col lg="6  " xs="12" style=" min-width: 320px;">
        <img src="@/assets/vasproapp.svg" alt="engage" width="100%" height="100%" />
      </v-col>
    </v-row>  
  </v-col>
    </v-div>
  </template>
  
  
<script>
export default {
    name: 'AppStore'

}
</script>

<style scoped>
@media screen   and (min-width: 400px){
  .title-text{
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 50px;
  text-align: center;
  justify-self: center;
  text-align: center;
  margin: 20px;
  

}
.mediumText {
  text-align: center;
  font-size: 1.25rem;
}

  }
</style>

