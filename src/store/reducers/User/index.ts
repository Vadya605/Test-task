import { IUser } from '@/interfaces/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IUser = {
    id: '',
    email: '',
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.id = ''
            state.email = ''
            state.token = ''
        },
    },
})

export const { setUser, removeUser } = UserSlice.actions

export default UserSlice.reducer;