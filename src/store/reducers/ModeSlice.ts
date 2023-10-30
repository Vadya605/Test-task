import { PaletteMode } from "@mui/material";

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModeState {
    mode: PaletteMode
}

const initialState: ModeState = {
    mode: 'light'
} 

export const ModeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<PaletteMode>){
            state.mode = action.payload
        }
    },
})

export const ModeServices = {
    actions: ModeSlice.actions
}

export default ModeSlice.reducer;