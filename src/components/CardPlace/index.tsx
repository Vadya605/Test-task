import { InfoWindow } from "@react-google-maps/api";

import DoesntExistPhoto from '/public/doesntExist.jpg'
import { ButtonFavorite } from "@/components/ElementsUI/ButtonFavorite";
import { ButtonRoute } from "@/components/ElementsUI/ButtonRoute";
import FavoriteSvg from "@/components/svg/Favorite";
import GeoSvg from '@/components/svg/Geo'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { DirectionsRendererServices, FavoriteServices, SelectedPlaceServices } from "@/store/reducers";
import { convertPlaceResultToFavorite } from "@/utils/convert";

import { CardPlaceProps } from "./interface";
import { Actions,CardPlaceWrapper, PhotoPlace } from "./styled";

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