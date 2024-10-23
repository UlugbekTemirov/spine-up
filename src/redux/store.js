import { configureStore } from '@reduxjs/toolkit'

// slices
import configSlice from './slices/config.slice'

export const store = configureStore({
    reducer: {
        config: configSlice
    },
})