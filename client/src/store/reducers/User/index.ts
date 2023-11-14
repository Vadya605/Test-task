import { IUser } from '@/interfaces/IUser'
import { IUserGeographicData } from '@/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserPersonalData } from '@/interfaces/IUserPersonalData'

const initialState: IUser = {
    id: '',
    email: '',
    token: '',
    city: '',
    country: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPersonalData(state, action: PayloadAction<IUserPersonalData>) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        setGeographicData(state, action: PayloadAction<IUserGeographicData>){
            state.city = action.payload.city || ''
            state.country = action.payload.country || ''
        },
        removeUser(state) {
            state.id = ''
            state.email = ''
            state.token = ''
            state.city = ''
            state.country = ''
        },
    },
})

export const { setPersonalData, setGeographicData, removeUser } = UserSlice.actions

export default UserSlice.reducer;