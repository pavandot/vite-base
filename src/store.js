import { configureStore } from '@reduxjs/toolkit'

// Reducers
import authorsSlice from '@/features/authors/slice/authorsSlice'
export const store = configureStore({
    reducer: {
        authors: authorsSlice,
    },
})
