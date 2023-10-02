import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface DrawerState {
    isOpen: boolean,
    selectedSection: string | null
}

const initialState: DrawerState = {
    isOpen: false,
    selectedSection: null
} 

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        setOpen(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        },
        setSelectedSection(state, action: PayloadAction<string>){
            state.selectedSection = action.payload
        }
    },
})

export const DrawerServices = {
    actions: DrawerSlice.actions
}

export default DrawerSlice.reducer;