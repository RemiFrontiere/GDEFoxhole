/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import { IWar, IMap, IMapCasualties } from './types/index'

export const foxholeAPI = {

  getFoxholeMaps () {
    return axios
      .get(
        'https://war-service-live.foxholeservices.com/api/worldconquest/maps'
      )
      .then((response) => {
        // handle success
        return response.data as IMap[]
      })
      .catch(function (error) {
        // handle error
        Promise.reject(error)
      })
  },
  getCurrentWarStatus () {
    return axios
      .get(
        'https://war-service-live.foxholeservices.com/api/worldconquest/war'
      )
      .then((response) => {
        // handle success
        return response.data as IWar
      })
      .catch(function (error) {
        // handle error
        Promise.reject(error)
      })
  },
  async getCasualties () {
    return foxholeAPI.getFoxholeMaps().then((foxholeMaps) => {
      const maps = foxholeMaps as IMap[]
      let colonialCasualties = 0
      let wardenCasualties = 0
      let dayOfWar = 0
      const promises = []

      for (let i = 0; i < maps.length; i++) {
        promises.push(this.getCasualtiesForMap(maps[i]).then(result => {
          const data = result as IMapCasualties
          colonialCasualties += data.colonialCasualties
          wardenCasualties += data.wardenCasualties
          dayOfWar = data.dayOfWar
        }))
      }

      return Promise.all(promises).then(() => {
        return { colonialCasualties: colonialCasualties, wardenCasualties: wardenCasualties, dayOfWar: dayOfWar }
      })
    })
  },
  getCasualtiesForMap (mapName : IMap) {
    return axios
      .get(
        'https://war-service-live.foxholeservices.com/api/worldconquest/warReport/' + mapName
      )
      .then((response) => {
        // handle success
        return response.data as IMapCasualties
      })
      .catch(function (error) {
        // handle error
        Promise.reject(error)
      })
  }
}
