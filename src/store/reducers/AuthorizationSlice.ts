import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
    email: string, 
    password: string
}

interface AuthorizationState {
    isOpen: boolean,
    isLoading: boolean,
    userData: IUser
}

const initialState: AuthorizationState = {
    isOpen: false,
    isLoading: false,
    userData: {
        email: '',
        password: ''
    }
} 

export const AuthorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        },
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload
        },
        setUserData(state, action: PayloadAction<IUser>){
            state.userData = action.payload
        }
    },
})

export const AuthorizationServices = {
    actions: AuthorizationSlice.actions
}

export default AuthorizationSlice.reducer;