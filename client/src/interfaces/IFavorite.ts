export interface IFavorite {
    place_id: string,
    name: string,
    description: string,
    photo: string,
    icon: string,
    location: {
        lat: number,
        lng: number
    }
}