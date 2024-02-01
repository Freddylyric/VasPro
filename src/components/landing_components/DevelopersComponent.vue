<template>
  <div class="dev-container pr-4 pl-16">

    <v-row>

      <v-col lg="6" >
        <h2 class="largeText">Send your First <span class="orange-box">Message </span> in Minutes with Vaspro APIs</h2>
        <p class="mediumText">The VasPro Developer API Documentation offers all the instructions you need to connect and
          use our services. Our development support team is ready to help you whenever you need help.</p>
       
          <v-row class="dev-buttons mt-8 ml-4">
          <v-btn color="#183B56"
            style="border: 2px solid; border-color: white; border-radius: 10px; height: 56px; min-width: 142px; margin-right: 20px; text-transform: capitalize;">
            <span style="font-weight: 700;"> Explore Docs </span> </v-btn>

          <v-btn color="white"
            style="border-radius: 10px; height: 56px; min-width: 142px; margin-right: 20px; text-transform: capitalize; ">
            <span style="font-weight: 700; color: #193C56;"> Sign Up </span>
          </v-btn>
        </v-row>
      </v-col>

      <v-col  md="6" >
        <code-display :codeSnippets="codeSnippets" :languages="languages"/>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import CodeDisplay from '../landing_components/CodeDisplay.vue'
export default {
  name: "developersComponent"
  ,
  components: {
    CodeDisplay
  },
  data() {
    return {


      codeSnippets: {

        'Node.js':
          `const axios = require('axios');
          const api = axios.create({
            baseURL: 'https://api.example.com',
          });`,
        Ruby: 'puts "Hello, World!"',

        Python: 'print("Hello, World!")',
        Go: 'fmt.Println("Hello, World!")',
        PHP: '<?php echo "Hello, World!"; ?>',

        Javascript:
          `import axios from 'axios';

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

        // Add more languages and code snippets as needed
      },

      languages: ["Node.js", "Ruby", "Python", "Go", "PHP", "Javascript"]
    }
  }

}
</script>

<style scoped>
.dev-container {
  padding: 5rem;
  background-color: #193C56;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;

}

.largeText {
 font-style: normal;
  font-size: 45px;
  font-weight: 800;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-bottom: 20px;
}

.mediumText {
  font-style: normal;
  font-size: 1.0rem;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  margin-bottom: 20px;
  max-width: 80%;
}

.HbtnX {
  width: 142px;


  border-radius: 12px;
  border: 2px solid #FFFFFF;
}

.orange-box {
  position: relative;
  display: inline-block;
  background: linear-gradient(to top, #FF7F00 50%, #193C56 50%);
  background-size: 100% 101%;
  background-position: 0 100%;
  transition: background-position 0.3s ease-in-out;

}
.languages{
  width: 100%;
  height: auto;
  min-width: 395px;
  }
</style>