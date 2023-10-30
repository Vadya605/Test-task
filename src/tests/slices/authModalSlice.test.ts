import AuthModalSlice, { AuthModalServices } from "@/store/reducers/AuthModalSlice";

describe('Тестирование authModalSlice', () => {
    const initialState = {
        isOpen: false,
        selectedForm: 'login',
    };

    test('Тестирование начального состояния', () => {
        const result = AuthModalSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода "setIsOpen"', () => {
        const payload = true;
        const action = {
            type: AuthModalServices.actions.setIsOpen.type,
            payload: payload,
        };
        const result = AuthModalSlice(initialState, action);
        expect(result.isOpen).toEqual(payload);
    });

    test('Тестирование метода "setSelectedForm"', () => {
        const payload = 'sign up';
        const action = {
            type: AuthModalServices.actions.setSelectedForm.type,
            payload: payload,
        };
        const result = AuthModalSlice(initialState, action);
        expect(result.selectedForm).toEqual(payload);
    });
});
