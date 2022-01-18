export type Network = {
    id: string,
    name: string,
    location: {
        latitude: number,
        longitude: number,
    }
    type: string
}

export type Station = {
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    free_bikes: number,
    empty_slots: 16,
    type: string
}

export type MapData = {
    id: string,
    name: string,
    latitude: number,
    longitude: number,
    free_bikes?: number,
    empty_slots?: 16,
    type: string
}