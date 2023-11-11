export interface IRecommendation {
    place_id: string,
    name: string,
    description: string,
    icon: string,
    photo: string,
    location: {
        lat: number,
        lng: number
    }
}