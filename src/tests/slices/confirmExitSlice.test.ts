import ConfirmExitSlice, { ConfirmExitServices } from "@/store/reducers/ConfirmExitSlice";

describe('Тестирование confirmExitSlice', () => {
    const initialState = {
        isOpen: false,
    };

    it('Тестирование начального состояния', () => {
        const result = ConfirmExitSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('Тестирование метода "setIsOpen"', () => {
        const payload = true;
        const action = {
            type: ConfirmExitServices.actions.setIsOpen.type,
            payload: payload,
        };
        const result = ConfirmExitSlice(initialState, action);
        expect(result.isOpen).toEqual(payload);
    });
});
