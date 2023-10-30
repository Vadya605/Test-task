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
        setIsOpenDrawer(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        },
        setSelectedSection(state, action: PayloadAction<string>){
            state.selectedSection = action.payload
        }
    },
})

export const { setIsOpenDrawer, setSelectedSection } = DrawerSlice.actions

export default DrawerSlice.reducer;