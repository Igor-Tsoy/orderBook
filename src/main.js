import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import { createStore } from "./store";
// import { subscribeToOrderBook } from "./services/binanceService";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(store);
app.use(router);
app.use(vuetify);

// const storeInstance = createStore();
// app.config.globalProperties.$store = storeInstance;

app.mount('#app');

// storeInstance.dispatch("orderBook/initOrderBookWebSocket");
