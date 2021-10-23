export const globalFunction = {

  /**
   * Retourne un Id sous forme de String composé de X caractères
   *
   * @param length - La longeur de l'Id à retourner
   * @returns Un Id sous forme de string
   *
   */
  makeId (length: number): string {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  },

  /**
   * Retourne un objet
   *
   * @param date1 - Une date
   * @param date2 - Une date
   * @returns Un objet du type {sec: 28, min: 9, hour: 23, day: 22}
   *
   */
  dateDiff (date1: any, date2: any): any {
    const diff = {} as any // Initialisation du retour
    let tmp = date2 - date1

    tmp = Math.floor(tmp / 1000) // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60 // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60) // Nombre de minutes (partie entière)
    diff.min = tmp % 60 // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60) // Nombre d'heures (entières)
    diff.hour = tmp % 24 // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24) // Nombre de jours restants
    diff.day = tmp

    return diff
  },
  getFormattedDateString (date:any) {
    return (date.day > 0
      ? date.day + 'j'
      : '') +
      ' ' +
      (date.hour > 0
        ? date.hour + 'h'
        : '') +
      ' ' +
      (date.min > 0
        ? date.min + 'm'
        : '') +
      ' ' +
      (date.sec > 0
        ? date.sec + 's'
        : '')
  }
  // getFormattedCasualitiesString (casualties:number) {
  //   let cas = casualties.toString().substring
  //   cas.substring(0, index) + stringToAdd + str.substring(index, str.length);
  // }
}
