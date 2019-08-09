import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import vuetify from '@/vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue( {
  store,
  vuetify,
  render: h => h( App )
} ).$mount( '#app' );
