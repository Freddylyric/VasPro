<template>

    <div class="locations ml-8">
        <v-row>
            <v-col>
                <h1 class="fontSizeClass font-['Lato']">Join us at our offices in...</h1>
                <v-list class="pt-16">
                
    <!-- Nairobi, Kenya -->
    <v-list-item  >
      <v-list-item-content>
        <v-row align="start">
          <v-col cols="auto" class="mr-1" >
            <v-list-item-icon>
              <v-icon color="green" size="large">mdi-map-marker</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="city-name">Nairobi, Kenya</v-list-item-title>
            <v-list-item-subtitle class="address">7th floor, Kalson Towers, Parklands</v-list-item-subtitle>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <!-- Dar-es-salam, Tanzania -->
    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1" >
            <v-list-item-icon>
              <v-icon color="green" size="large">mdi-map-marker</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="city-name">Dar-es-salam, Tanzania</v-list-item-title>
            <v-list-item-subtitle class="address">7th floor, Karlson Towers, Parklands</v-list-item-subtitle>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <!-- Kampala, Uganda -->

    <v-list-item >
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1" >
            <v-list-item-icon>
              <v-icon color="green" size="large">mdi-map-marker</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="city-name">Kampala, Uganda</v-list-item-title>
            <v-list-item-subtitle class="address">7th floor, Karlson Towers, Parklands</v-list-item-subtitle>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <!-- Accra, Ghana -->
    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1" >
            <v-list-item-icon>
              <v-icon color="green" size="large">mdi-map-marker</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title class="city-name">Accra, Ghana</v-list-item-title>
            <v-list-item-subtitle class="address">7th floor, Karlson Towers, Parklands</v-list-item-subtitle>
            <v-list-item-subtitle class="telephone">Tel: +254 123 456 789</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

  </v-list>
            </v-col>


            <v-col >
                <img src="@/assets/africa.svg" alt="map" class="responsive-image">
            </v-col>
        </v-row>
       
    </div>

</template>

<script>
export default {
  computed: {
    fontSizeClass() {
      // Adjust font size based on screen size
      return this.$vuetify.breakpoint.smAndDown ? 'small-text' : 'large-text';
    }
  },
    name: "Locations",
    
}
</script>

<style scoped>

.locations {
    margin-top: 100px;
  
  }
.title{
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  font:Lato;
}
.small-text {
  font-size: 16px;
}

.large-text {
  font-size: 24px;
}


.city-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #183B56;
    text-align: left;

}

.address {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #183B56;
    text-align: left;
}

.telephone {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #183B56;
    text-align: left;
}

.flex-container {
  display: flex;
  align-items: center; /* Align items vertically in the center */
}
.responsive-image {
  width: 100%;
  height: auto;
  min-width: 395px;
}
/* .largeText{
  font-family: 'Lato';
  font-size: 40px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: left;
  color: #183B56;
  margin-bottom: 20px;
} */
</style>