export interface IFavorite {
    place_id: string,
    name: string,
    description: string,
    photo: string,
    types: string[],
    location: {
        lat: number,
        lng: number
    }
}