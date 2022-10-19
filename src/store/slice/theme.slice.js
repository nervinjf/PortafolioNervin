import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: true,
    reducers: {
        changeTheme: ( state, action ) =>{
            return action.payload
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
