import UserSlice, { removeUser,setUser } from "@/store/reducers/User";

describe('Тестирование UserSlice', () => {
    const initialState = {
        id: '',
        email: '',
        token: ''
    };

    test('Тестирование начального состояния', () => {
        const result = UserSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода "setUser"', () => {
        const payload = {
            id: '12345',
            email: 'example@example.com',
            token: 'token123'
        };
        const action = {
            type: setUser.type,
            payload: payload,
        };
        const result = UserSlice(initialState, action);
        expect(result).toEqual(payload);
    });

    test('Тестирование метода "removeUser"', () => {
        const initialStateWithUser = {
            id: '12345',
            email: 'example@example.com',
            token: 'token123'
        };
        const action = {
            type: removeUser.type,
        };
        const result = UserSlice(initialStateWithUser, action);
        expect(result).toEqual(initialState);
    });
});
