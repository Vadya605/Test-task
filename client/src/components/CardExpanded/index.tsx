import { useState } from 'react'
import { toast } from 'react-toastify'

import Typography from '@mui/material/Typography'

import Favorite from '@/components/svg/Favorite'
import Geo from '@/components/svg/Geo'
import { ERRORS } from '@/constants'
import { useAppDispatch, useAuth, useRoute, useTypeSelector } from '@/hooks'
import { addFavorite, clearRoute, removeFavorite, setIsOpenAuthModal, setRoute } from '@/store/reducers'
import { ButtonFavorite, ButtonRoute } from '@/UI'
import { addToFavorite, checkFavorite, convertRecommendationToFavorite, deleteFavorite } from '@/utils'

import { ICardProps } from './interfaces'
import {
    Actions,
    CardExpanded,
    CardHeader,
    CardWrapper,
    Photo,
    PhotoIcon,
    PhotoIconsWrapper,
    PhotoWrapper,
} from './styled'

export default function ExpandedCard({ cardItem }: ICardProps) {
    const dispatch = useAppDispatch()
    const { isAuth } = useAuth()
    const {
        Map: { map, userLocation },
        User: { id: userId },
        Favorites: { favorites },
    } = useTypeSelector((state) => state)

    const isFavorite = checkFavorite(cardItem, favorites)

    const [loading, setLoading] = useState(false)
    const { directions, distanceTotal, placeLocation, time } = useRoute({
        origin: userLocation,
        destination: cardItem.location,
    })

    const handleClickFavorite = async () => {
        if (!isAuth || !cardItem) {
            return dispatch(setIsOpenAuthModal(true))
        }

        const favorite = convertRecommendationToFavorite(cardItem)
        setLoading(true)

        try {
            if (isFavorite) {
                await deleteFavorite(userId, favorite.place_id)
                dispatch(removeFavorite(favorite))
            } else {
                await addToFavorite(userId, favorite)
                dispatch(addFavorite(favorite))
            }
        } catch (err) {
            if (isFavorite) {
                toast(ERRORS['error-removing-favorites'], { type: 'error' })
            } else {
                toast(ERRORS['error-adding-favorites'], { type: 'error' })
            }
        } finally {
            setLoading(false)
        }
    }

    const handleClickRoute = async () => {
        dispatch(clearRoute())
        const directionsRenderer = new google.maps.DirectionsRenderer({
            map,
            directions,
        })
        dispatch(
            setRoute({
                directionsRenderer,
                distanceTotal,
                placeLocation,
                time,
            }),
        )
    }

    return (
        <CardExpanded data-testid="card-expanded">
            <CardWrapper>
                <CardHeader>
                    <PhotoWrapper>
                        <Photo src={cardItem.photo} alt="Photo place" />
                        <PhotoIconsWrapper>
                            <PhotoIcon src={cardItem.icon} alt="Photo icon" />
                        </PhotoIconsWrapper>
                    </PhotoWrapper>
                    <Typography variant="h1">{cardItem.name}</Typography>
                </CardHeader>
                <Typography variant="body1">{cardItem.description}</Typography>
                <Actions>
                    <ButtonFavorite loading={loading} data-testid="button-remove" onClick={handleClickFavorite}>
                        <Favorite />
                        <Typography variant="button">{isFavorite ? 'Удалить' : 'Добавить'}</Typography>
                    </ButtonFavorite>
                    <ButtonRoute data-testid="button-route" onClick={handleClickRoute}>
                        <Geo />
                        <Typography variant="button">Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardWrapper>
        </CardExpanded>
    )
}
