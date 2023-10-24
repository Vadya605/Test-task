import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id: string,
    email: string,
    token: string
}

const initialState: UserState = {
    id: '',
    email: '',
    token: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
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

export const UserServices = {
    actions: UserSlice.actions
}

export default UserSlice.reducer;