import { useEffect } from 'react'

import { Typography } from '@mui/material'

import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { clearDirections, setDirectionsRenderer, setTime, setdDistanceTraveled } from "@/store/reducers";
import { getDirections } from '@/utils/route';

import { ButtonRemoveRoute, Details, DetailsWrapper, Progress, Row } from "./styled";

export default function RouteDetails() {
    const dispatch = useAppDispatch()
    const { distanceTotal, distanceTraveled, placeLocation, time } = useTypeSelector(state => state.RouteDetails)
    const { map, userLocation } = useTypeSelector(state => state.Map)
    const { directionsRenderer } = useTypeSelector(state => state.DirectionsRenderer)
    console.log(directionsRenderer)
    const progress = (distanceTraveled / distanceTotal) * 100
    const distanceRemaining = ((distanceTotal - distanceTraveled) / 1000).toFixed(0)

    const handleClickRemoveRoute = () => {
        dispatch(clearDirections())
    }

    useEffect(() => {
        const fetchDirections = async () => {
            const directionRequest = {
                origin: userLocation,
                destination: placeLocation,
                travelMode: google.maps.TravelMode.WALKING
            }

            const result = await getDirections(directionRequest)
            const distanceTraveled = distanceTotal - (result?.routes[0].legs[0].distance?.value || 0)
            const time = result?.routes[0].legs[0].duration?.text || ''

            dispatch(setdDistanceTraveled(distanceTraveled))
            dispatch(setTime(time))
            dispatch(setDirectionsRenderer(directionsRenderer))
        }

        placeLocation && map && fetchDirections()
    }, [userLocation])

    return (
        <Details data-testid='route-details'>
            <DetailsWrapper>
                <Progress variant="determinate" value={progress} />
                <Row>
                    <div>
                        <Typography variant="h1">{distanceRemaining} km</Typography>
                        <Typography variant="caption">дистанция</Typography>
                    </div>
                    <div>
                        <Typography variant="h1">{time}</Typography>
                        <Typography variant="caption">приблизительное время</Typography>
                    </div>
                </Row>
                <ButtonRemoveRoute onClick={handleClickRemoveRoute}>Удалить маршрут</ButtonRemoveRoute>
            </DetailsWrapper>
        </Details>
    )
}