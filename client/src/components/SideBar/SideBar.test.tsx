import SideBar from '@/components/SideBar';
import { setPersonalData } from '@/store/reducers';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils';
import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom'


describe('Тестирование Side Bar', () => {
    test('Отображение боковой панели', () => {
        renderWithAllProviders(<SideBar />)
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

    test('Отсутствие панели избранного при клике на кнопку избранного(пользователь не авторизован)', () => {
        renderWithAllProviders(<SideBar />)
        const buttonFavorite = screen.getByTestId('button-favorite-section');
        fireEvent.click(buttonFavorite)
        const favoritePanel = screen.queryByTestId('favorite-panel');
        expect(favoritePanel).not.toBeInTheDocument();
    });

    test('Отображение панели избранного при клике на кнопку избранного(пользователь авторизован)', () => {
        const dispatch = store.dispatch
        dispatch(setPersonalData({
            id: '1',
            email: 'test@gmail.com',
            token: 'test_token'
        }))

        renderWithAllProviders(<SideBar />)
        const buttonFavorite = screen.getByTestId('button-favorite-section');
        fireEvent.click(buttonFavorite)
        const favoritePanel = screen.getByTestId('favorite-panel');
        expect(favoritePanel).toBeInTheDocument();
    }) 
})



