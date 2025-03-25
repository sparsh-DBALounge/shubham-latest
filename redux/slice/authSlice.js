import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
         },

        removeUser: (state, action) => { }
    }
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer