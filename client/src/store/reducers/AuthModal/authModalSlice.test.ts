import AuthModalSlice, { setIsOpenAuthModal, setSelectedForm } from '@/store/reducers/AuthModal'
import { AuthFormType } from '@/types'

describe('Тестирование authModalSlice', () => {
    const initialState = {
        isOpen: false,
        selectedForm: 'login' as AuthFormType,
    }

    test('Тестирование начального состояния', () => {
        const result = AuthModalSlice(initialState, { type: '' })
        expect(result).toEqual(initialState)
    })

    test('Тестирование метода "setIsOpenAuthModal"', () => {
        const payload = true
        const action = {
            type: setIsOpenAuthModal.type,
            payload: payload,
        }
        const result = AuthModalSlice(initialState, action)
        expect(result.isOpen).toEqual(payload)
    })

    test('Тестирование метода "setSelectedForm"', () => {
        const payload = 'sign up'
        const action = {
            type: setSelectedForm.type,
            payload: payload,
        }
        const result = AuthModalSlice(initialState, action)
        expect(result.selectedForm).toEqual(payload)
    })
})
