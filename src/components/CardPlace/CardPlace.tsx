import { CardPlaceWrapper, PhotoPlace, Actions } from "./CardPlaceStyle";
import FavoriteSvg from "../svg/Favorite";
import GeoSvg from '../svg/Geo'
import { useAppDispatch, useTypeSelector } from "../../hooks/redux";
import { FavoriteServices } from "../../store/reducers";
import { convertPlaceResultToFavorite } from "../../utils/convert";
import { ButtonFavorite } from "../ElementsUI/ButtonFavorite";
import { ButtonRoute } from "../ElementsUI/ButtonRoute";
import { InfoWindow } from "@react-google-maps/api";
import { SelectedPlaceServices } from "../../store/reducers/SelectedPlaceSlice";
import DoesntExistPhoto from '../../../public/doesntExist.jpg'
import { DirectionsRendererServices } from "../../store/reducers/DirectionsRendererSlice";

interface CardPlaceProps {
    place: google.maps.places.PlaceResult
}

export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispatch()
    const {favorites} = useTypeSelector(state => state.Favorites)
    const {center, map} = useTypeSelector(state => state.Map)

    const handleClickSave = () => {
        const favorite = convertPlaceResultToFavorite(place)
        console.log(favorite);
        
        if(isFavorite()){
            return dispatch(FavoriteServices.actions.removeFavorite(favorite))
        }

        return dispatch(FavoriteServices.actions.addFavorite(favorite))
    }

    const handleClickClose = () => {
        dispatch(SelectedPlaceServices.actions.setSelected(null))
        dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(null))
        // при установке null оно все равно остается
    }

    const handleClickRoute = () => {
        const directionService = new google.maps.DirectionsService()
        const directionRequest = {
            origin: center,
            destination: {
                lat: place.geometry?.location?.lat(),
                lng: place.geometry?.location?.lng()
            },
            travelMode: google.maps.TravelMode.WALKING
        }
        directionService.route(directionRequest, (result, status) => {
            if(status === google.maps.DirectionsStatus.OK){
                const directionsRenderer = new google.maps.DirectionsRenderer({
                    map: map,
                    directions: result
                })
                
                dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(directionsRenderer))
            } else {
                console.log('Error');
            }
        })
    }

    const isFavorite = () => {
        return favorites.some(f => f.place_id === place.place_id)
    }

    return (
        <InfoWindow
            position={{
                lat: place?.geometry?.location?.lat() || 0,
                lng: place?.geometry?.location?.lng() || 0,
            }}
            onCloseClick={handleClickClose}
        >
            <CardPlaceWrapper>
                <h3>{place.name}</h3>
                <PhotoPlace src={ place.photos?.[0]?.getUrl() || DoesntExistPhoto} />
                <Actions>
                    <ButtonFavorite onClick={handleClickSave}>
                        <FavoriteSvg />
                        <span>{ isFavorite()?'Удалить': 'Добавить' }</span>
                    </ButtonFavorite>
                    <ButtonRoute onClick={handleClickRoute}>
                        <GeoSvg />
                        <span>Маршрут</span>
                    </ButtonRoute>
                </Actions>
            </CardPlaceWrapper>
        </InfoWindow>
    )
}