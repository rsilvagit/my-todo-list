import React, { useEffect } from 'react'
import ButtonComponent from '../button/ButtonComponent'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import * as Styled from './FormComponent.style'

export const FormComponent = ({ todo }) => {
    const { register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = () => {
        console.log(data);
        //requisição sever
    }
    useEffect(() => {
        if (todo) {
            setValue('title', todo.title);
            setValue('description', todo.description);
        }
    }, []);

    return (
        <Styled.FormTodo onSubmit={handleSubmit(onSubmit)}>
            <Styled.FormTitle>
                {!todo ? 'Criar uma tarefa' : `Editar tarefa ${todo.title}`}
            </Styled.FormTitle>

            <Styled.InputContainer>

                <Styled.InputGroup>
                    <label htmlFor="title">Título</label>
                    <input
                        type='text'
                        id='title'
                        {...register("title", {
                            required: '*Campo Obrigatório'
                        })}
                    />
                    {errors.title &&
                        <p>{errors.title.message}</p>
                    }
                </Styled.InputGroup>
                <Styled.InputGroup>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        cols="30"
                        rows="10"
                        {...register('description',
                            {
                                required: '*Campo Obrigatório',
                                maxLength: {
                                    value: 50,
                                    message: 'Esse campo possui tamanho máximo de 50 caracteres'
                                }
                            })}>
                    </textarea>

                    <Styled.CounterContainer>
                        { watch('description')?.length || 0} de 50 caracteres
                    </Styled.CounterContainer>
                    {errors.description &&
                        <p>{errors.description.message}</p>
                    }
                </Styled.InputGroup>
            </Styled.InputContainer>

            <ButtonComponent type='submit'>Salvar</ButtonComponent>

        </Styled.FormTodo>
    )
}

FormComponent.propTypes = {
    tod: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.bool,
    }),
}
