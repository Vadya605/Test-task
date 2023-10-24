import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react';
import SideBar from '@/components/SideBar';
import { renderWithAllProviders } from '../testHelpers/renderWithAllProviders';
import { store } from '@/store/store';
import { UserServices } from '@/store/reducers';



describe('Тестирование Side Bar', () => {
    beforeAll(() => {
        const dispatch = store.dispatch
        dispatch(UserServices.actions.setUser({
            id: '1',
            email: 'test@gmail.com',
            token: 'test_token'
        }))
    })

    test('Отображение боковой панели', () => {
        renderWithAllProviders(<SideBar />, )
        const buttonSearch = screen.getByTestId('button-search-section')
        expect(buttonSearch).toBeInTheDocument()
    });
    
    test('Отображение auto complete search при раскрытии side bar', () => {
        renderWithAllProviders(<SideBar />)
        const buttonSearch = screen.getByTestId('button-search-section');
        fireEvent.click(buttonSearch)
        const AutoCompeteSearch = screen.getByTestId('auto-compete-search');
        expect(AutoCompeteSearch).toBeInTheDocument();
    });
    
    test('Отображение панели поиска при клике на кнопку поиска', () => {
        renderWithAllProviders(<SideBar />)
        const buttonSearch = screen.getByTestId('button-search-section');
        fireEvent.click(buttonSearch)
        const searchPanel = screen.getByTestId('search-panel');
        expect(searchPanel).toBeInTheDocument();
    });
    
    test('Отображение панели избранного при выборе на кнопку избранного', () => {
        renderWithAllProviders(<SideBar />)
        const buttonFavorite = screen.getByTestId('button-favorite-section');
        fireEvent.click(buttonFavorite)
        const favoritePanel = screen.getByTestId('favorite-panel');
        expect(favoritePanel).toBeInTheDocument();
    });
})



