import '@testing-library/jest-dom';
import { FormComponent } from './FormComponent';
import { vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FormComponent', () => {
  let useFormMock;
  let ApiServiceMock;
  let useNavigateMock;

  beforeEach(() => {
    useFormMock = vi.fn().mockReturnValue({
      register: vi.fn(),
      handleSubmit: vi.fn((onsubmit)=>onsubmit({title: 'Test Title', description:'Test Description'})),
      setValue: vi.fn(),
      watch: vi.fn(),
      formState: { errors: {} }
    });
    ApiServiceMock = vi.fn().mockReturnValue({
      Create: vi.fn(). mockResolvedValue({title: 'Test Title', description:'Test Description'}),
      Update: vi.fn()
    });
    useNavigateMock = vi.fn();
  });

  // Tests that the form component renders with a title and input fields
  it('should render form component with title and input fields', () => {
    // Render the FormComponent with the necessary props and mocks
    const {getByTestId, getByLabelText } = render(
      <FormComponent todo={null} />, { wrapper:Router } 
    );

    // Assert that the form component renders with a title and input fields
    expect(getByTestId('title')).toBeInTheDocument();
    expect(getByLabelText(/Título/i)).toBeInTheDocument();
    expect(getByLabelText(/Descrição/i)).toBeInTheDocument();
  });

  // Tests that the form component allows the user to input a title and description
  it('should allow user to input title and description', () => {
    // Render the FormComponent with the necessary props and mocks
    const { getByLabelText } = render(
      <FormComponent todo={null} />, { wrapper:Router } 
    );

    // Simulate user inputting a title and description
    fireEvent.change(getByLabelText(/Título/i), { target: { value: 'Test Title' } });
    fireEvent.change(getByLabelText(/Descrição/i), { target: { value: 'Test Description' } });

    // Assert that the user input is reflected in the form component
    expect(getByLabelText(/Título/i).value).toBe('Test Title');
    expect(getByLabelText(/Descrição/i).value).toBe('Test Description');
  });

  // Tests that the form component submits the form and creates a new task
  it('should submit form and create new task', async () => {
    // Mock the necessary dependencies
    useFormMock.mockReturnValue({
      register: vi.fn(),
      handleSubmit: vi.fn((onSubmit) => onSubmit({ title: 'Test Title', description: 'Test Description' })),
      setValue: vi.fn(),
      watch: vi.fn(),
      formState: { errors: {} }
    });
    const createMock = vi.fn().mockResolvedValue({ title: 'Test Title', description: 'Test Description' });
    ApiServiceMock.mockReturnValue({
      Create: createMock,
      Update: vi.fn()
    });

    // Render the FormComponent with the necessary props and mocks
    const { getByText } = render(
        <FormComponent todo={null} />, { wrapper:Router } 
    );

    // Submit the form
    fireEvent.click(getByText('Salvar'));

    // Assert that the form is submitted and a new task is created
    await waitFor(() => {
      expect(createMock).toHaveBeenCalledWith({ title: 'Test Title', description: 'Test Description' });
      expect(alert).toHaveBeenCalledWith('Test Title criado com sucesso');
    });
  });

  // Tests that the form component submits the form and updates an existing task
  it('should submit form and update existing task', async () => {
    // Mock the necessary dependencies
    useFormMock.mockReturnValue({
      register: vi.fn(),
      handleSubmit: vi.fn((onSubmit) => onSubmit({ title: 'Test Title', description: 'Test Description' })),
      setValue: vi.fn(),
      watch: vi.fn(),
      formState: { errors: {} }
    });
    const updateMock = vi.fn().mockResolvedValue({ title: 'Test Title', description: 'Test Description' });
    ApiServiceMock.mockReturnValue({
      Create: vi.fn(),
      Update: updateMock
    });

    // Render the FormComponent with the necessary props and mocks
    const { getByText } = render(
      <FormComponent todo={{ id: 1, title: 'Existing Title', description: 'Existing Description' }} />, {wrapper:Router}
    );

    // Submit the form
    fireEvent.click(getByText('Salvar'));

    // Assert that the form is submitted and the existing task is updated
    await waitFor(() => {
      expect(updateMock).toHaveBeenCalledWith(1, { title: 'Test Title', description: 'Test Description' });
      expect(alert).toHaveBeenCalledWith('Test Title atualizado com sucesso');
    });
  });

  // Tests that the form component displays an error message when the title input is empty
  it('should display error message when title input is empty', () => {
     // Mock the necessary dependencies
     useFormMock.mockReturnValue({
       register: vi.fn(),
       handleSubmit: vi.fn(),
       setValue: vi.fn(),
       watch: vi.fn(),
       formState: { errors: { title: { message: '*Campo Obrigatório' } } }
     });

    // Render the FormComponent with the necessary props and mocks
    const { getByText } = render(
      <FormComponent todo={null} />, {wrapper:Router}
    );

    // Assert that the error message is displayed when the title input is empty
    expect(getByText('*Campo Obrigatório')).toBeInTheDocument();
  });

  // Tests that the form component displays an error message when the description input exceeds 50 characters
  it('should display error message when description input exceeds 50 characters', () => {
     // Mock the necessary dependencies
     useFormMock.mockReturnValue({
       register: vi.fn(),
       handleSubmit: vi.fn(),
       setValue: vi.fn(),
       watch: vi.fn(),
       formState: { errors: { description: { message: 'Esse campo possui tamanho máximo de 50 caracteres' } } }
     });

    // Render the FormComponent with the necessary props and mocks
    const { getByText } = render(
      <FormComponent todo={null} />, {wrapper:Router}
    );

    // Assert that the error message is displayed when the description input exceeds 50 characters
    expect(getByText('Esse campo possui tamanho máximo de 50 caracteres')).toBeInTheDocument();
  });
});
