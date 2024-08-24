import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUsers: (state, action) => action.payload,
        deleteUser: (state, action) => state?.filter((user) => user?.id != action.payload),
    },
})

// Action creators are generated for each case reducer function
export const { addUsers, deleteUser } = userSlice.actions

export default userSlice.reducer
