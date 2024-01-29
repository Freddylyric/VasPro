<!-- CodeDisplay.vue -->
<template>
  <v-col lg="20">
    <div class="code-display">
      <div class="language-tabs">
        <button v-for="language in languages" :key="language" @click="selectLanguage(language)"
          :class="{ 'language-tab': true, 'selected-language': language === selectedLanguage }">
          {{ language }}
        </button>

      </div>
      <v-divider :thickness="1" class="border-opacity-100" color="white"></v-divider>
      <pre class="code-container ">
      <code :class="`language-${selectedLanguage.toLowerCase()}`">{{ getCodeSnippet(selectedLanguage) }}</code>
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
    languages: Array,
    codeSnippets: Object

  },
  //   mounted() {
  //   Prism.highlightAll();
  // },
  data() {
    return {
      selectedLanguage: this.languages[0], // Default to the first language
    };
  },
  methods: {
    selectLanguage(language) {
      this.selectedLanguage = language;
      Prism.highlightAll(); // Re-highlight code when language changes
    },
    getCodeSnippet(language) {
      return this.codeSnippets[language] || ''; // Default to an empty string if snippet not found
    },
  },
  mounted() {
    Prism.highlightAll(); // Initial highlighting when component is mounted
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

.selected-language {
  border: #DBDBDB solid 1px;
  border-radius: 5px;
  background-color: #193C56;
}

.language-tabs button {
  cursor: pointer;
  padding: 10px;



}

.language-tab {
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  color: #fff;
  /* Text color for the language tabs */
  font-size: 14px;
  /* Adjust the font size as needed */
}

.language-tabs button:hover {
  border: #DBDBDB solid 1px;
  border-radius: 5px;
  background-color: #193C56;
}

.code-display {
  width: 100%;
  background-color: #305067;
  border: 1px solid #DBDBDB;

  border-radius: 12px;
}

.code-container {
  background-color: #305067;
  /* Add your desired background color here */
  padding-left: 10px;
  border-radius: 12px;
  overflow: auto;
  max-height: 350px;
  min-height: 350px;
}

pre code {
  display: block;
  white-space: pre;
  color: #fff;
  /* Text color */
  font-family: 'Courier New', monospace;
  /* Choose an appropriate font-family */
  font-size: 14px;
}



.mediumText {

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
  