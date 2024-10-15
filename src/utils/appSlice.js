import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        videosList: [],
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        videosList: (state, action) => {
            state.videosList = action.payload
        }
    }
})

export const { toggleMenu, closeMenu, videosList } = appSlice.actions
export default appSlice.reducer