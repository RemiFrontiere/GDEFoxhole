<template>
  <v-container>
    <v-card dark v-if="isInitialized">
      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Foxholef.jpeg?alt=media&token=59926f0b-bf44-43cb-9fbb-fd4d021f2025"
        src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Foxholef.jpeg?alt=media&token=59926f0b-bf44-43cb-9fbb-fd4d021f2025"
      >
      </v-img>
      <v-card-title
        ><h2>{{ $t("0031") }}</h2></v-card-title
      >
      <v-card-text>
        <pre>{{$t("0033")}}</pre>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FoxholePresentation',
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
