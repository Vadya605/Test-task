import RouteDetails from '@/components/RouteDetails';
import { renderWithAllProviders } from '@/utils';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom'

describe('Тестирование RouteDetails', () => {
    test('Отображение боковой панели', () => {
        renderWithAllProviders(<RouteDetails />)

        const caption = screen.getByText(/дистанция/i);
        expect(caption).toBeInTheDocument()
    });
})



