import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface MapState {
    isLoaded: boolean,
    map: google.maps.Map | null,
    center: {
        lat: number,
        lng: number
    },
    travelInfo: {
        distanceTraveled: string,
        distance: string,
        placeGeometry: google.maps.LatLng | null,
        time: string,
        progress: number
    }
}

const initialState: MapState = {
    isLoaded: false,
    map: null,
    center: {
        lat: 51.5085300, 
        lng: -0.1257400
    },
    travelInfo: {
        distanceTraveled: '',
        distance: '',
        placeGeometry: null,
        time: '',
        progress: 0
    }
}

export const MapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setCenter(state, action: PayloadAction<{ lat: number, lng: number }>){
            state.center.lat = action.payload.lat
            state.center.lng = action.payload.lng
        },
        setMap(state, action: PayloadAction<google.maps.Map | null>){
            state.map = action.payload
        },
        setIsLoaded(state, action: PayloadAction<boolean>){
            state.isLoaded = action.payload
        }
    },
})

export const MapServices = {
    actions: MapSlice.actions
}

export default MapSlice.reducer;