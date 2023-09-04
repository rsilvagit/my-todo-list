import '@testing-library/jest-dom';

import { CardComponent } from './CardComponent';
import { MockUtils } from '../../utils/mock';
import { screen, render } from '@testing-library/react';
import { beforeEach, expect, it } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

const mockCard = MockUtils.Todos[0];
describe('Test Suite CardComponent', () => {
    beforeEach(() => {
        render(<CardComponent todo={mockCard}/>, { wrapper: Router })
    })
    it('Should be able to render component CardComponent', () => {
        expect(screen.getByTestId('card')).toBeInTheDocument();
    })
    it('Should be able to render component', () => {
        expect(screen.getByTestId('card')).toBeInTheDocument();
     })

    it('Should be able to render title', () => {
        expect(screen.getByText(/Tarefa 1/i)).toBeInTheDocument();
     })
    it('Should be able to render description', () => {
        expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
    })
})
