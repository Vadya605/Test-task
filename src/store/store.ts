import { configureStore, combineReducers } from '@reduxjs/toolkit'
import SelectedFavoriteReducer from './reducers/SelectedFavoriteSlice'
import DrawerReducer from './reducers/DrawerSlice'
import MapReducer from './reducers/MapSlice'
import SearchReducer from './reducers/SearchSlice'
import FavoriteReducer from './reducers/FavoriteSlice'
import SelectedPlaceReducer from './reducers/SelectedPlaceSlice'
import {
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Favorites'],
}

const rootReducer = combineReducers({
    SelectedFavorite: SelectedFavoriteReducer,
    Drawer: DrawerReducer,
    Map: MapReducer,
    Search: SearchReducer,
    Favorites: FavoriteReducer,
    SelectedPlace: SelectedPlaceReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
