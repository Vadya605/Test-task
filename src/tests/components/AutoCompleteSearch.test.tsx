import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import Autocomplete from '@/components/AutoCompleteSearch';
import { renderWithAllProviders } from '../testHelpers/renderWithAllProviders';

describe('Тестирование Autocomplete', () => {
    test('Тестирование ввода в поле', () => {
        renderWithAllProviders(<Autocomplete />)

        const input = screen.getByPlaceholderText(/Место адрес.../i);

        fireEvent.change(input, { target: { value: 'test' } });

        const inputNew = screen.getByPlaceholderText(/Место адрес.../i);
        expect(inputNew).toHaveValue('test');
    });
});