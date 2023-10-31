import { IFavorite } from "@/interfaces"

export const checkPasswordMatch = (password: string, passwordConfirm: string): Boolean => {
    return password === passwordConfirm
}

export const checkFavorite = (place: google.maps.places.PlaceResult | null, favoriteItems: IFavorite[]): Boolean => {
    return favoriteItems.some(f => f.place_id === place?.place_id)
}