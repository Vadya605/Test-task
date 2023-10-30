import { useState } from 'react';
import Typography from '@mui/material/Typography';

import FavoriteSvg from "@/components/svg/Favorite";
import GeoSvg from '@/components/svg/Geo'
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { useAuth } from '@/hooks/useAuth';
import { 
    addFavorite, 
    clearDirections, 
    removeFavorite, 
    setDirectionsRenderer, 
    setDistanceTotal, 
    setIsOpenAuthModal, 
    setPlaceLocation, 
    setSelectedPlace, 
    setTime 
} from "@/store/reducers";
import { ButtonFavorite } from "@/UI/ButtonFavorite";
import { ButtonRoute } from "@/UI/ButtonRoute";
import { convertPlaceResultToFavorite } from "@/utils/convert";
import { getDirections } from '@/utils/route';
import { InfoWindow } from "@react-google-maps/api";

import { CardPlaceProps } from "./interfaces";
import { Actions, CardPlaceWrapper, PhotoPlace } from "./styled";
import DoesntExistPhoto from '/public/doesntExist.png'
import { addToFavorite, deleteFavorite } from '@/utils/favorite';


export default function CardPlace({ place }: CardPlaceProps) {
    const dispatch = useAppDispatch()
    const { isAuth } = useAuth()
    const { favorites } = useTypeSelector(state => state.Favorites)
    const { map, userLocation } = useTypeSelector(state => state.Map)
    const { id: userId } = useTypeSelector(state => state.User)

    const [loading, setLoading] = useState(false)

    const handleClickSave = () => {
        if (!isAuth) {
            return dispatch(setIsOpenAuthModal(true))
        }

        const favorite = convertPlaceResultToFavorite(place)
        setLoading(true)

        if (isFavorite()) {
            return deleteFavorite(userId, favorite.place_id)
                .then(() => {
                    dispatch(removeFavorite(favorite))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

        return addToFavorite(userId, favorite)
            .then(() => {
                dispatch(addFavorite(favorite))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }

    const handleClickClose = () => {
        dispatch(setSelectedPlace(null))
    }

    const handleClickRoute = async () => {
        try {
            dispatch(clearDirections())

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

            dispatch(setDistanceTotal(distance))
            dispatch(setPlaceLocation(placeLocation))
            dispatch(setTime(time))
            dispatch(setDirectionsRenderer(directionsRenderer))
        } catch (e) {
            console.log(e);
        }
    }

    const isFavorite = () => {
        return isAuth && favorites.some(f => f.place_id === place.place_id)
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
                    <ButtonFavorite loading={loading} onClick={handleClickSave}>
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