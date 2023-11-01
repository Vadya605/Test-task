import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthModalState {
    isOpen: boolean,
    selectedForm: string
}

const initialState: AuthModalState = {
    isOpen: false,
    selectedForm: 'login'
} 

export const AuthModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        setIsOpenAuthModal(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        },
        setSelectedForm(state, action: PayloadAction<string>){
            state.selectedForm = action.payload
        }
    },
})

export const { setIsOpenAuthModal, setSelectedForm } = AuthModalSlice.actions

export default AuthModalSlice.reducer;