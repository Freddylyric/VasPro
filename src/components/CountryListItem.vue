<template>
    <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-row align="center">
          <v-col cols="auto" class="mr-1">
            <!-- Replace the icon with an image of the country flag -->
            <img :src="countryFlagSrc" alt="Country Flag" class="flag-icon" />
          </v-col>
          <v-col>
            <v-list-item-title class="city-name">{{ cityName }}</v-list-item-title>
            <v-list-item-subtitle class="telephone">{{ telephone }}</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
</v-list>
  </template>
  
  <script>
  export default {
    props: {
      countryFlagSrc: String, // Provide the image source dynamically for each country
      cityName: String,
      telephone: String,
    },
  };
  </script>
  
  <style scoped>
  .flag-icon {
    width: 32px; 
    height: auto;
  }
  
  /* Add other custom styles if needed */
  </style>
  