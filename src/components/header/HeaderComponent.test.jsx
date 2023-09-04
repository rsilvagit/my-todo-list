import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { HeaderComponent } from './HeaderComponent';
import { beforeEach, expect } from 'vitest';

describe('Test Suite handerComponent', ()=>{
    beforeEach(()=>{
        render(<HeaderComponent/>)
    })
    it('Should be able render HeaderComponent',()=>{
        expect(screen.getByTestId('header')).toBeInTheDocument();
    })
    it('Should be able render UserName',()=>{
        expect(screen.getByTestId('userName')).toBeInTheDocument();
    })
    it('Should be able render logo',()=>{
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    })
})
