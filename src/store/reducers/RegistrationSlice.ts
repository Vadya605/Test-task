import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
}

interface RegisrtationState {
    isOpen: boolean,
    isLoading: boolean,
    userData: IUser
}

const initialState: RegisrtationState = {
    isOpen: false,
    isLoading: false,
    userData: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }
}

export const RegisrtationSlice = createSlice({
    name: 'regisrtation',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setUserData(state, action: PayloadAction<IUser>){
            state.userData = action.payload
        }
    },
})

export const RegisrtationServices = {
    actions: RegisrtationSlice.actions
}

export default RegisrtationSlice.reducer;