import DrawerSlice, { DrawerServices } from "@/store/reducers/DrawerSlice";

describe('Тестирование DrawerSlice', () => {
    const initialState = {
        isOpen: false,
        selectedSection: null,
    };

    it('Тестирование начального состояния', () => {
        const result = DrawerSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('Тестирование метода "setOpen"', () => {
        const payload = true;
        const action = {
            type: DrawerServices.actions.setOpen.type,
            payload: payload,
        };
        const result = DrawerSlice(initialState, action);
        expect(result.isOpen).toEqual(payload);
    });

    it('Тестирование метода "setSelectedSection"', () => {
        const payload = 'settings';
        const action = {
            type: DrawerServices.actions.setSelectedSection.type,
            payload: payload,
        };
        const result = DrawerSlice(initialState, action);
        expect(result.selectedSection).toEqual(payload);
    });
});
