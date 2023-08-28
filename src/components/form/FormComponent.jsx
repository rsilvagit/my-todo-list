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
        <form className="FormTodo" onSubmit={handleSubmit(onSubmit)}>
            <legend className="FormTitle">
                {!todo ? 'Criar uma tarefa' : `Editar tarefa ${todo.title}`}
            </legend>

            <div className="InputContainer">

                <div className="InputGroup">
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
                </div>
                <div className="InputGroup">
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

                    <div className="CounterContainer">
                        { watch('description')?.length || 0} de 50 caracteres
                    </div>
                    {errors.description &&
                        <p>{errors.description.message}</p>
                    }
                </div>
            </div>

            <ButtonComponent type='submit'>Salvar</ButtonComponent>

        </form >
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
