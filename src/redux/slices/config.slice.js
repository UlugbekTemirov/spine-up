import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebar: false,
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    },
})

export const { toggleSidebar } = configSlice.actions

export default configSlice.reducer