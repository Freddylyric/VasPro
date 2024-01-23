import { createApp } from 'vue'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins';
import '@fontsource/lato';
import './style.css'
import App from './App.vue'
import router from './router.js'

//phone
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  // icons: {
  //   iconfont: 'mdi', // 'mdi' for Material Design Icons
  // },
})

// createApp(App).use(vuetify).mount('#app')

const app = createApp(App)
//vuetify
app.use(vuetify)
//router
app.use(router)
//phone selector
app.use(VueTelInput);
//mount app
app.mount('#app')
