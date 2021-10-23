<template>
  <v-app v-if="isInitialized">
    <v-app-bar app dark fixed>
      <div class="d-flex align-center"></div>
      <v-img
       @click="$router.push('/')"
        class="mx-2"
        src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/CountryBall_Foxhole_GDE.png?alt=media&token=59fbb71b-067f-495c-b020-1060c8f07d65"
        max-height="50"
        max-width="50"
        contain
      ></v-img>
      <v-toolbar-title @click="$router.push('/')">{{ $t("0001") }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-container v-for="(item, i) in routes" :key="i">
          <v-btn
            text
            target="_blank"
            v-if="item.visible && item.href"
            :href="item.href"
            link
            >{{ $t(item.i18nRef) }}</v-btn
          >
          <v-btn text v-if="item.visible && !item.href" :to="item.route" link>{{
            $t(item.i18nRef)
          }}</v-btn>
        </v-container>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute dark temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <div v-for="(item, i) in routes" :key="i">
            <v-list-item
              v-if="item.visible && !item.disconnect"
              :to="item.route"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t(item.i18nRef) }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="mainContainer">
        <!-- If using vue-router -->
        <router-view></router-view>
      </div>
    </v-main>
    <v-footer dark app light padless>
      <v-card class="flex footerClass" tile>
        <v-card-text class="py-2 white--text text-end">
          <strong class="fontSize10">{{ $t("0002") }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import store from './store/index'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({
    isInitialized: false,
    routes: [],
    drawer: false,
    group: null,
    duration: 1000,
    offset: 0,
    easing: 'easeInOutCubic'
  }),
  mounted: function () {
    this.$i18n.locale = 'fr'
    this.isInitialized = true
    if (store) {
      this.routes = store.state.routes as any
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  }
})
</script>

<style lang="scss">
@import '../node_modules/typeface-roboto/index.css';
#app {
  font-family: 'Roboto' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-main {
  background-color: #eceff1;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Foxhole01.jpg?alt=media&token=a9675e28-f05a-482f-a5e9-fa7dbafcecb8");
  background-size: cover;
  background-position: center;
}
.mainContainer{
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  height: 100%;
  width: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header {
  z-index: 100000 !important;
}
.v-navigation-drawer {
  z-index: 100001 !important;
}
</style>
