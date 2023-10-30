import SearchSlice, { SearchServices } from "@/store/reducers/SearchSlice";

describe('Тестирование SearchSlice', () => {
    const initialState = {
        selectedPlaces: [],
        foundPlaces: [],
        searchRadius: 1,
    };

    test('Тестирование начального состояния', () => {
        const result = SearchSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода addSelectedPlace', () => {
        const payload = 'Природа';
        const action = {
            type: SearchServices.actions.addSelectedPlace.type,
            payload: payload,
        };
        const result = SearchSlice(initialState, action);
        expect(result.selectedPlaces).toContain(payload);
    });

    test('Тестирование метода removeSelectedPlace', () => {
        const initialStateWtesthPlace = {
            ...initialState,
            selectedPlaces: ['Природа', 'Культура'],
        };

        const payload = 'Культура';
        const action = {
            type: SearchServices.actions.removeSelectedPlace.type,
            payload: payload,
        };
        const result = SearchSlice(initialStateWtesthPlace, action);
        expect(result.selectedPlaces).not.toContain(payload);
    });

    test('Тестирование метода addFoundPlaces', () => {
        const payload = [
            { name: 'Place 1' },
            { name: 'Place 2' },
        ];
        const action = {
            type: SearchServices.actions.addFoundPlaces.type,
            payload: payload,
        };
        const result = SearchSlice(initialState, action);
        expect(result.foundPlaces).toEqual(payload);
    });

    test('Тестирование метода clearFoundPlaces', () => {
        const intestialStateWtesthFoundPlaces = {
            ...initialState,
            foundPlaces: [{ name: 'Place 1' }, { name: 'Place 2' }],
        };
        const action = {
            type: SearchServices.actions.clearFoundPlaces.type,
        };
        const result = SearchSlice(intestialStateWtesthFoundPlaces, action);
        expect(result.foundPlaces).toEqual([]);
    });

    test('Тестирование метода setSearchRadius', () => {
        const payload = 5;
        const action = {
            type: SearchServices.actions.setSearchRadius.type,
            payload: payload,
        };
        const result = SearchSlice(initialState, action);
        expect(result.searchRadius).toEqual(payload);
    });
});
