import { combineReducers,configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer, 
    persistStore, 
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import DirectionsRendererReducer from './reducers/DirectionsRendererSlice'
import DrawerReducer from './reducers/DrawerSlice'
import FavoriteReducer from './reducers/FavoriteSlice'
import MapReducer from './reducers/MapSlice'
import RouteDetailsReducer from './reducers/RouteDetailsSlice'
import SearchReducer from './reducers/SearchSlice'
import SelectedFavoriteReducer from './reducers/SelectedFavoriteSlice'
import SelectedPlaceReducer from './reducers/SelectedPlaceSlice'
import UserReducer from './reducers/UserSlice'
import AuthModalReducer from './reducers/AuthModalSlice'
import ConfirmExitReducer from './reducers/ConfirmExitSlice'

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
    DirectionsRenderer: DirectionsRendererReducer,
    RouteDetails: RouteDetailsReducer,
    User: UserReducer,
    AuthModal: AuthModalReducer,
    ConfirmExit: ConfirmExitReducer,
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
export type AppDispatch = typeof store.dispatch
