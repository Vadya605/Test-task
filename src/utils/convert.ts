import { IFavorite } from "../models/IFavorite";

export function convertPlaceResultToFavorite(placeResult: google.maps.places.PlaceResult): IFavorite {
    const favorite: IFavorite = {
        place_id: placeResult.place_id || '',
        name: placeResult.name || '',
        description: 'description', // как получить описание места
        photo: placeResult.photos?.[0].getUrl() || '',
        types: [], // так как в типах неверные значения
    };

    return favorite;
}