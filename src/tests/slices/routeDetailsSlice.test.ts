import RouteDetailsSlice, { RouteDetailsServices } from "@/store/reducers/RouteDetailsSlice";

describe('Тестирование route details slice', () => {
    const initialState = {
        distanceTotal: 0,
        distanceTraveled: 0,
        placeLocation: { lat: 0, lng: 0 },
        time: ''
    }

    it('Тестирование initial state', () => {
        const result = RouteDetailsSlice(initialState, { type: '' })

        expect(result).toEqual(initialState)
    })

    it('Тестирование метода setPlaceLocation', () => {
        const payload = {
            lat: 50,
            lng: 35
        }

        const action = {
            type: RouteDetailsServices.actions.setPlaceLocation.type,
            payload: payload
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.placeLocation).toEqual(payload)
    })

    it('Тестирование метода setDistanceTotal', () => {
        const payload = 100

        const action = {
            type: RouteDetailsServices.actions.setDistanceTotal.type,
            payload: payload
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.distanceTotal).toEqual(payload)
    })

    it('Тестирование метода setdDistanceTraveled', () => {
        const payload = 100

        const action = {
            type: RouteDetailsServices.actions.setdDistanceTraveled.type,
            payload: payload
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.distanceTraveled).toEqual(payload)
    })

    it('Тестирование метода setTime', () => {
        const payload = '1 hour'

        const action = {
            type: RouteDetailsServices.actions.setTime.type,
            payload: payload
        }

        const result = RouteDetailsSlice(initialState, action)

        expect(result.time).toEqual(payload)
    })
})