<template>
    <div class="footer-bg">
        <v-row >
            <v-col lg="3">
                <div align ="left">
                <img src="../assets/main-logo.svg" alt="logo">
                <span class="vaspro ml-2">Vaspro</span>


            </div>

            <p class="mt-5 white--text--bold">Let's grow your business</p>
            <p class="white--text mb-8">Our core business is to partner with all types of clients and help them <span class="white--text--bold"> Reach, Engage and Grow.</span></p>

            <v-row no-gutters >
      <v-col v-for="icon in socialMediaIcons" :key="icon" class="text-center">
        <v-icon size="24" color="#1F4152" class="sm-icons">{{ icon }}</v-icon>
      </v-col>
    </v-row>

            </v-col>


            <v-col lg="6" md="6">
                <v-row>
            <v-col align ="left">
    <h4 class="list-title ">PRODUCTS</h4>
    <v-list dense class="prod-list">
      <v-list-item v-for="product in products" :key="product" @click="handleItemClick(product)">

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ product }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>

  <v-col align ="left">
    <h4 class="list-title ">DEVELOPERS</h4>
    <v-list dense class="prod-list">
      <v-list-item v-for="developer in developers" :key="developer" @click="handleItemClick(developer)">

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ developer }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>


  <v-col align ="left">
    <h4 class="list-title ">CHANNELS</h4>
    <v-list dense class="prod-list">
      <v-list-item v-for="channel in channels" :key="channel" @click="handleItemClick(channel)">

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ channel }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>
</v-row>
</v-col>

  <v-col lg = "3" >
    <h4>GET IN TOUCH</h4>
    <v-list class="country-cont">
        <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="">
            <!-- Replace the icon with an image of the country flag -->
            <img src="../assets/Flag_of_Kenya.svg" alt="Country Flag" class="flag-icon" />
          </v-col>
          <v-col>
            <v-list-item-title class="city-name"> Nairobi, Kenya</v-list-item-title>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
       

    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1">
            <!-- Replace the icon with an image of the country flag -->
            <img src="../assets/Flag_of_Tanzania.svg" alt="Country Flag" class="flag-icon" />
          </v-col>
          <v-col>
            <v-list-item-title class="city-name"> Dar-es-Salaam, Tanzania</v-list-item-title>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>


    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1">
            <!-- Replace the icon with an image of the country flag -->
            <img src="../assets/Flag_of_Uganda.svg" alt="Country Flag" class="flag-icon" />
          </v-col>
          <v-col>
            <v-list-item-title class="city-name"> Kampala, Uganda</v-list-item-title>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>


</v-list>

  </v-col>

        </v-row>
        <v-divider color="white" class="divider"></v-divider>
        <v-footer  class="footer" mt-16>
    <v-row justify="space-between">
      <v-col>
        <!-- Left-end text -->
        <p class="white--text">Terms & Conditions</p>
      </v-col>

      <v-col>
        <!-- Right-end text -->
        <p class="white--text">VasPro (KE) Limited, Plot No. LR 209/2167, Crescent Lane, Parklands, Kenya operates the VasPro brand and is authorized and regulated by the Communications Authority of Kenya.</p>
      </v-col>
    </v-row>
  </v-footer>

    </div>

</template>

<script>
import CountryListItem from './CountryListItem.vue'
export default {
    name: "Footer",
    components: {
        CountryListItem
    },
   
    data() {
        return {
            socialMediaIcons: [
                'mdi-twitter',
                'mdi-facebook',
                'mdi-instagram',
                'mdi-whatsapp',
            ],
            products: ['Messaging', 'Payments', 'Surveys', 'Customer Promotions', 'USSDs'],
            developers: ['Bulk SMS', 'Transactional SMS', 'Premium SMS', 'Contact Management', 'USSD Service', 'Rewards & utilities'],
            channels: ['SMS', 'USSDs', 'Shortcodes', 'Emails', 'WhatsApp'],

        }
    },
    methods: {
    handleItemClick(product) {
      // Handle the click event for each product item
      console.log(`Clicked on ${product}`);
    },
  },
}
</script>

<style scoped>

.footer-bg {
    background-color: #1F4152;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
}
.footer{
    background-color: #1F4152;
    padding: 1rem;
    display: block;

    
}
.vaspro{
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.4;
    color: #26A842;
    text-align: left;
}
.sm-icons{
    background-color: white;
    padding: 1rem;
    border-radius: 0.25rem;
    display: flex;
}
.prod-list{
    background-color: #1F4152;
}
.white--text{
    color: white !important;
    font-size: 0.8rem;
    
}
.white--text--bold{
    color: white !important;
    font-size: 0.8rem;
    font-weight: 700;
}
.list-title{
    
    margin-left: 0.85rem;
}
.flag-icon {
  width: 32px; 
  height: auto;
}
.country-cont{
    background-color: #1F4152;
    width: 100%;
}
.city-name{
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1.2em;
    color: #fff;
    text-align: left;
}
.telephone{
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.2em;
    color: #fff;
    text-align: left;
}
.divider{
    border: 1px white;
}
</style>