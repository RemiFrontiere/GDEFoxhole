import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      { route: '/', i18nRef: '0005', name: 'Home', visible: true },
      { route: '/tutorial', i18nRef: '0018', name: 'Tutorial', visible: true },
      { href: 'https://discord.gg/aCvASH2G8P', i18nRef: '0003', name: 'Discord', visible: true },
      { route: 'wiki', i18nRef: '0034', name: 'Wiki', visible: true },
      { route: 'map', i18nRef: '0004', name: 'Map', visible: true }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
