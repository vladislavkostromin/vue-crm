import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCTg5-vxDDm16UNWMQdWoNxA7UQNrocugE",
  authDomain: "vue-crm-frst.firebaseapp.com",
  projectId: "vue-crm-frst",
  storageBucket: "vue-crm-frst.appspot.com",
  messagingSenderId: "415477345602",
  appId: "1:415477345602:web:cf0eabcc7a939bd2212cdb",
  measurementId: "G-GQ56KSJ8S1"
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
