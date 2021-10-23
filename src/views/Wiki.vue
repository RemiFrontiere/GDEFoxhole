<template>
  <div class="wiki">
    <iframe
      :src="iframe.src"
      ref="frame"
      @load="load"
      v-show="iframe.loaded"
    ></iframe>
    <v-progress-circular v-if="!iframe.loaded" indeterminate :size="150" :width="15">{{$t("0006")}}</v-progress-circular>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Wiki',
  data: function () {
    return {
      iframe: {
        src: 'https://foxhole.fandom.com/wiki/Foxhole_Wiki',
        loaded: false
      }
    }
  },
  methods: {
    load: function () {
      this.iframe.loaded = true
    }
  }
})
</script>
<style scoped>
.wiki,
iframe {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
