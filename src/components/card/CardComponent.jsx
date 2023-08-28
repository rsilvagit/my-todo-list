import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from '../button/ButtonComponent'
import { MdEdit, MdDelete, MdAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import * as Styled from './CardComponent.style'
import { StyleUtils } from '../../utils/style'

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
       
        //inserir serviço para altera o status do todo
    };

    return (
        <Styled.CardContainer $status={status}>CardComponent
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.ActionsContainer>
                <ButtonComponent bg={'#fffff'} color={StyleUtils.Colors.primary} simetric={true} onClick={handleEdit}>
                    <MdEdit />
                </ButtonComponent>
                <ButtonComponent bg={'#ffffff'} color={StyleUtils.Colors.danger} simetric={true} onClick={handleDelete}>
                    <MdDelete />
                </ButtonComponent>
                <ButtonComponent bg={'#fffff'} color={StyleUtils.Colors.sucess} simetric={true} onClick={changeStatus}>
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
