import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test } from 'vitest'
import { Countries } from './Countries'; // Suponiendo que 'filterCountries' es la función que contiene este código
import { BrowserRouter as Router } from 'react-router-dom';
describe('Countries component', () => {
    test('filters countries by region', () => {
       

        render(
            <Router>
                <Countries />
            </Router>
        );

        // Abrir el menú desplegable de filtro
        const filterButton = screen.getByText(/Filter by Region/);
        fireEvent.click(filterButton);

        const europeRegionOptions = screen.getAllByText(/Europe/);
        const europeRegionOption = europeRegionOptions[0]; // Selecciona el primer elemento de la matriz
        fireEvent.click(europeRegionOption);
    });
});
