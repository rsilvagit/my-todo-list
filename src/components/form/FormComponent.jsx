import React, { useEffect } from 'react'
import {ButtonComponent} from '../button/ButtonComponent'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import * as Styled from './FormComponent.style'
import { ApiService } from '../../services/ApiService'
import { useNavigate } from 'react-router-dom'


export const FormComponent = ({ todo }) => {
    const { register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm();

    const service = new ApiService('tasks');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        //requisição sever
        todo
        ? await service.Update(todo.id,data).then(response=>alert(`${response.title} atualizado com sucesso`))
        : await service.Create(data).then(response=> alert(`${response.title} criado com sucesso`))
        navigate('/');

    }

    
    useEffect(() => {
        if (todo) {
            setValue('title', todo.title);
            setValue('description', todo.description);
        }
    }, [todo]);

    return (
        <Styled.FormTodo onSubmit={handleSubmit(onSubmit)}>
            <Styled.FormTitle>
                {!todo ? 'Criar uma tarefa' : `Editar tarefa ${todo.title}`}
            </Styled.FormTitle>

            <Styled.InputsContainer>

                <Styled.InputGroup>
                    <Styled.Label htmlFor="title">Título</Styled.Label>
                    <Styled.Input
                        type='text'
                        id='title'
                        {...register("title", {
                            required: '*Campo Obrigatório'
                        })}
                    />
                    {errors.title &&
                        <Styled.ErrorText>{errors.title.message}</Styled.ErrorText>
                    }
                </Styled.InputGroup>
                <Styled.InputGroup>
                    <Styled.Label>Descrição</Styled.Label>
                    <Styled.TextArea
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
                    </Styled.TextArea>

                    <Styled.CounterContainer>
                        <p>{ watch('description')?.length || 0} de 50 caracteres</p>
                    </Styled.CounterContainer>
                    {errors.description &&
                        <Styled.ErrorText>{errors.description.message}</Styled.ErrorText>
                    }
                </Styled.InputGroup>
            </Styled.InputsContainer>

            <ButtonComponent type='submit' disabled={Object.keys(errors)?.length}>Salvar</ButtonComponent>

        </Styled.FormTodo>
    )
}

FormComponent.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.bool,
    }),
}
