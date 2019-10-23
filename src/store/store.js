import Vue from 'vue'
import Vuex from 'vuex'
import itemsModule from './modules/items'
import connectionModule from './modules/connection'
// import axios from 'axios'
Vue.use(Vuex)
// plus tard utiliser axios pour recup ces données de l'api
/* const basicItems = require('@/data/basicItems.json')
const defenseItems = require('@/data/defenseItems.json')
const toolItems = require('@/data/toolItems.json')
const foodItems = require('@/data/foodItems.json') */

export const store = new Vuex.Store({
  state: {
    adminConnected: false
  },
  modules: {
    itemsModule,
    connectionModule
  },
  getters: {
    getAdminConnected (state) {
      return state.adminConnected
    }
  }
})
