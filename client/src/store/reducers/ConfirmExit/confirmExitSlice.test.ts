import ConfirmExitSlice, { setIsOpenConfirmExit } from "@/store/reducers/ConfirmExit";

describe('Тестирование confirmExitSlice', () => {
    const initialState = {
        isOpen: false,
    };

    test('Тестирование начального состояния', () => {
        const result = ConfirmExitSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода "setIsOpenConfirmExit"', () => {
        const payload = true;
        const action = {
            type: setIsOpenConfirmExit.type,
            payload: payload,
        };
        const result = ConfirmExitSlice(initialState, action);
        expect(result.isOpen).toEqual(payload);
    });
});
