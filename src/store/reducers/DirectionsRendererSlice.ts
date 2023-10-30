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
        clearDirections(state){
            state.directionsRenderer?.setMap(null)
            state.directionsRenderer = null
        }
    },
})

export const { setDirectionsRenderer, clearDirections } = DirectionsRendererSlice.actions

export default DirectionsRendererSlice.reducer;