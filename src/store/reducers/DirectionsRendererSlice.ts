import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface DirectionsRendererState {
    directionsRenderer: google.maps.DirectionsRenderer | null
}

const initialState: DirectionsRendererState = {
    directionsRenderer: null
}

export const DirectionsRendererSlice = createSlice({
    name: 'directionsRenderer',
    initialState,
    reducers: {
        setDirectionsRenderer(state, action: PayloadAction<google.maps.DirectionsRenderer | null>){
            state.directionsRenderer = action.payload
        },
    },
})

export const DirectionsRendererServices = {
    actions: DirectionsRendererSlice.actions
}

export default DirectionsRendererSlice.reducer;