import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboard: {
        userDataCount: 0,
        userStatusCount: 0
    }
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardData: (state, action) => {
            state.dashboard = action.payload
        }
    }
})

export const { setDashboardData } = dashboardSlice.actions
export default dashboardSlice.reducer