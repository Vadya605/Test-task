import { DEFAULT_CENTER } from "@/constants";
<<<<<<< HEAD:src/tests/slices/mapSlice.test.ts
import MapSlice, { MapServices } from "@/store/reducers/MapSlice";
=======
import MapSlice, { setCenter, setIsLoaded, setUserLocation, setZoom } from "@/store/reducers/Map";
>>>>>>> feature/review-fixes:src/store/reducers/Map/mapSlice.test.ts

describe('Тестирование MapSlice', () => {
    const initialState = {
        isLoaded: false,
        map: null,
        center: DEFAULT_CENTER,
        userLocation: DEFAULT_CENTER,
        zoom: 15,
    };

    test('Тестирование initial state', () => {
        const result = MapSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    test('Тестирование метода setCenter ', () => {
        const payload = { lat: 50, lng: 35 };
        const action = {
            type: setCenter.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.center).toEqual(payload);
    });

    test('Тестирование метода setIsLoaded ', () => {
        const payload = true;
        const action = {
            type: setIsLoaded.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.isLoaded).toEqual(payload);
    });

    test('Тестирование метода setUserLocation ', () => {
        const payload = { lat: 40, lng: 30 };
        const action = {
            type: setUserLocation.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.userLocation).toEqual(payload);
    });

    test('Тестирование метода setZoom ', () => {
        const payload = 10;
        const action = {
            type: setZoom.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.zoom).toEqual(payload);
    });
});
