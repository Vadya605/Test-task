import Typography from '@mui/material/Typography';
import { InfoWindow } from "@react-google-maps/api";

import DoesntExistPhoto from '/public/doesntExist.jpg'
import FavoriteSvg from "@/components/svg/Favorite";
import GeoSvg from '@/components/svg/Geo'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { DirectionsRendererServices, FavoriteServices, RouteDetailsServices, SelectedPlaceServices } from "@/store/reducers";
import { ButtonFavorite } from "@/UI/ButtonFavorite";
import { ButtonRoute } from "@/UI/ButtonRoute";
import { convertPlaceResultToFavorite } from "@/utils/convert";
import { getDirections } from '@/utils/route';

import { CardPlaceProps } from "./interfaces";
import { Actions, CardPlaceWrapper, PhotoPlace } from "./styled";


export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispatch()
    const { favorites } = useTypeSelector(state => state.Favorites)
    const { map, userLocation } = useTypeSelector(state => state.Map)

    const handleClickSave = () => {
        const favorite = convertPlaceResultToFavorite(place)
        console.log(favorite);

        if (isFavorite()) {
            return dispatch(FavoriteServices.actions.removeFavorite(favorite))
        }

        return dispatch(FavoriteServices.actions.addFavorite(favorite))
    }

    const handleClickClose = () => {
        dispatch(SelectedPlaceServices.actions.setSelected(null))
    }

    const handleClickRoute = async () => {
        try {
            dispatch(DirectionsRendererServices.actions.clearDirections())

            const placeLocation = {
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0
            }

            const directionRequest = {
                origin: userLocation,
                destination: placeLocation,
                travelMode: google.maps.TravelMode.WALKING
            }

            const result = await getDirections(directionRequest)
            const distance = result?.routes[0].legs[0].distance?.value || 0
            const time = result?.routes[0].legs[0].duration?.text || ''

            const directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
                directions: result
            })

            dispatch(RouteDetailsServices.actions.setDistanceTotal(distance))
            dispatch(RouteDetailsServices.actions.setPlaceLocation(placeLocation))
            dispatch(RouteDetailsServices.actions.setTime(time))
            dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(directionsRenderer))
        } catch (e) {
            console.log(e);
        }
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
                <Typography variant="h2" >{place.name}</Typography>
                <PhotoPlace src={place.photos?.[0]?.getUrl() || DoesntExistPhoto} alt="Photo place" />
                <Actions>
                    <ButtonFavorite onClick={handleClickSave}>
                        <FavoriteSvg />
                        <Typography variant="button" >{isFavorite() ? 'Удалить' : 'Добавить'}</Typography>
                    </ButtonFavorite>
                    <ButtonRoute onClick={handleClickRoute}>
                        <GeoSvg />
                        <Typography variant="button" >Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardPlaceWrapper>
        </InfoWindow>
    )
}