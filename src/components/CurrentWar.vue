<template>
  <v-container>
    <v-card dark v-if="isInitialized">
      <v-img
        lazy-src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/wardentank.jpg?alt=media&token=3e275664-d8bd-4a86-9c0f-0e4e920e43fc"
        src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/wardentank.jpg?alt=media&token=3e275664-d8bd-4a86-9c0f-0e4e920e43fc"
      >
      </v-img>
      <v-card-title
        ><h2>{{ $t("0009") }} {{ currentWarStatus.warNumber }}</h2></v-card-title
      >
      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="ms-4">
            <strong>{{ $t("0010") }} </strong>{{ getStartDate() }}
          </div>
        </v-row>
        <v-row align="center" class="mx-0" v-if="startedSince != ''">
          <div class="ms-4">
            <strong>{{ $t("0011") }} </strong>{{ startedSince }}
          </div>
        </v-row>
        <v-row align="center" class="mx-0">
          <div class="ms-4">
            <strong>{{ $t("0017") }} </strong
            >{{ currentWarStatus.requiredVictoryTowns }}
          </div>
        </v-row>
        <v-row
          align="center"
          class="mx-0"
          v-if="currentWarStatus.winner != 'NONE'"
        >
          <div class="ms-4">
            <strong>{{ $t("0012") }} </strong>{{ currentWarStatus.winner }}
          </div>
        </v-row>
        <v-row align="center" class="mx-0">
          <div class="ms-4">
            <strong>{{ $t("0015") }} </strong>{{ casualties.dayOfWar }}
          </div>
        </v-row>
        <v-row class="spaceTop">
          <v-col>
            <v-row class="mx-0 alignFlexCenter">
              <div class="ms-10">
                <v-img
                max-height="100"
                max-width="100"
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Colonial.png?alt=media&token=f4c16c23-1795-4287-819e-9ae0b92057d2"
                  src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Colonial.png?alt=media&token=f4c16c23-1795-4287-819e-9ae0b92057d2"
                >
                </v-img>
                <h2>Colonial</h2>
              </div>
            </v-row>
            <v-row class="mx-0 spaceTop">
              <div class="ms-4">
                <strong>{{ $t("0013") }} </strong
                >{{ casualties.colonialCasualties }} {{ $t("0016") }}
              </div>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="mx-0 alignFlexCenter">
              <div class="ms-10">
                <v-img
                max-height="100"
                max-width="100"
                  lazy-src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Warden.png?alt=media&token=939452e8-3c9c-4fcb-8af8-3a4a1e1c06fa"
                  src="https://firebasestorage.googleapis.com/v0/b/gdefoxhole.appspot.com/o/Warden.png?alt=media&token=939452e8-3c9c-4fcb-8af8-3a4a1e1c06fa"
                >
                </v-img>
                <h2>Warden</h2>
              </div>
            </v-row>
            <v-row class="mx-0 spaceTop">
              <div class="ms-4">
                <strong>{{ $t("0014") }} </strong>{{ casualties.wardenCasualties }}
                {{ $t("0016") }}
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <small>{{ $t("0008") }}</small>
        <v-progress-circular
          class="mx-2"
          indeterminate
          :size="50"
          :width="5"
        ></v-progress-circular>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { IWar } from '../types/index'
import { globalFunction } from '@/globalFunction'
import { foxholeAPI } from '@/foxholeAPI'

export default Vue.extend({
  name: 'CurrentWar',
  data () {
    return {
      isInitialized: false,
      currentWarStatus: {} as IWar,
      startedSince: '',
      intervalArray: [] as any[],
      casualties: {} as any,
      foxholeMaps: [] as any[]
    }
  },
  mounted: function () {
    foxholeAPI.getCurrentWarStatus().then((warStatus) => {
      this.currentWarStatus = warStatus as IWar
      foxholeAPI.getCasualties().then((response) => {
        if (response) {
          this.casualties = response
          this.isInitialized = true
        }
      })
    })
  },
  created () {
    this.intervalArray.push(setInterval(() => this.getStartedSince(), 1000))
    this.intervalArray.push(
      setInterval(
        () =>
          foxholeAPI.getCasualties().then((response) => {
            if (
              response.colonialCasualties > this.casualties.colonialCasualties
            ) {
              this.casualties = response
            }
          }),
        1000
      )
    )
  },
  methods: {
    getStartDate () {
      if (this.isInitialized && this.currentWarStatus) {
        return (
          (new Date(this.currentWarStatus.conquestStartTime).getDate() < 10
            ? '0'
            : '') +
          new Date(this.currentWarStatus.conquestStartTime).getDate() +
          '/' +
          (new Date(this.currentWarStatus.conquestStartTime).getMonth() < 10
            ? '0'
            : '') +
          new Date(this.currentWarStatus.conquestStartTime).getMonth() +
          '/' +
          (new Date(this.currentWarStatus.conquestStartTime).getFullYear() < 10
            ? '0'
            : '') +
          new Date(this.currentWarStatus.conquestStartTime).getFullYear()
        )
      }
    },
    getStartedSince () {
      if (this.isInitialized && this.currentWarStatus) {
        const now = Date.now()
        const started = new Date(this.currentWarStatus.conquestStartTime)

        const startedSince = globalFunction.dateDiff(started, now)
        this.startedSince = globalFunction.getFormattedDateString(startedSince)
      }
    },
    getEnded () {
      if (this.isInitialized && this.currentWarStatus) {
        const ended = new Date(this.currentWarStatus.conquestEndTime)

        return globalFunction.getFormattedDateString(ended)
      }
    }
  },
  beforeDestroy () {
    if (this.intervalArray && this.intervalArray.length) {
      this.intervalArray.forEach((interval) => {
        clearInterval(interval)
      })
    }
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
</style>
