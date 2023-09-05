import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react'
import { HomePage } from './HomePage';
import { beforeEach, expect, it } from 'vitest';

describe('Suite test Home Page', () => {
    beforeEach(() => {
        render(<HomePage />)
    })
    it('Should be able to render component HomePage',()=>{
        expect(screen.getByTestId('HomePage-Component')).toBeInTheDocument();
    })
    it('Should be able to render component Card Container',()=>{
        expect(screen.getByTestId('Card-Container')).toBeInTheDocument();
    })
})