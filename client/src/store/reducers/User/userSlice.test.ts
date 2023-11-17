import UserSlice, { removeUser, setGeographicData, setPersonalData } from '@/store/reducers/User'

describe('Тестирование UserSlice', () => {
    const initialState = {
        id: '',
        email: '',
        token: '',
        city: '',
        country: '',
    }

    test('Тестирование начального состояния', () => {
        const result = UserSlice(initialState, { type: '' })
        expect(result).toEqual(initialState)
    })

    test('Тестирование метода "setPersonalData"', () => {
        const payload = {
            id: '12345',
            email: 'example@example.com',
            token: 'token123',
        }
        const action = {
            type: setPersonalData.type,
            payload: payload,
        }
        const result = UserSlice(initialState, action)
        expect(result.id).toEqual(payload.id)
        expect(result.email).toEqual(payload.email)
        expect(result.token).toEqual(payload.token)
    })

    test('Тестирование метода "setGeographicData"', () => {
        const payload = {
            city: 'city',
            country: 'country',
        }
        const action = {
            type: setGeographicData.type,
            payload: payload,
        }
        const result = UserSlice(initialState, action)
        expect(result.city).toEqual(payload.city)
        expect(result.country).toEqual(payload.country)
    })

    test('Тестирование метода "removeUser"', () => {
        const initialStateWithUser = {
            id: '12345',
            email: 'example@example.com',
            token: 'token123',
            city: 'city',
            country: 'country',
        }
        const action = {
            type: removeUser.type,
        }
        const result = UserSlice(initialStateWithUser, action)
        expect(result).toEqual(initialState)
    })
})
