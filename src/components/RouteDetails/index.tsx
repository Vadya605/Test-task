import { useEffect } from 'react'

import {Box,Typography} from '@mui/material'

import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { DirectionsRendererServices, RouteDetailsServices } from "@/store/reducers";
import { getDirections } from '@/utils/route';

import { Details, DetailsWrapper, Progress, Row } from "./styled";

export default function RouteDetails(){
    const dispatch = useAppDispatch()
    const {distanceTotal, distanceTraveled, placeLocation, time} = useTypeSelector(state => state.RouteDetails)
    const { map, userLocation} = useTypeSelector(state => state.Map)
    const {directionsRenderer} = useTypeSelector(state => state.DirectionsRenderer)

    const progress = (distanceTraveled / distanceTotal) * 100
    const distanceRemaining = ((distanceTotal - distanceTraveled) / 1000).toFixed(0)
    console.log(directionsRenderer);
    

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
            
            dispatch(RouteDetailsServices.actions.setdDistanceTraveled(distanceTraveled))
            dispatch(RouteDetailsServices.actions.setTime(time))
            dispatch(DirectionsRendererServices.actions.setDirectionsRenderer(directionsRenderer))
        }

        placeLocation && map && fetchDirections()
    }, [userLocation])
    
    return (
        <Details data-testid='route-details'>
            <DetailsWrapper>
                <Progress variant="determinate" value={progress} />
                <Row>
                    <Box>
                        <Typography variant="h1">{distanceRemaining} km</Typography>
                        <Typography variant="caption">дистанция</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h1">{time}</Typography>
                        <Typography variant="caption">приблизительное время</Typography>
                    </Box>
                </Row>
            </DetailsWrapper>
        </Details>
    )
}