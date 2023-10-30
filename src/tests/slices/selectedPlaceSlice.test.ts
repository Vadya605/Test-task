import SelectedPlaceSlice, {SelectedPlaceServices} from "@/store/reducers/SelectedPlaceSlice"

describe('Тестирование selected place slice', () => {
    const initialState = {
        selectedPlace: null
    }

    it('Тестирование initial state', () => {
        const result = SelectedPlaceSlice(initialState, { type: '' })

        expect(result).toEqual(initialState)
    })

    it('Тестирование setSelected', () => {
        const payload = {
            name: 'test-place'
        }

        const action = {
            type: SelectedPlaceServices.actions.setSelected.type,
            payload: payload
        }

        const result = SelectedPlaceSlice(initialState, action)

        expect(result.selectedPlace).toEqual(payload)
    })

})