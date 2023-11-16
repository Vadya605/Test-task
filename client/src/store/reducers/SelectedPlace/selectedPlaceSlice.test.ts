import SelectedPlaceSlice, { setSelectedPlace } from '@/store/reducers/SelectedPlace'

describe('Тестирование selected place slice', () => {
    const initialState = {
        selectedPlace: null,
    }

    test('Тестирование initial state', () => {
        const result = SelectedPlaceSlice(initialState, { type: '' })

        expect(result).toEqual(initialState)
    })

    test('Тестирование setSelected', () => {
        const payload = {
            name: 'test-place',
        }

        const action = {
            type: setSelectedPlace.type,
            payload: payload,
        }

        const result = SelectedPlaceSlice(initialState, action)

        expect(result.selectedPlace).toEqual(payload)
    })
})
