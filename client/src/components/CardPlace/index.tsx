import { useState } from 'react'
import { toast } from 'react-toastify'

import { InfoWindow } from '@react-google-maps/api'

import Typography from '@mui/material/Typography'

import Favorite from '@/assets/img/Favorite.svg'
import Geo from '@/assets/img/Geo.svg'

import { ERRORS } from '@/constants'
import { useAppDispatch, useAuth, useRoute, useTypeSelector } from '@/hooks'
import {
    addFavorite,
    clearRoute,
    removeFavorite,
    setIsOpenAuthModal,
    setRoute,
    setSelectedPlace,
} from '@/store/reducers'
import { ButtonFavorite, ButtonRoute } from 'ui-library-city-guide'
import { addToFavorite, checkFavorite, convertPlaceResultToFavorite, deleteFavorite } from '@/utils'

import { Actions, CardPlaceWrapper, PhotoPlace } from './styled'
import DoesntExistPhoto from '/public/doesntExist.png'

export default function CardPlace() {
    const dispatch = useAppDispatch()
    const { isAuth } = useAuth()

    const {
        SelectedPlace: { selectedPlace },
        Favorites: { favorites },
        Map: { map, userLocation },
        User: { id: userId },
    } = useTypeSelector((state) => state)

    const [loading, setLoading] = useState(false)

    const isFavorite = checkFavorite(selectedPlace, favorites)
    const destination = {
        lat: selectedPlace?.geometry?.location?.lat() || 0,
        lng: selectedPlace?.geometry?.location?.lng() || 0,
    }

    const { directions, distanceTotal, placeLocation, time } = useRoute({
        origin: userLocation,
        destination: destination,
    })

    const handleClickFavorite = async () => {
        if (!isAuth || !selectedPlace) {
            return dispatch(setIsOpenAuthModal(true))
        }

        const favorite = convertPlaceResultToFavorite(selectedPlace)
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

    const handleClickClose = () => {
        dispatch(setSelectedPlace(null))
    }

    const handleClickRoute = () => {
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
        <InfoWindow position={destination} onCloseClick={handleClickClose}>
            <CardPlaceWrapper>
                <Typography variant="h2">{selectedPlace?.name}</Typography>
                <PhotoPlace src={selectedPlace?.photos?.[0]?.getUrl() || DoesntExistPhoto} alt="Photo place" />
                <Actions>
                    <ButtonFavorite
                        startIcon={<img src={Favorite} alt="Favorite" />}
                        loading={loading}
                        data-testid="button-remove"
                        onClick={handleClickFavorite}
                    >
                        <Typography variant="button">{isFavorite ? 'Удалить' : 'Добавить'}</Typography>
                    </ButtonFavorite>
                    <ButtonRoute
                        variant="contained"
                        startIcon={<img src={Geo} alt="Favorite" />}
                        data-testid="button-route"
                        onClick={handleClickRoute}
                    >
                        <Typography variant="button">Маршрут</Typography>
                    </ButtonRoute>
                </Actions>
            </CardPlaceWrapper>
        </InfoWindow>
    )
}
