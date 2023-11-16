import AutoCompleteSearchSlice, { setResultLocation } from '@/store/reducers/AutoCompleteSearch'

describe('Тестирование AutoCompleteSearchSlice', () => {
    const initialState = {
        resultLocation: null,
    }

    test('Тестирование initial state', () => {
        const result = AutoCompleteSearchSlice(initialState, { type: '' })
        expect(result).toEqual(initialState)
    })

    test('Тестирование метода "setIsOpenConfirmExit"', () => {
        const payload = { lat: 30, lng: 30 }
        const action = {
            type: setResultLocation.type,
            payload: payload,
        }
        const result = AutoCompleteSearchSlice(initialState, action)
        expect(result.resultLocation).toEqual(payload)
    })
})
