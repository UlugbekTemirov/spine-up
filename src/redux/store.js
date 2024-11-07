import { configureStore } from '@reduxjs/toolkit'

// slices
import configSlice from './slices/config.slice'
import clientSlice from './api/client.slice'
import certificates from './api/certificates.slice'
import staff from './api/staff.slice'
import vacancy from './api/vacancy.slice'
import product from './api/products.slice'

export const store = configureStore({
    reducer: {
        config: configSlice,
        client: clientSlice,
        certificates,
        staff,
        vacancy,
        product
    },
})