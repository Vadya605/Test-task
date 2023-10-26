import { useState } from 'react';
import Typography from '@mui/material/Typography';

import Favorite from "@/components/svg/Favorite";
import Geo from "@/components/svg/Geo";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { DirectionsRendererServices, FavoriteServices, RouteDetailsServices, SelectedFavoriteServices } from "@/store/reducers";
import { ButtonFavorite } from "@/UI/ButtonFavorite";
import { ButtonRoute } from "@/UI/ButtonRoute";
import { getDirections } from '@/utils/route';

import { CardProps } from './interfaces';
import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, PhotoWrapper } from "./styled";
import { removeFavorite } from '@/utils/favorite';

export default function ExpandedCard({ favoriteItem }: CardProps) {
    const dispatch = useAppDispatch()
    const { map, userLocation } = useTypeSelector(state => state.Map)
    const {id: userId} = useTypeSelector(state => state.User)
    const [loading, setLoading] = useState(false)


    const handleClickRemove = () => {
        return removeFavorite(userId, favoriteItem.place_id)
            .then(() => {
                dispatch(SelectedFavoriteServices.actions.setSelected(''))
                dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
            })
            .catch(err => console.log(err))
    }

    const handleClickRoute = async () => {
        console.log(favoriteItem.location);

        try {
            dispatch(DirectionsRendererServices.actions.clearDirections())

            const directionRequest = {
                origin: userLocation,
                destination: favoriteItem.location,
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
            dispatch(RouteDetailsServices.actions.setPlaceLocation(favoriteItem.location))
            dispatch(RouteDetailsServices.actions.setTime(time))
            dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(directionsRenderer))
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <CardExpanded data-testid='card-expanded'>
            <CardWrapper>
                <CardHeader>
                    <PhotoWrapper>
                        <Photo src={favoriteItem.photo} alt="Photo place" />
                        <PhotoIconsWrapper>
                            <PhotoIcon src={favoriteItem.icon} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </PhotoWrapper>
                    <Typography variant='h1' >{favoriteItem.name}</Typography>
                </CardHeader>
                <Typography variant='body1'>{favoriteItem.description}</Typography>
                <Actions>
                    <ButtonFavorite loading={loading} data-testid='button-remove' onClick={handleClickRemove}>
                        <Favorite />
                        <Typography variant='button' >Удалить</Typography>
                    </ButtonFavorite>
                    <ButtonRoute data-testid='button-route' onClick={handleClickRoute}>
                        <Geo />
                        <Typography variant='button' >Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}