import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaletteMode } from "@mui/material";

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

export const { setMode } = ModeSlice.actions

export default ModeSlice.reducer;