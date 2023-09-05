
import '@testing-library/jest-dom';

import {ToDoPage} from '../todo/ToDoPage'
import { render, screen } from '@testing-library/react';
import { beforeEach, it } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormComponent } from '../../components/form/FormComponent';

describe('Test Suite ToDoPage', ()=>{
  beforeEach(()=>{
    render(<ToDoPage/>, {wrapper:Router})
  });
  it('Shuld be able to render component ToDoPage', () => {
    const component = screen.getByTestId('ToDoPage-component')
    expect(component).toBeInTheDocument();
  });
});
