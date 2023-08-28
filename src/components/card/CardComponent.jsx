import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from '../button/ButtonComponent'
import { MdEdit, MdDelete, MdAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import * as Styled from './CardComponent.style'

const CardComponent = ({ todo }) => {
    const { id, title, description, status} = todo;
    const navigate = useNavigate();

    const handleEdit= ()=>{
        navigate(`/todo/${id}`);
    };
    const handleDelete= ()=>{
        //chamada do serviço de deleção
    };
    const changeStatus=()=>{
       
        //inserir serviço para alter o status do todo
    };

    return (
        <Styled.CardContainer $status={status}>CardComponent
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.ActionsContainer>
                <ButtonComponent onClick={handleEdit}>
                    <MdEdit />
                </ButtonComponent>
                <ButtonComponent onClick={handleDelete}>
                    <MdDelete />
                </ButtonComponent>
                <ButtonComponent onClick={changeStatus}>
                    <MdAutorenew />
                </ButtonComponent>
            </Styled.ActionsContainer>
        </Styled.CardContainer>
    )
}

CardComponent.propTypes = {
    tod: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.bool,
    }).isRequired,
}

export default CardComponent
