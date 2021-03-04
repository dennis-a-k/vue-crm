import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import TooltipDirective from './directives/toollip.directive'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)
Vue.directive('tooltip', TooltipDirective)

firebase.initializeApp({
  apiKey: 'AIzaSyCnkW1j3Q6le6eJmW8yw-uMHG5Tfg6n8cM',
  authDomain: 'vue-crm-6145b.firebaseapp.com',
  projectId: 'vue-crm-6145b',
  storageBucket: 'vue-crm-6145b.appspot.com',
  messagingSenderId: '844032191835',
  appId: '1:844032191835:web:ec5a49504eb06eb5617e7e',
  measurementId: 'G-XRVXQ4C8MZ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
