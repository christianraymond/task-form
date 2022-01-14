import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from 'vue'
import App from './App.vue'

import './index.css';

import PrimeVue from 'primevue/config';
const app = createApp(App);
app.use(PrimeVue) //Including PrimeVue


app.mount('#app')

