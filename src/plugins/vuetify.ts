/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'
// Do not use SASS Variables --> https://vuetifyjs.com/en/features/sass-variables/

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VCard: {
      variant: "text",
    },
    VBtn: {
      variant: "flat",
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#9e0b22',
          secondary: '#D2965B',
          // primary: '#761214',
          // secondary: '#B27A7B',
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
