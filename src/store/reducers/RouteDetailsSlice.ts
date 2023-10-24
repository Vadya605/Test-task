import { ILocation } from '@/interfaces/ILocation'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RouteDetailsState {
    distanceTotal: number,
    distanceTraveled: number,
    placeLocation: ILocation,
    time: string
}

const initialState: RouteDetailsState = {
    distanceTotal: 0,
    distanceTraveled: 0,
    placeLocation: {lat: 0, lng: 0},
    time: ''
}

export const RouteDetailsSlice = createSlice({
    name: 'routeDetails',
    initialState,
    reducers: {
        setPlaceLocation(state, action: PayloadAction<ILocation>) {
            state.placeLocation = action.payload
        },
        setDistanceTotal(state, action: PayloadAction<number>) {
            state.distanceTotal = action.payload
        },
        setdDistanceTraveled(state, action: PayloadAction<number>) {
            state.distanceTraveled = action.payload
        },
        setTime(state, action: PayloadAction<string>){
            state.time = action.payload
        }
    },
})

export const RouteDetailsServices = {
    actions: RouteDetailsSlice.actions
}

export default RouteDetailsSlice.reducer;