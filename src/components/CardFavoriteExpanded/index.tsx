import { useState } from 'react';
import Typography from '@mui/material/Typography';

import Favorite from "@/components/svg/Favorite";
import Geo from "@/components/svg/Geo";
import { useAppDispatch, useTypeSelector, useRoute } from "@/hooks";
import { clearRoute, removeFavorite, setRoute, setSelectedFavorite } from "@/store/reducers";
import { ButtonFavorite, ButtonRoute } from "@/UI";

import { ICardProps } from './interfaces';
import { Actions, CardExpanded, CardHeader, CardWrapper, Photo, PhotoIcon, PhotoIconsWrapper, PhotoWrapper } from "./styled";
import { deleteFavorite } from '@/utils/favorite';

export default function ExpandedCard({ favoriteItem }: ICardProps) {
    const dispatch = useAppDispatch()
    const { 
        Map: { map, userLocation }, 
        User: { id: userId } 
    } = useTypeSelector(state => state);

    const [loading, setLoading] = useState(false)
    const { directions, distanceTotal, placeLocation, time } = useRoute({ origin: userLocation, destination: favoriteItem.location })

    const handleClickRemove = () => {
        setLoading(true)

        deleteFavorite(userId, favoriteItem.place_id)
            .then(() => {
                dispatch(setSelectedFavorite(''))
                dispatch(removeFavorite(favoriteItem))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    const handleClickRoute = async () => {
        dispatch(clearRoute())
        const directionsRenderer = new google.maps.DirectionsRenderer({ map, directions })
        dispatch(setRoute({ directionsRenderer, distanceTotal, placeLocation, time }))
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