import SelectedFavoriteSlice, { setSelectedFavorite } from '@/store/reducers/SelectedFavorite'

describe('Тестирование SelectedFavoriteSlice', () => {
    const initialState = {
        place_id: '',
    }

    test('Тестирование начального состояния', () => {
        const result = SelectedFavoriteSlice(initialState, { type: '' })
        expect(result).toEqual(initialState)
    })

    test('Тестирование метода "setSelected"', () => {
        const payload = '123456'
        const action = {
            type: setSelectedFavorite.type,
            payload: payload,
        }
        const result = SelectedFavoriteSlice(initialState, action)
        expect(result.place_id).toEqual(payload)
    })
})
