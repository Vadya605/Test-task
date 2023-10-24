import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConfirmExitState {
    isOpen: boolean,
}

const initialState: ConfirmExitState = {
    isOpen: false,
} 

export const ConfirmExitSlice = createSlice({
    name: 'confirmExit',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        },
    },
})

export const ConfirmExitServices = {
    actions: ConfirmExitSlice.actions
}

export default ConfirmExitSlice.reducer;