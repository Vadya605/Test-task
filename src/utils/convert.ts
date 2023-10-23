import DoesntExistPhoto from 'public/doesntExist.png'
import { IFavorite } from "@/interfaces/IFavorite";

export function convertPlaceResultToFavorite(placeResult: google.maps.places.PlaceResult): IFavorite {
    const favorite: IFavorite = {
        place_id: placeResult.place_id || '',
        name: placeResult.name || '',
        description: 'description', // как получить описание места
        photo:  placeResult.photos?.[0]?.getUrl() ||  DoesntExistPhoto,
        icon: placeResult.icon || '',
        location: {
            lat: placeResult.geometry?.location?.lat() || 0,
            lng: placeResult.geometry?.location?.lng() || 0
        }
    };

    return favorite;
}