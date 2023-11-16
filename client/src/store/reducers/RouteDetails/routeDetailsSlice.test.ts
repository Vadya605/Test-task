import RouteDetailsSlice, { clearRoute, setRoute, updateRoute } from '@/store/reducers/RouteDetails'

describe('Тестирование route details slice', () => {
    const initialState = {
        directionsRenderer: null,
        distanceTotal: 0,
        distanceTraveled: 0,
        placeLocation: { lat: 0, lng: 0 },
        time: '',
    }

    test('Тестирование initial state', () => {
        const result = RouteDetailsSlice(initialState, { type: '' })

        expect(result).toEqual(initialState)
    })

    test('Тестирование метода setRoute', () => {
        const payload = {
            directionsRenderer: null, // т.к тип google
            distanceTotal: 5,
            placeLocation: { lat: 30, lng: 40 },
            time: '5 hour',
        }

        const action = {
            type: setRoute.type,
            payload: payload,
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.directionsRenderer).toEqual(payload.directionsRenderer)
        expect(result.distanceTotal).toEqual(payload.distanceTotal)
        expect(result.placeLocation).toEqual(payload.placeLocation)
        expect(result.time).toEqual(payload.time)
    })

    test('Тестирование метода updateRoute', () => {
        const payload = {
            directionsRenderer: null, // т.к тип google
            distanceTraveled: 5,
            time: '5 hour',
        }

        const action = {
            type: updateRoute.type,
            payload: payload,
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.directionsRenderer).toEqual(payload.directionsRenderer)
        expect(result.distanceTraveled).toEqual(payload.distanceTraveled)
        expect(result.time).toEqual(payload.time)
    })

    test('Тестирование метода clearRoute', () => {
        const action = {
            type: clearRoute.type,
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.directionsRenderer).toEqual(null)
    })
})
