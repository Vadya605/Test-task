import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface SelectedPlaceState {
    selectedPlace: google.maps.places.PlaceResult | null
}

const initialState: SelectedPlaceState = {
    selectedPlace: null
}

export const SelectedPlaceSlice = createSlice({
    name: 'selectedPlace',
    initialState,
    reducers: {
        setSelectedPlace(state, action: PayloadAction<google.maps.places.PlaceResult | null>){
            state.selectedPlace = action.payload
        }
    },
})

export const { setSelectedPlace } = SelectedPlaceSlice.actions

export default SelectedPlaceSlice.reducer;