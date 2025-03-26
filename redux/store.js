import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loaderSlice from './slice/loaderSlice'
import authSlice from './slice/authSlice'
import dashboardSlice from './slice/dashboardSlice'
import fileSlice from './slice/fileSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['auth', 'file']
}

const rootReducer = combineReducers({
    loader: loaderSlice,
    auth: authSlice,
    dashboard: dashboardSlice,
    file: fileSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
