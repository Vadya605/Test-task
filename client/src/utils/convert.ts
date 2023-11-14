import { IFavorite } from "@/interfaces/IFavorite";

export function convertPlaceResultToFavorite(placeResult: google.maps.places.PlaceResult): IFavorite {
    const favorite: IFavorite = {
        place_id: placeResult.place_id || '',
        name: placeResult.name || '',
        description: `${placeResult.name} ${placeResult.vicinity}`,
        photo:  placeResult.photos?.[0]?.getUrl() ||  '/public/doesntExist.png',
        icon: placeResult.icon || '',
        location: {
            lat: placeResult.geometry?.location?.lat() || 0,
            lng: placeResult.geometry?.location?.lng() || 0
        }
    };

    return favorite;
}