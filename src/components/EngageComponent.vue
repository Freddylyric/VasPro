<template>
  <v-main style="background: #F8FCF9;"> 
      <div class=" pl-16 pr-16 d-flex align-center justify-center" style="height:358px; ">
          <v-col  lg = "0 d-flex flex-column align-center" >
            
            <v-col>
    <h2 class="title">Engage</h2>
    <h1 class="boost" >Boost your Client Trust</h1>
    <p class="par" >through these Interactions...</p>
  </v-col>

       <div class="toolbar-container">
               
       <v-tabs v-model="tab" align-tabs="center"  selected-class="active-tab" class="customm-tab" >
        <v-tab :value="1" class="custom-tab" style="text-transform: capitalize; border-radius: 50px; height: 40px; ">Surveys </v-tab>
        <v-tab :value="2" class="custom-tab" style="text-transform: capitalize; border-radius: 50px; height: 40px;">USSD</v-tab>
        <v-tab :value="3" class="custom-tab" style="text-transform: capitalize; border-radius: 50px; height: 40px;">Shortcodes</v-tab>
      </v-tabs>
  
 </div>      
          </v-col>
  
      </div>
  
      <div>
                         
      <v-window v-model="tab">
        <v-window-item :value="1">
          <SurveyComponent />
        </v-window-item>
  
        <v-window-item :value="2">
          <UssdComponent />
        </v-window-item>
  
        <v-window-item :value="3">
          <ShortcodesComponent/>
        </v-window-item>
      </v-window>
      </div>
  </v-main>
  
  </template>
  

    
    
  <script>
import SurveyComponent from './EngageComponent/SurveyComponent.vue';
import ShortcodesComponent from './EngageComponent/ShortcodesComponent.vue';
import UssdComponent from './EngageComponent/UssdComponent.vue';

export default {
    components: {
    SurveyComponent,
    ShortcodesComponent,
    UssdComponent
  },
  watch: {
  },
    data() {
      return {
         isVisible: false,
         tab:1,

      };
    },
    methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
     }

  };
  </script>
  
  <style scoped>


  .interaction-column {
    display: flex;
    flex-direction: column;
  }
.engage-container{ 
  background-color: #F8F8F8;
}
@media screen   and (min-width: 400px){
  .title{
    text-align: center;
    color: #FF9327;
    font-weight: bold;
    font-size: 1.5rem;
    
  }
  
  
  .boost{
    text-align: center;
    font-size: 2.0rem;
    color: #183B56;
     font-weight: 800; 
  }

  .par{
    text-align: center;
    font-size: 2.0rem;
    color: #183B56;
     font-weight: 400; 
     width: 100%;
  }
 
}

  
.toolbar-container {
  background: #183B56;
  padding: 2px;
  height: 44px;
  color: #F8FCF9;
  border-radius: 36px;
  margin-top: 80px;
  width: 532px;

  /* Media query to adjust styles for smaller screens */
  @media (max-width: 600px) {
    height: 44px;
    margin-top: 40px;
    width: 381px;
  }
}
.custom-tab{
  text-decoration: none !important;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  text-transform: capitalize;

  @media (max-width: 600px) {
    height: 30px;
    width: 121px;
  }
}

  .rounded-container {
  border-radius: 50px;
  overflow: hidden;
  width: 532px;
  height: 44px;
}


.toolbar-item {
  color: #FFFFFF;
  font-weight: 400;
  font-size: large;
}


.toolbar-item1 {
  color: #FFFFFF;
  font-weight: 400;
  font-size: large;
  margin-bottom: 50px;

}
.toolbar-item2 {
  color: #FFFFFF;
  font-weight: 400;
  font-size: large;
  margin-bottom: 50px;

}

  .interaction-item {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .active-tab {
  background: white;
  color: black; 
  border-radius: 50px;
  text-decoration: none !important;


  
}

.inactive-tab {
  background-color: transparent !important;
  color: white; 
}

.customm-tab{
  text-decoration: none !important;
  
}

  </style>
