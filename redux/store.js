import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loaderSlice from './slice/loaderSlice'
import authSlice from './slice/authSlice'

const rootReducer = combineReducers({
    loaderSlice,
    authSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export default store