import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { renderWithAllProviders } from '../testHelpers/renderWithAllProviders';
import RouteDetails from '@/components/RouteDetails';

describe('Тестирование RouteDetails', () => {
    test('Отображение боковой панели', () => {
        renderWithAllProviders(<RouteDetails />)

        const caption = screen.getByText(/дистанция/i);
        expect(caption).toBeInTheDocument()
    });
})



