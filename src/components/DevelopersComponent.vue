<template>

<div class="dev-container">

<v-row>

    <v-col lg="6">
        <h2 class="largeText">Send your First Message in Minutes with Vaspro APIs</h2>
        <p class="mediumText">The VasPro Developer API Documentation offers all the instructions you need to connect and use our services. Our development support team is ready to help you whenever you need help.</p>
        
        <v-row class="dev-buttons mt-8">
            <v-btn outlined color="#193C56" class="HbtnX mx-4" x-large>Explore Docs</v-btn>

            <v-btn color="white" class="HbtnS" x-large>Sign Up</v-btn>
        </v-row>
    </v-col>


    <v-col >

        <code-display :code="code" :languages ="languages" />

    </v-col>
</v-row>


</div>
</template>

<script>
import CodeDisplay from './CodeDisplay.vue'
export default {
    name: "developersComponent"
,
    components: {
        CodeDisplay
    },
    data() {
        return {
            code: `import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

api.get('/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });`,
            languages: ["Node.js", "Ruby", "Python", "Go", "PHP", "Javascript"]
        }
    }

}
</script>

<style scoped>

.dev-container{
    margin-top: 5rem;
    padding: 5rem;
    background-color: #193C56;
    display: flex;
    justify-content: center;
    align-items: center;

}
.largeText {
  
  font-style: normal;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-bottom: 20px;
}

.mediumText{

    font-style: normal;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-bottom: 20px;
}

.HbtnX{ 
    width: 142px;
 
  padding: 8px;
  border-radius: 12px;
  border: 2px solid #FFFFFF;
}
</style>