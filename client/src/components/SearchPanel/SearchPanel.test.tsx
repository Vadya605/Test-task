import SearchPanel from '@/components/SearchPanel';
import { store } from '@/store/store';
import { renderWithAllProviders } from '@/utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom'
import { PLACES } from '@/constants';

describe('Тестирование панели поиска', () => {
    test('Отображение панели поиска', () => {
        renderWithAllProviders(<SearchPanel />)
        const caption = screen.getByText(/Искать/i);
        expect(caption).toBeInTheDocument()
    });

    test('Тестирование клика на место для поиска', async () => {
        const { getByText } = renderWithAllProviders(<SearchPanel />);
        const place = PLACES[0]
        const placeElement = getByText(place.name);
        fireEvent.click(placeElement);

        await waitFor(() => {
            const state = store.getState();
            expect(state.Search.selectedPlaces).toContain(place.type);
        });

        fireEvent.click(placeElement);

        await waitFor(() => {
            const state = store.getState();
            expect(state.Search.selectedPlaces).not.toContain(place.type);
        });
    })

    test('Тестирование поиска', async () => {
        renderWithAllProviders(<SearchPanel />);

        const buttonSearch = screen.getByTestId('button-search')
        fireEvent.click(buttonSearch);

        await waitFor(() => {
            const state = store.getState()
            expect(state.Search.foundPlaces).not.toBe([])
        })
    })
})
