import { PaletteMode } from "@mui/material";

import ModeSlice, { setMode } from "@/store/reducers/Mode";

describe('Тестирование среза ModeSlice', () => {
    const intestialState = {
        mode: 'light' as PaletteMode,
    };

    test('Тестирование intestialState', () => {
        const result = ModeSlice(intestialState, { type: '' });
        expect(result).toEqual(intestialState);
    });

    test('Тестирование метода setMode', () => {
        const payload: PaletteMode = 'dark';
        const action = {
            type: setMode.type,
            payload: payload,
        };
        const result = ModeSlice(intestialState, action);
        expect(result.mode).toEqual(payload);
    });
});
