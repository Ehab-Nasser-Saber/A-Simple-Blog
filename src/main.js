import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import router from './router.js';
import App from './App.vue';
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';


const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);


library.add(fas);
app.component('fa', FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount('#app');

