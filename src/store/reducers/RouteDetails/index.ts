import { ILocation } from '@/interfaces/ILocation'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RouteDetailsState {
    directionsRenderer: google.maps.DirectionsRenderer | null,
    distanceTotal: number,
    distanceTraveled: number,
    placeLocation: ILocation,
    time: string
}

const initialState: RouteDetailsState = {
    directionsRenderer: null,
    distanceTotal: 0,
    distanceTraveled: 0,
    placeLocation: {lat: 0, lng: 0},
    time: ''
}

interface RouteCreate {
    directionsRenderer: google.maps.DirectionsRenderer | null,
    distanceTotal: number,
    placeLocation: ILocation,
    time: string
}

interface RouteUpdate {
    directionsRenderer: google.maps.DirectionsRenderer | null,
    distanceTraveled: number
    time: string
}

export const RouteDetailsSlice = createSlice({
    name: 'routeDetails',
    initialState,
    reducers: {
        setRoute(state, action: PayloadAction<RouteCreate>){
            state.directionsRenderer = action.payload.directionsRenderer
            state.distanceTotal = action.payload.distanceTotal
            state.placeLocation = action.payload.placeLocation
            state.time = action.payload.time
        },
        updateRoute(state, action: PayloadAction<RouteUpdate>){
            state.directionsRenderer = action.payload.directionsRenderer
            state.time = action.payload.time
            state.distanceTraveled = action.payload.distanceTraveled
        },
        clearRoute(state){
            state.directionsRenderer?.setMap(null)
            state.directionsRenderer = null
        }
    },
})

export const { setRoute, updateRoute, clearRoute } = RouteDetailsSlice.actions

export default RouteDetailsSlice.reducer;