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

import { combineReducers,configureStore } from '@reduxjs/toolkit'

import AuthModalReducer from './reducers/AuthModal'
import ConfirmExitReducer from './reducers/ConfirmExit'
import DrawerReducer from './reducers/Drawer'
import FavoriteReducer from './reducers/Favorites'
import MapReducer from './reducers/Map'
import ModeReducer from './reducers/Mode'
import RouteDetailsReducer from './reducers/RouteDetails'
import SearchReducer from './reducers/Search'
import SelectedFavoriteReducer from './reducers/SelectedFavorite'
import SelectedPlaceReducer from './reducers/SelectedPlace'
import UserReducer from './reducers/User'
import AutoCompleteSearchReducer from './reducers/AutoCompleteSearch'


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['User', 'Mode'],
}

const rootReducer = combineReducers({
    SelectedFavorite: SelectedFavoriteReducer,
    Drawer: DrawerReducer,
    Map: MapReducer,
    Search: SearchReducer,
    Favorites: FavoriteReducer,
    SelectedPlace: SelectedPlaceReducer,
    RouteDetails: RouteDetailsReducer,
    User: UserReducer,
    AuthModal: AuthModalReducer,
    ConfirmExit: ConfirmExitReducer,
    Mode: ModeReducer,
    AutoCompleteSearch: AutoCompleteSearchReducer
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
