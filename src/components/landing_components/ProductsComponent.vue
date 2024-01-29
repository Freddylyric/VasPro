<template>
  <div class="prod-container mt-16" style=" padding: 4rem;">
    <!-- First Section -->

    <v-col>
      <h1 class="solution-title">Build your Business seamlessly for better customer experience</h1>
      <p class="solution-paragraph">Better your customers experience with our range of products and solutions tailored to
        meet your everyday needs.</p>
    </v-col>


    <!-- Second Section -->
    <v-row class="mb-16 mt-16">
      <v-col lg="6 pr-md-16" style=" min-width: 400px;">
        <img src="@/assets/reach.svg" alt="reach" width="100%" />
      </v-col>

      <v-col lg="0 d-flex flex-column justify-center" style="min-height: 500px; min-width: 400px;">

        <v-divider :thickness="3" class="border-opacity-100" width="40px" color="green"></v-divider>
        <h1 style="line-height: 0.6;">Reach.</h1>

        <h2 class="mediumText">Access your clients with just a click of a button</h2>
        <p>Get to reach your customers widely and simultaneously with our different messaging platforms synchronized with
          your contacts. Our products are user friendly with effective reach and feedback.</p>

        <v-card class="engage-card" elevation="0">
          <v-card-title>
            <p class="engage-card-title-2">87% of clients</p>
            <v-spacer></v-spacer>
              <p class="engage-card-subtitle-2">Appreciate feedback</p>
          </v-card-title>
        </v-card>
        <p class="subtitle-2">Featured products</p>
        <v-row>
          <div class="ml-4" v-for="(tab, index) in Reachtabs" :key="index">
            <div class="green-text-tab mr-8" style=" cursor:pointer" @click="handleTabClick(tab)">
              {{ tab }}
            </div>
          </div>
        </v-row>
        <v-btn @click="$router.push({ name: 'Reach' })" color="green"
          style=" height: 60px; border-radius: 10px; text-transform: capitalize; width: 70%;">
          Reach Your
          Customers Now </v-btn>
      </v-col>
    </v-row>

    <!-- Third Section -->
    <v-row class="mb-16 mt-16">


      <v-col lg="0 d-flex flex-column justify-center" style="min-height: 500px; min-width: 400px;">

        <v-divider :thickness="3" class="border-opacity-100" width="40px" color="green"></v-divider>
        <router-link to="/engage" style="text-decoration: none; color: inherit;">
      <h1 style="line-height: 0.6;">Engage.</h1>
    </router-link>
        <h2 class="mediumText mt-2">Increase Customer Loyalty and Interaction</h2>
        <p>Get feedback from your clients with our robust features that get you to interact with your clients one on one.
        </p>

        <v-card class="engage-card" elevation="0">
          <v-card-title>
            <p class="engage-card-title-2">80% of clients</p>
            <v-spacer></v-spacer>
            <p class="engage-card-subtitle-2">Appreciate engagement</p>
          </v-card-title>
        </v-card>
        <p class="subtitle-2">Featured products</p>
        <v-row>
          <div class="ml-4" v-for="(tab, index) in Engagetabs" :key="index">
            <div class="green-text-tab mr-8" style=" cursor:pointer" @click="handleTabClick(tab)">
              {{ tab }}
            </div>
          </div>
        </v-row>
        <v-btn @click="$router.push({ name: 'Engage' })" color="green"
          style=" height: 60px; border-radius: 10px; text-transform: capitalize; width: 70%;">
          Engage With Your Customers. </v-btn>
      </v-col>

      <v-col lg="6 pl-md-16" style=" min-width: 400px;">
        <img src="@/assets/engage.svg" alt="engage" width="100%" />
      </v-col>

    </v-row>
    <!-- Fourth Section -->

    <v-row class="mb-16 mt-16">
      <v-col lg="6 pr-md-16" style=" min-width: 400px;">
        <img src="@/assets/Grow.svg" alt="reach" width="100%" />
      </v-col>

      <v-col lg="0 d-flex flex-column justify-center" style="min-height: 500px; min-width: 400px;">

        <v-divider :thickness="3" class="border-opacity-100" width="40px" color="green"></v-divider>
        <router-link to="/grow" style="text-decoration: none; color: inherit;">
      <h1 style="line-height: 0.6;">Engage.</h1>
    </router-link>
        <h2 class="mediumText">One stop shop for all your clients.</h2>
        <p>Make engaging and reaching your clients easier than it has been before with automated systems which are fast
          giving quick and accurate responses.</p>

        <v-card class="engage-card" elevation="0">
          <v-card-title>
            <p class="engage-card-title-2">85% of clients</p>
            <v-spacer></v-spacer>
            <p class="engage-card-subtitle-2">Accessed all at once</p>
          </v-card-title>
        </v-card>
        <p class="subtitle-2">Featured products</p>
        <v-row>
          <div class="ml-4" v-for="(tab, index) in Growtabs" :key="index">
            <div class="green-text-tab mr-8" style=" cursor:pointer" @click="handleTabClick(tab)">
              {{ tab }}
            </div>
          </div>
        </v-row>
        <v-btn @click="$router.push({ name: 'Grow' })" color="green"
          style=" height: 60px; border-radius: 10px; text-transform: capitalize; width: 70%;">
          Grow Your Business Now </v-btn>
      </v-col>
    </v-row>


  </div>
</template>
  
<script>
export default {
  name: 'ProductsComponent',
  data() {
    return {
      Reachtabs: ['Bulk SMS', 'WhatsApp', 'Email'],
      Engagetabs: ['Survey', 'USSD', 'Short Codes'],
      Growtabs: ['Contacts', 'AI', 'API'],

    };
  },
  methods: {
    handleTabClick(tab) {
      // Handle tab click event
      console.log(`Clicked on tab: ${tab}`);
    },
  },
};
</script>
  
<style scoped>
.solution-title {

  text-align: center;

}

.solution-paragraph {
  width: 100%;
  height: 48px;
  padding-left: 20%;
  padding-right: 20%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #183B56;
}

.largeText {

  font-style: normal;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
}

.mediumText {

  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
  margin-bottom: 20px;
}

.pg {
  margin-bottom: 20px;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
}

.engage-card {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  background-color: aliceblue;
  padding-left: 16px;

}

.engage-card-title-2 {

  font-style: bold;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;

}

.engage-card-subtitle-2 {

  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
}

.green-text-tab {
  color: green;
  cursor: pointer;
  margin-top: 10px;
  /* Adjust spacing as needed */
  /* Add additional styling as needed */
}

.subtitle-2 {

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
}
</style>
  