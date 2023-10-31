import SideBar from '@/components/SideBar';
import { setUser } from '@/store/reducers';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils';
import { fireEvent,screen } from '@testing-library/react';

import '@testing-library/jest-dom'

describe('Тестирование Side Bar', () => {
    beforeAll(() => {
        const dispatch = store.dispatch
        dispatch(setUser({
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



