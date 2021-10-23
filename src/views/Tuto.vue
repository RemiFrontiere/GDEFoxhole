<template>
  <div class="tuto" v-if="isInitialized">
    <v-container>
      <v-tabs
        v-model="tab"
        align-with-title
        dark
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item.id"
        >
          {{ $t(item.title) }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" dark>
        <v-tab-item
          v-for="item in items"
          :key="item.id"
        >
          <v-row>
            <v-col fluid cols="12" md="4" class="d-flex" v-for="video in item.videos" :key="video.id">
              <v-card :id="video.id" dark flat>
                <v-card-title>{{ $t(video.i18nTitle) }}</v-card-title>
                <video v-if="video.src" :src="video.src" :poster="video.image" controls></video>
                <LazyYoutube v-if="video.youtube" :src="video.youtube" />
              </v-card>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import { globalFunction } from '@/globalFunction'

import Vue from 'vue'
export default Vue.extend({
  name: 'Tuto',
  data: function () {
    return {
      tab: null,
      isInitialized: false,
      items: [
        {
          id: globalFunction.makeId(5),
          title: '0052',
          videos: [
            { id: globalFunction.makeId(5), i18nTitle: '0036', youtube: 'https://www.youtube.com/watch?v=BXOu73sFKvg&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=1' },
            { id: globalFunction.makeId(5), i18nTitle: '0037', youtube: 'https://www.youtube.com/watch?v=qPFoBtsktmw&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=2' },
            { id: globalFunction.makeId(5), i18nTitle: '0038', youtube: 'https://www.youtube.com/watch?v=7i2vE72Fv90&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=3' },
            { id: globalFunction.makeId(5), i18nTitle: '0039', youtube: 'https://www.youtube.com/watch?v=zKwLsu5owxQ&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=4' },
            { id: globalFunction.makeId(5), i18nTitle: '0040', youtube: 'https://www.youtube.com/watch?v=zS_0q2-EPWA&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=5' },
            { id: globalFunction.makeId(5), i18nTitle: '0041', youtube: 'https://www.youtube.com/watch?v=BXmfEg8Kzqw&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=6' },
            { id: globalFunction.makeId(5), i18nTitle: '0042', youtube: 'https://www.youtube.com/watch?v=5aRtRv9GgtI&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=7' },
            { id: globalFunction.makeId(5), i18nTitle: '0043', youtube: 'https://www.youtube.com/watch?v=P26oqXt38BA&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=8' },
            { id: globalFunction.makeId(5), i18nTitle: '0044', youtube: 'https://www.youtube.com/watch?v=WhMEub6i74w&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=9' },
            { id: globalFunction.makeId(5), i18nTitle: '0045', youtube: 'https://www.youtube.com/watch?v=i11E7Kwg5oI&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=10' },
            { id: globalFunction.makeId(5), i18nTitle: '0046', youtube: 'https://www.youtube.com/watch?v=JBysZkmMxng&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=11' },
            { id: globalFunction.makeId(5), i18nTitle: '0047', youtube: 'https://www.youtube.com/watch?v=fGy4sacRY3g&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=12' },
            { id: globalFunction.makeId(5), i18nTitle: '0048', youtube: 'https://www.youtube.com/watch?v=56q4jduas3U&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=13' },
            { id: globalFunction.makeId(5), i18nTitle: '0049', youtube: 'https://www.youtube.com/watch?v=q3KfYdX1pN8&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=14' },
            { id: globalFunction.makeId(5), i18nTitle: '0050', youtube: 'https://www.youtube.com/watch?v=BkqdyK5AAZ4&list=PL5uBL5gApGWHGJ3OjxqlyzdEPv39O5T0T&index=15' }
          ]
        },
        {
          id: globalFunction.makeId(5),
          title: '0051',
          videos: [
            // { id: globalFunction.makeId(5), i18nTitle: '0019', src: 'https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Big_Buck_Bunny_1080_10s_1MB.mp4?alt=media&token=d48d09bd-43d8-4c8b-a093-42ba883523ac' },
            { id: globalFunction.makeId(5), i18nTitle: '0022', youtube: 'https://youtu.be/g8mLNyYyGEQ' },
            { id: globalFunction.makeId(5), i18nTitle: '0029', youtube: 'https://youtu.be/wBCM8OZ90h8' },
            { id: globalFunction.makeId(5), i18nTitle: '0028', youtube: 'https://youtu.be/FMWfNQF_yy0' },
            { id: globalFunction.makeId(5), i18nTitle: '0027', youtube: 'https://youtu.be/TY-oCUt7VQk' },
            { id: globalFunction.makeId(5), i18nTitle: '0021', youtube: 'https://youtu.be/VxFHjRymxXg' },
            { id: globalFunction.makeId(5), i18nTitle: '0025', youtube: 'https://youtu.be/2byTydQXiBg' },
            { id: globalFunction.makeId(5), i18nTitle: '0026', youtube: 'https://youtu.be/2hhbsC1XRBc' }
            // { id: globalFunction.makeId(5), i18nTitle: '0020', src: 'https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Big_Buck_Bunny_1080_10s_1MB.mp4?alt=media&token=d48d09bd-43d8-4c8b-a093-42ba883523ac' },
            // { id: globalFunction.makeId(5), i18nTitle: '0023', src: 'https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Big_Buck_Bunny_1080_10s_1MB.mp4?alt=media&token=d48d09bd-43d8-4c8b-a093-42ba883523ac' },
            // { id: globalFunction.makeId(5), i18nTitle: '0024', src: 'https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Big_Buck_Bunny_1080_10s_1MB.mp4?alt=media&token=d48d09bd-43d8-4c8b-a093-42ba883523ac' }
          ]
        }
      ]
    }
  },
  mounted: function () {
    this.isInitialized = true
  }
})
</script>
<style scoped>
.tuto {
  height: 100%;
  width: 100%;
}
video {
  width: 100%;
}
.v-card {
  width: 100%;
}
</style>
