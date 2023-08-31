
import ButtonComponent from '../button/ButtonComponent'
import { MdEdit, MdDelete, MdAutorenew, MdSettingsBackupRestore } from 'react-icons/md'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import * as Styled from './CardComponent.style'
import { StyleUtils } from '../../utils/style'
import { ApiService} from '../../services/ApiService'
import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'


export const CardComponent = ({ todo }) => {
    
    const navigate = useNavigate();
    const { id, title, description, status} = todo;
    const {setTodos} = useContext(TodosContext);
    const service = new ApiService('tasks');

    const handleEdit= ()=>{
        navigate(`/todo/${id}`);
    };

    const getTasks = async ()=>{
        service.Get('tasks').then(response=>{
            setTodos(response);
        })
    }

    const handleDelete= ()=>{
        //chamada do serviço de deleção
        const change = confirm('Deseja realmente DELETAR essa tarefa?')

        if(!change){
            return;
        }
        service.Delete(id).then(()=>{
        alert(`${title} excluido com sucesso.`);
        getTasks()
        })
    }
    const changeStatus=()=>{
        //inserir serviço para altera o status do todo
        const change = confirm('Você confirma a atualização do status da tarefa?')
        if(!change){
            return;
        }
        const data = {
            status: !status
        }

        service.Update(id, data).then(response=> {
            alert(`${response.title} atualizado com sucesso.`);
            getTasks()
        })
    };

    return (
        <Styled.CardContainer $status={status}>
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


