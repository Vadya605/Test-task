import { DEFAULT_CENTER } from '@/constants'
import { ILocation } from '@/interfaces/ILocation'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface MapState {
    isLoaded: boolean,
    map: google.maps.Map | null,
    center: ILocation,
    userLocation: ILocation,
    zoom: number,
}

const initialState: MapState = {
    isLoaded: false,
    map: null,
    center: DEFAULT_CENTER,
    userLocation: DEFAULT_CENTER,
    zoom: 15,
}

export const MapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setCenter(state, action: PayloadAction<ILocation>){
            state.center = action.payload
        },
        setMap(state, action: PayloadAction<google.maps.Map | null>){
            state.map = action.payload
        },
        setIsLoaded(state, action: PayloadAction<boolean>){
            state.isLoaded = action.payload
        },
        setUserLocation(state, action: PayloadAction<ILocation>){
            state.userLocation = action.payload
        },
        setZoom(state, action: PayloadAction<number>){
            state.zoom = action.payload
        }
    },
})

export const MapServices = {
    actions: MapSlice.actions
}

export default MapSlice.reducer;