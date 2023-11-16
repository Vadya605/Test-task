import { ILocation } from '@/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AutoCompleteSearchState {
    resultLocation: ILocation | null
}

const initialState: AutoCompleteSearchState = {
    resultLocation: null,
}

export const AutoCompleteSearchSlice = createSlice({
    name: 'AutoCompleteSearch',
    initialState,
    reducers: {
        setResultLocation(state, action: PayloadAction<ILocation | null>) {
            state.resultLocation = action.payload
        },
    },
})

export const { setResultLocation } = AutoCompleteSearchSlice.actions

export default AutoCompleteSearchSlice.reducer
