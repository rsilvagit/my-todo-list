import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from '../button/ButtonComponent'
import { MdEdit, MdDelete, MdAutorenew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CardComponent = ({ todo }) => {
    const { id, title, description } = todo;
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
        <div className='CardContainer'>CardComponent
            <h3 className="Title">{title}</h3>
            <p className='Description'>{description}</p>
            <div className="ActionsContainer">
                <ButtonComponent onClick={handleEdit}>
                    <MdEdit />
                </ButtonComponent>
                <ButtonComponent onClick={handleDelete}>
                    <MdDelete />
                </ButtonComponent>
                <ButtonComponent onClick={changeStatus}>
                    <MdAutorenew />
                </ButtonComponent>
            </div>
        </div>
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
