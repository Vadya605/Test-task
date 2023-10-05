import { CardPlaceWrapper, PhotoPlace, CardPlaceHeader, Actions } from "./CardPlaceStyle";
import FavoriteSvg from "../svg/Favorite";
import GeoSvg from '../svg/Geo'
import { useAppDispath, useTypeSelector } from "../../hooks/redux";
import { FavoriteServices } from "../../store/reducers";
import { convertPlaceResultToFavorite } from "../../utils/convert";
import { ButtonSave } from "../ElementsUI/ButtonSave";
import { ButtonRoute } from "../ElementsUI/ButtonRoute";
import { InfoWindow } from "@react-google-maps/api";
import { SelectedPlaceServices } from "../../store/reducers/SelectedPlaceSlice";

interface CardPlaceProps {
    place: google.maps.places.PlaceResult
}

export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispath()
    const {favorites} = useTypeSelector(state => state.Favorites)

    const handleClickSave = () => {
        const favorite = convertPlaceResultToFavorite(place)

        if(isFavorite()){
            return dispatch(FavoriteServices.actions.removeFavorite(favorite))
        }

        return dispatch(FavoriteServices.actions.addFavorite(favorite))
    }

    const handleClickClose = () => {
        dispatch(SelectedPlaceServices.actions.setSelected(null))
    }

    const handleClickRoute = () => {
        //
    }

    const isFavorite = () => {
        return favorites.some(f => f.place_id === place.place_id)
    }

    return (
        <InfoWindow
            position={{
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            }}
            onCloseClick={handleClickClose}
        >
            <CardPlaceWrapper>
                <h3>{place.name}</h3>
                <PhotoPlace src={place.photos[0].getUrl()} />
                <Actions>
                    <ButtonSave onClick={handleClickSave}>
                        <FavoriteSvg />
                        <span>{ isFavorite()?'Удалить': 'Добавить' }</span>
                    </ButtonSave>
                    <ButtonRoute onClick={handleClickRoute}>
                        <GeoSvg />
                        <span>Маршрут</span>
                    </ButtonRoute>
                </Actions>
            </CardPlaceWrapper>
        </InfoWindow>
    )
}