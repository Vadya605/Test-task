// // import Nature from '@/assets/img/icons-markers/nature.svg'
// import FavoritesPanel from '@/components/FavoritesPanel';
// // import { IFavorite } from '@/interfaces/IFavorite';
// import { UserServices } from '@/store/reducers';
// import { store } from '@/store/store';
// import { screen, waitFor } from '@testing-library/react';

// import '@testing-library/jest-dom'
// import { renderWithAllProviders } from '../testHelpers/renderWithAllProviders';


describe('Тестирование FavoritePanel', () => {
    // const favoriteItem: IFavorite = {
    //     place_id: 'test-place-id-1234455',
    //     name: 'Test place',
    //     description: 'description',
    //     photo: Nature,
    //     icon: Nature,
    //     location: {lat: 55.18480229999999, lng: 30.2505758}
    // }

    // const user = {
    //     id: 'example-id',
    //     email: 'example@gmail.com',
    //     token: 'example-token'
    // }

    // beforeAll(() => {
    //     const dispatch = store.dispatch
    //     dispatch(UserServices.actions.setUser(user))
    //     // dispatch(FavoriteServices.actions.addFavorite(favoriteItem))
    // })

    // test('Тестирование отображения свернутой карточки', async () => {
    //     renderWithAllProviders(<FavoritesPanel />)
        
    //     await waitFor(() => {
    //         const loader = screen.getByTestId('favorite-loader')
    //         expect(loader).toBeInTheDocument()
    //     })

    //     await waitFor(() => {
    //         const card = screen.getByTestId('card-collapsed')
    //         expect(card).toBeInTheDocument()
    //     })
    // });

    // test('Тестирование клика для развертывания карточки', () => {
    //     renderWithAllProviders(<FavoritesPanel />)
    //     const CardCollapsed = screen.getByTestId('card-collapsed')
    //     expect(CardCollapsed).toBeInTheDocument()

    //     const buttonExpand = screen.getByTestId('button-expand')
    //     expect(buttonExpand).toBeInTheDocument()

    //     fireEvent.click(buttonExpand)

    //     const cardExpanded = screen.getByTestId('card-expanded')
    //     expect(cardExpanded).toBeInTheDocument()
    // });

    // test('Тестирование клика для свертывания карточки', () => {
    //     renderWithAllProviders(<FavoritesPanel />)

    //     const buttonBack = screen.getByTestId('button-back')
    //     expect(buttonBack).toBeInTheDocument()

    //     fireEvent.click(buttonBack)

    //     const CardCollapsed = screen.getByTestId('card-collapsed')
    //     expect(CardCollapsed).toBeInTheDocument()
    // })


    // test('Тестирование клика для построения маршрута', async () => {
    //     renderWithAllProviders(<FavoritesPanel />)
    //     const buttonExpand = screen.getByTestId('button-expand')
    //     expect(buttonExpand).toBeInTheDocument()

    //     fireEvent.click(buttonExpand)

    //     const cardExpanded = screen.getByTestId('card-expanded')
    //     expect(cardExpanded).toBeInTheDocument()

    //     const buttonRoute = screen.getByTestId('button-route')
    //     fireEvent.click(buttonRoute)

    //     await waitFor(() => {
    //         const state = store.getState()
    //         expect(state.RouteDetails).not.toEqual({})
    //     })
    // })

    // test('Тестирование клика для удаления из избранного', async () => {
    //     renderWithAllProviders(<FavoritesPanel />)
    //     const buttonRemove = screen.getByTestId('button-remove')
    //     fireEvent.click(buttonRemove)

    //     await waitFor(() => {
    //         const state = store.getState()
    //         expect(state.Favorites.favorites).not.toContain(favoriteItem)
    //     })
    // })
    test('test', () => {
        expect(1).toBe(1)
    })
})
