<template>
  <div class="homePage">
    <div class="homeContainer">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="d-flex">
            <CurrentWar />
          </v-col>
          <v-col cols="12" md="4" class="d-flex">
            <RegimentPresentation />
          </v-col>
          <v-col cols="12" md="4" class="d-flex">
            <FoxholePresentation />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import CurrentWar from '../components/CurrentWar'
import RegimentPresentation from '../components/RegimentPresentation'
import FoxholePresentation from '../components/FoxholePresentation'

export default {
  name: 'Home',
  components: { CurrentWar, RegimentPresentation, FoxholePresentation }
}
</script>

<style lang="scss" scoped>
.homePage {
  height: 100%;
  width: 100%;
}
.homeContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.colorWhite {
  color: white;
}
.v-card__title {
  word-break: normal !important;
}
.footerClass {
  background-color: #272727 !important;
  box-shadow: none !important;
}
.fontSize10 {
  font-size: 10px;
}
.medaille {
  height: 20px;
  ::v-deep .v-image__image.v-image__image--cover {
    background-size: contain;
  }
}
</style>
