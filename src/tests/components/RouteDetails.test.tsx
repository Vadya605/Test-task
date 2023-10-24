import RouteDetails from '@/components/RouteDetails';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom'
import { renderWithAllProviders } from '../testHelpers/renderWithAllProviders';

describe('Тестирование RouteDetails', () => {
    test('Отображение боковой панели', () => {
        renderWithAllProviders(<RouteDetails />)

        const caption = screen.getByText(/дистанция/i);
        expect(caption).toBeInTheDocument()
    });
})



