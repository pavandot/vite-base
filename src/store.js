import { configureStore } from '@reduxjs/toolkit'

// Reducers
import userReducer from '@/features/users/slice/usersSlice'
export const store = configureStore({
    reducer: {
        users: userReducer,
    },
})
