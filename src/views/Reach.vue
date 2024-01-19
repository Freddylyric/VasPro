<template>
  <v-main style="background: #F2FAF4;">
    <div class="hero pl-16 pr-16 d-flex align-center justify-center" style="height:357px; ">
      <v-col xs="12" lg="0 d-flex flex-column align-center">
        <h1 style="font-weight: 400; text-align: center;" class="hero-text">
          Increase <span class="orange-box">Trust</span> to Win more clients by
          <span style="font-weight: 700;">Engaging </span>
          with them via...
        </h1>

        <v-tabs v-model="tab" selected-class="active-tab" class="pl-16 pr-16 "
          style="background-color: #183B56;  align-items: center; border-radius: 50px;">
          <v-tab :value="1" style="text-transform: capitalize; border-radius: 50px; height: 40px;">Bulk SMS </v-tab>
          <v-tab :value="2" style="text-transform: capitalize; border-radius: 50px; height: 40px;">Whatsapp</v-tab>
          <v-tab :value="3" style="text-transform: capitalize; border-radius: 50px; height: 40px;">Email</v-tab>
        </v-tabs>
      </v-col>

    </div>

    <div>

      <v-window v-model="tab">

        <v-window-item :value="1">
          <BulkSMSComponent />
        </v-window-item>

        <v-window-item :value="2">
          <WhatsappComponent />
        </v-window-item>

        <v-window-item :value="3">
          <EmailComponent />
        </v-window-item>
      </v-window>
    </div>
  </v-main>
</template>

<script>
import BulkSMSComponent from '../components/reach_components/BulkSMSComponent.vue';
import WhatsappComponent from '../components/reach_components/WhatsappComponent.vue';
import EmailComponent from '../components/reach_components/EmailComponent.vue';
export default {

  name: 'Reach',
  components: {
    BulkSMSComponent,
    WhatsappComponent,
    EmailComponent,
  },
  data() {
    return {
      tab: 1,
    };
  },
}
</script>   

<style scoped>
/* Target the tab-item class for styling */
.active-tab {
  background: white;
  color: black;
  border-radius: 50px;



}

.inactive-tab {
  background-color: transparent !important;
  color: white;
}

.v-tab--active {
  text-decoration: none;
}



.orange-box {
  position: relative;
  display: inline-block;
  background: linear-gradient(to top, #FF7F00 50%, #F2FAF4 50%);
  background-size: 100% 101%;
  background-position: 0 100%;
  transition: background-position 0.3s ease-in-out;

}
</style>