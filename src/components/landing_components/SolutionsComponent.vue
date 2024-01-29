<template>
  <div class="dev-container">
    <v-col lg="12">
      <h2>Some <span class="greenText">Common Scenarios </span> <br>where Vaspro comes into play...</h2>
      <p class="mediumText">Get to reach customers and engage growing your business to its full potential</p>
    </v-col>

    <v-row class="expansion-panels mb-5 mt-5 d-flex flex-md-row" style="justify-content: space-evenly;">



      <div class="expansion-panels-container">
        <v-expansion-panels>
          <v-expansion-panel class="expansion-panel elevation-5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" size="x-large">mdi-bullhorn</v-icon>
              <span class="panel-title ml-3">Campaigns</span>
            </template>
          </v-expansion-panel>

          <v-expansion-panel class="expansion-panel elevation-5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" size="x-large">mdi-handshake</v-icon>
              <span class="panel-title ml-3">Business</span>
            </template>
          </v-expansion-panel>
          <v-expansion-panel class="expansion-panel elevation-5" title="Events"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
            <template v-slot:title>
              <v-icon color="#26A842" size="x-large">mdi-ticket</v-icon>
              <span class="panel-title ml-3">Events</span>
            </template>
          </v-expansion-panel>

          <v-expansion-panel class="expansion-panel elevation-5" title="Notifications"
            text="This allows you to send highly targeted and relevant messages to specific groups, increasing the likelihood of conversion.">
            <template v-slot:title>
              <v-icon color="#26A842" size="x-large">mdi-bell</v-icon>
              <span class="panel-title ml-3">Notifications</span>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>
      <v-col style="margin-left: 1rem; max-width: 50%;">
        <img class="solutions-img" width="100%" src="@/assets/solution.svg" alt="hero image">
      </v-col>

    </v-row>

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
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

}


.expansion-panels-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 24px;
  width: 40%;
}

.chatContainer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 24px;
  width: 50%;
}

.expansion-panel {
  padding: 8px;
  margin: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
}

.expansion-panel .v-expansion-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
}

.panel-icon {
  color: #183B56;
  size: 20dvi;
}



.panel-title {

  font-style: normal;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
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

.mediumText {
  text-align: center;
  font-size: 1.25rem;
}
</style> 




