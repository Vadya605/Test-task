import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface SearchState {
    selectedPlaces: string[],
    foundPlaces: google.maps.places.PlaceResult[],
    searchRadius: string
}

const initialState: SearchState = {
    selectedPlaces: [],
    foundPlaces: [],
    searchRadius: '',
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSelectedPlace(state, action: PayloadAction<string>){
            state.selectedPlaces.push(action.payload)
        },
        removeSelectedPlace(state, action: PayloadAction<string>){
            state.selectedPlaces = state.selectedPlaces.filter(place => place !== action.payload)
        },
        addFoundPlaces(state, action: PayloadAction<google.maps.places.PlaceResult[]>){
            state.foundPlaces = state.foundPlaces.concat(action.payload)
        },
        clearFoundPlaces(state){
            state.foundPlaces = []
        },
        setSearchRadius(state, action: PayloadAction<string>){
            state.searchRadius = action.payload
        }
    },
})

export const SearchServices = {
    actions: SearchSlice.actions
}

export default SearchSlice.reducer;