export interface IWar {
    warId: string,
    warNumber: number,
    winner: string,
    resistanceStartTime: number,
    requiredVictoryTowns: number,
    conquestStartTime: number,
    conquestEndTime: number
}

export interface IMap {
    name: string
}

export interface IMapCasualties {
    totalEnlistments: number,
    colonialCasualties: number,
    wardenCasualties: number,
    dayOfWar: number,
    version: number
}
