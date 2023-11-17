import FavoriteSlice, { addFavorite, removeFavorite, setFavorites } from '@/store/reducers/Favorites'

describe('Тестирование favoriteSlice', () => {
    const initialState = {
        favorites: [],
    }

    test('Тестирование initial state', () => {
        const result = FavoriteSlice(initialState, { type: '' })
        expect(result).toEqual(initialState)
    })

    test('Тестирование метода "setFavorites"', () => {
        const payload = [
            { place_id: '1', name: 'Место 1' },
            { place_id: '2', name: 'Место 2' },
        ]
        const action = {
            type: setFavorites.type,
            payload: payload,
        }
        const result = FavoriteSlice(initialState, action)
        expect(result.favorites).toEqual(payload)
    })

    test('Тестирование метода "addFavorite"', () => {
        const favoriteItem = {
            place_id: '4',
            name: 'Место 4',
            description: 'description',
            photo: 'photo',
            icon: 'icon',
            location: {
                lat: 50,
                lng: 50,
            },
        }
        const action = {
            type: addFavorite.type,
            payload: favoriteItem,
        }
        const result = FavoriteSlice(initialState, action)
        expect(result.favorites).toContain(favoriteItem)
    })

    test('Тестирование метода "removeFavorite"', () => {
        const initialStateWithFavorites = {
            favorites: [
                {
                    place_id: '4',
                    name: 'Место 4',
                    description: 'description',
                    photo: 'photo',
                    icon: 'icon',
                    location: {
                        lat: 50,
                        lng: 50,
                    },
                },
            ],
        }
        const itemToRemove = { place_id: '4', name: 'Место 4' }
        const action = {
            type: removeFavorite.type,
            payload: itemToRemove,
        }
        const result = FavoriteSlice(initialStateWithFavorites, action)
        expect(result.favorites).not.toContain(itemToRemove)
    })
})
