import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface SelectedFavoriteState {
    place_id: string
}

const initialState: SelectedFavoriteState = {
    place_id: ''
}

export const SelectedFavoriteSlice = createSlice({
    name: 'selectedFavorite',
    initialState,
    reducers: {
        setSelectedFavorite(state, action: PayloadAction<string>){
            state.place_id = action.payload
        }
    },
})

export const { setSelectedFavorite } = SelectedFavoriteSlice.actions

export default SelectedFavoriteSlice.reducer;