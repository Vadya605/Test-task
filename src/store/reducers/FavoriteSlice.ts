import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFavorite } from '@/interfaces/IFavorite'

interface FavoriteState {
    favorites: IFavorite[]
}

const initialState: FavoriteState = {
    favorites: []
}

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IFavorite>) {
            state.favorites.push(action.payload)
        },
        removeFavorite(state, action: PayloadAction<IFavorite>) {
            state.favorites = state.favorites.filter(item => item.place_id !== action.payload.place_id)
        }
    },
})

export const FavoriteServices = {
    actions: FavoriteSlice.actions
}

export default FavoriteSlice.reducer;