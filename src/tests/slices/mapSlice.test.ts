import MapSlice, { MapServices } from "@/store/reducers/MapSlice";
import { DEFAULT_CENTER } from "@/constants";

describe('Тестирование MapSlice', () => {
    const initialState = {
        isLoaded: false,
        map: null,
        center: DEFAULT_CENTER,
        userLocation: DEFAULT_CENTER,
        zoom: 15,
    };

    it('Тестирование initial state', () => {
        const result = MapSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('Тестирование метода setCenter ', () => {
        const payload = { lat: 50, lng: 35 };
        const action = {
            type: MapServices.actions.setCenter.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.center).toEqual(payload);
    });

    it('Тестирование метода setIsLoaded ', () => {
        const payload = true;
        const action = {
            type: MapServices.actions.setIsLoaded.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.isLoaded).toEqual(payload);
    });

    it('Тестирование метода setUserLocation ', () => {
        const payload = { lat: 40, lng: 30 };
        const action = {
            type: MapServices.actions.setUserLocation.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.userLocation).toEqual(payload);
    });

    it('Тестирование метода setZoom ', () => {
        const payload = 10;
        const action = {
            type: MapServices.actions.setZoom.type,
            payload: payload,
        };
        const result = MapSlice(initialState, action);
        expect(result.zoom).toEqual(payload);
    });
});
