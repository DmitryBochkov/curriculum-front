import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#faa275',
        secondary: '#f5e4c3',
        accent: '#710627',
        error: '#ea5455',
        info: '#34a7b2',
        success: '#4CAF50',
        warning: '#ea5455'
      }
    }
  }
})
