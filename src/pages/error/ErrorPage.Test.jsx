import '@testing-library/jest-dom';

import { fireEvent,screen,render } from '@testing-library/react';
import  {BrowserRouter as Router} from 'react-router-dom';
import {vi} from 'vitest';

import { ErrorPage } from './ErrorPage';


const mockNavigateTo = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return{
        ...actual,
        useNavigate: () => mockNavigateTo,
    };
});

describe('Test Suite ErrorPage', () => {
    beforeEach(() => {
        render(<ErrorPage/>, { wrapper: Router })
      })
    

    it('Shuld be able to render component ErrorPage', () => {
        const component = screen.getByTestId('error-page-component')
        expect(component).toBeInTheDocument()
    })

    it('Shuld be able render text "Opss!" in title', ()=>{
        const text = screen.getByText(/Opss!/i)
        expect(text).toBeInTheDocument()
    })
    it('Shuld be able render user to home page', ()=>{
        const button = screen.getByText(/Voltar a página inicial/i)
        fireEvent.click(button);
        expect(mockNavigateTo).toHaveBennCalledWith('/')
    })
})
