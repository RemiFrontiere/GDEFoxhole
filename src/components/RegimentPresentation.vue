<template>
  <v-container>
    <v-card dark v-if="isInitialized">
      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/gdePres%20(1).jpg?alt=media&token=d08ff8e2-e676-4e2b-9de1-9e9ac0d69d41"
        src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/gdePres%20(1).jpg?alt=media&token=d08ff8e2-e676-4e2b-9de1-9e9ac0d69d41"
      >
      </v-img>
      <v-card-title
        ><h2>{{ $t("0030") }}</h2></v-card-title
      >
      <v-card-text>
        <pre>{{$t("0032")}}</pre>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        href="https://discord.gg/aCvASH2G8P"
        target="_blank"
        outlined
        text
      >
        Nous rejoindre
      </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegimentPresentation',
  data () {
    return {
      isInitialized: false
    }
  },
  mounted: function () {
    this.isInitialized = true
  },
  methods: {
  }
})
</script>
<style scoped>
.spaceTop {
  padding-top: 10px;
}
.alignFlexCenter {
  display: flex;
  justify-content: center;
}
pre{
  white-space: pre-wrap;
  text-align: initial;
  font-family: 'Roboto' !important;
}
</style>
