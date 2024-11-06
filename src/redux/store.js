import { configureStore } from '@reduxjs/toolkit'

// slices
import configSlice from './slices/config.slice'
import clientSlice from './api/client.slice'

export const store = configureStore({
    reducer: {
        config: configSlice,
        client: clientSlice
    },
})