import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface SelectedFavoriteState {
    id: number | null
}

const initialState: SelectedFavoriteState = {
    id: null
}

export const SelectedFavoriteSlice = createSlice({
    name: 'selectedFavorite',
    initialState,
    reducers: {
        setSelected(state, action: PayloadAction<number | null>){
            state.id = action.payload
        }
    },
})

export const SelectedFavoriteServices = {
    actions: SelectedFavoriteSlice.actions
}

export default SelectedFavoriteSlice.reducer;