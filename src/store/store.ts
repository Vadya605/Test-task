import { configureStore } from '@reduxjs/toolkit'
import SelectedFavoriteReducer from './reducers/SelectedFavoriteSlice'
import DrawerReducer from './reducers/DrawerSlice'
import MapReducer from './reducers/MapSlice'
import SearchReducer from './reducers/SearchSlice'

export const store = configureStore ({
    reducer: {
        SelectedFavorite: SelectedFavoriteReducer,
        Drawer: DrawerReducer,
        Map: MapReducer,
        Search: SearchReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
