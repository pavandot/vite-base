import { createSlice } from '@reduxjs/toolkit'

export const authorsSlice = createSlice({
    name: 'authors',
    initialState: [],
    reducers: {
        addAuthors: (state, action) => action.payload,
        deleteAuthor: (state, action) => state?.filter((user) => user?.id != action.payload),
    },
})

// Action creators are generated for each case reducer function
export const { addAuthors, deleteAuthor } = authorsSlice.actions

export default authorsSlice.reducer
