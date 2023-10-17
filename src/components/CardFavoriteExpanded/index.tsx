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

export default function ExpandedCard({ favoriteItem }: CardProps) {
    const dispatch = useAppDispatch()
    const { map, userLocation } = useTypeSelector(state => state.Map)

    const handleClickFavorite = () => {
        dispatch(SelectedFavoriteServices.actions.setSelected(''))
        dispatch(FavoriteServices.actions.removeFavorite(favoriteItem))
    }

    const handleClickRoute = async () => {
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
        <CardExpanded>
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
                    <ButtonFavorite onClick={handleClickFavorite}>
                        <Favorite />
                        <Typography variant='button' >Удалить</Typography>
                    </ButtonFavorite>
                    <ButtonRoute onClick={handleClickRoute}>
                        <Geo />
                        <Typography variant='button' >Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}