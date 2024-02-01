<template>
  <div class="dev-container ml-16 mr-16  ">
    <v-row>
    <v-col class="d-flex justify-center align-center">
      <h1 class="title-text">
        Some <span class="greenText">Common Scenarios </span>
        <br>where Vaspro comes into play...
      </h1>
    </v-col>
  </v-row>
  <p class="mediumText">Get to reach customers and engage growing your business to its full potential</p>
    <div >
      <v-row class="expansion-panels mb-5 mt-5 ">
      <div class="expansion-panels-container mt-8">
        <v-expansion-panels >
          <v-expansion-panel class="expansion-panel elevation-5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" height="35px" width="39px">mdi-bullhorn</v-icon>
              <span class="panel-title ml-3">Campaigns</span>
            </template>
          </v-expansion-panel>

          <v-expansion-panel class="expansion-panel elevation-5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" height="35px" width="39px">mdi-handshake</v-icon>
              <span class="panel-title ml-3">Business</span>
            </template>
          </v-expansion-panel>
          <v-expansion-panel class="expansion-panel elevation-5" title="Events"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" height="35px" width="39px">mdi-ticket</v-icon>
              <span class="panel-title ml-3">Events</span>
            </template>
          </v-expansion-panel>

          <v-expansion-panel class="expansion-panel elevation-5" title="Notifications"
            text="This allows you to send highly targeted and relevant messages to specific groups, increasing the likelihood of conversion.">
            <template v-slot:title>
              <v-icon color="#26A842" height="35px" width="39px">mdi-bell</v-icon>
              <span class="panel-title ml-3">Notifications</span>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>

      <v-col  xs="6" class="ml-16 d-none d-sm-flex justify-centre"  >
        <img class="solutions-img" width="476px" src="@/assets/solution.svg" alt="hero image">
      </v-col>

    </v-row>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'SolutionsComponent',
  data() {
    return {

      panels: [
        { title: 'Campaigns', content: '' },
        { title: 'Business', content: '' },
        { title: 'Events', content: '' },
        { title: 'Notifications', content: '' },
      ]
    }
  }
}
</script>

<style scoped>
.dev-container {
  background-color: #f8fcf9;
}

.expansion-panel {
  width: 80%; 
  max-width: 486px; 
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  margin-bottom: 12px;
}

.expansion-panels-container {
  margin-bottom: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 24px;
  width: 100%;
  max-width: 486px; 

}
.expansion-panel .v-expansion-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
}


.chatContainer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 24px;
  width: 50%;
}



.panel-icon {
  color: #183B56;
  size: 20dvi;
}



.panel-title {

  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #183B56;
}

.greenText {

  font-style: normal;
  font-size: 45px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  color: #26A842;
}
.title-text{
  font-size: 45px;
  font-weight: 700;
  line-height: 52px;
  text-align: center;
  width: 840px;
  justify-self: center;
  

}
.mediumText {
  text-align: center;
  font-size: 1.25rem;
}
</style> 




