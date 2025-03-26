import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    file: null
}

const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setFile: (state, action) => {
            state.file = action.payload
        },

        removeFile: (state) => {
            state.file = null
        }
    }
})

export const { setFile, removeFile } = fileSlice.actions
export default fileSlice.reducer