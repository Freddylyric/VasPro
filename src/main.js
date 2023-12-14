import { createApp } from 'vue'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/800.css';
import '@fontsource/lato';
import './style.css'
import App from './App.vue'

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

createApp(App).use(vuetify).mount('#app')
