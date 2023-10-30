import FavoriteSlice, { FavoriteServices } from "@/store/reducers/FavoriteSlice";

describe('Тестирование favoriteSlice', () => {
    const initialState = {
        favorites: [],
    };

    it('Тестирование initial state', () => {
        const result = FavoriteSlice(initialState, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('Тестирование метода "setFavorites"', () => {
        const payload = [
            { place_id: '1', name: 'Место 1' },
            { place_id: '2', name: 'Место 2' },
        ];
        const action = {
            type: FavoriteServices.actions.setFavorites.type,
            payload: payload,
        };
        const result = FavoriteSlice(initialState, action);
        expect(result.favorites).toEqual(payload);
    });

    it('Тестирование метода "addFavorite"', () => {
        const favoriteItem = {
            place_id: '4',
            name: 'Место 4',
            description: 'description',
            photo: 'photo',
            icon: 'icon',
            location: {
                lat: 50,
                lng: 50
            }
        }
        const action = {
            type: FavoriteServices.actions.addFavorite.type,
            payload: favoriteItem,
        };
        const result = FavoriteSlice(initialState, action);
        expect(result.favorites).toContain(favoriteItem);
    });

    it('Тестирование метода "removeFavorite"', () => {
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
                        lng: 50
                    }
                }
            ],
        };
        const itemToRemove = { place_id: '4', name: 'Место 4' };
        const action = {
            type: FavoriteServices.actions.removeFavorite.type,
            payload: itemToRemove,
        };
        const result = FavoriteSlice(initialStateWithFavorites, action);
        expect(result.favorites).not.toContain(itemToRemove);
    });
});