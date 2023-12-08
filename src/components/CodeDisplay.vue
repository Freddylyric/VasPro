<!-- CodeDisplay.vue -->
<template>
    <v-col lg="20">
    <div class="code-display">
        <div class="language-tabs">
      <button v-for="language in languages" :key="language" @click="selectLanguage(language)">
        {{ language }}
      </button>
     
    </div>
    <v-divider class="divider"> </v-divider>
    <pre class="code-container ">
      <code :class="`language-${selectedLanguage.toLowerCase()}`">{{ code }}</code>
    </pre>
    </div>
    </v-col>
  </template>
  
  <script>
  import Prism from 'prismjs';
  import 'prismjs/themes/prism.css';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-python';
  // Add other languages as needed
  
  export default {
    props: {
      code: String,
      languages: Array,
    },
    mounted() {
    Prism.highlightAll();
  },
    data() {
      return {
        selectedLanguage: this.languages[0], // Default to the first language
      };
    },
    methods: {
      selectLanguage(language) {
        this.selectedLanguage = language;
      },
    },
  };
  </script>
  
  <style scoped>
  .language-tabs {
    align-self: center;
    display: flexbox;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    
  }
  
  .language-tabs button {
    cursor: pointer;
    padding: 10px;
    
    
    
  }
  
  .language-tabs button:hover {
    border: #DBDBDB solid 1px;
    border-radius: 5px;
    background-color: #ddd;
  }

  .code-display {
    width: 100%;
    background-color: #305067;
    border: 1px solid #DBDBDB;
    
    border-radius: 12px;
  }

  .code-container {
  background-color: #305067; /* Add your desired background color here */
  padding-left: 10px;
  margin: 0;
  border-radius: 12px;
  overflow: auto;
}

pre code {
  display: block;
  white-space: pre;
  color: #fff; /* Text color */
  font-family: 'Courier New', monospace; /* Choose an appropriate font-family */
  font-size: 14px;
}
.divider{
    border: 1px solid black
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
  </style>
  