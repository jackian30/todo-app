import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#246caa',
      secondary: '#03DAC6',
      error: '#fc4855',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#249055',
    }
  }

  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme
      }
    },
  });

  nuxtApp.vueApp.use(vuetify);
})
