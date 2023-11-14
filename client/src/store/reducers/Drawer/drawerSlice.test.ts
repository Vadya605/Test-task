import DrawerSlice, { setIsOpenDrawer, setSelectedSection } from "@/store/reducers/Drawer";

describe('Тестирование DrawerSlice', () => {
    const initialState = {
        isOpen: false,
        selectedSection: null,
    };

    test('Тестирование initial state', () => {
        const result = DrawerSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода "setOpen"', () => {
        const payload = true;
        const action = {
            type: setIsOpenDrawer.type,
            payload: payload,
        };
        const result = DrawerSlice(initialState, action);
        expect(result.isOpen).toEqual(payload);
    });

    test('Тестирование метода "setSelectedSection"', () => {
        const payload = 'exaple';
        const action = {
            type: setSelectedSection.type,
            payload: payload,
        };
        const result = DrawerSlice(initialState, action);
        expect(result.selectedSection).toEqual(payload);
    });
});
