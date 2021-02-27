import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyBXY7_pkzuqs3QNEVmnoEFmD3rRoJJs_Gc',
  authDomain: 'vue-crm-52603.firebaseapp.com',
  projectId: 'vue-crm-52603',
  storageBucket: 'vue-crm-52603.appspot.com',
  messagingSenderId: '978576249005',
  appId: '1:978576249005:web:354a508d2a23cfa14f7624',
  measurementId: 'G-XFXHXR6L1Z'
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
