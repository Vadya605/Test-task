import { IFavorite } from "../models/IFavorite";
import DoesntExistPhoto from '../../public/doesntExist.jpg'


export function convertPlaceResultToFavorite(placeResult: google.maps.places.PlaceResult): IFavorite {
    const favorite: IFavorite = {
        place_id: placeResult.place_id || '',
        name: placeResult.name || '',
        description: 'description', // как получить описание места
        photo: placeResult.photos?.[0].getUrl() || DoesntExistPhoto,
        types: [], // так как в типах неверные значения
        location: {
            lat: placeResult.geometry?.location?.lat() || 0,
            lng: placeResult.geometry?.location?.lng() || 0
        }
    };

    return favorite;
}