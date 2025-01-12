import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// Importation de Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// Importation du routeur
import router from './router/router'; // Utilise le bon chemin relatif


//  Import des icônes Material Design qui utilise vueitfy
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});


createApp(App)
  .use(vuetify)
  .use(router) 
  .mount('#app');
