import { useParams } from 'react-router-dom'
import { FormComponent } from '../../components/form/FormComponent'
import { useEffect, useState } from 'react';
import { ApiService } from '../../services/ApiService'

import * as Styled from './ToDoPage.style'

export const ToDoPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();
  const service = new ApiService('tasks');

  useEffect(() => {
    if(id) {
      service.Show(id).then(response => setTodo(response))
    }
  }, [])

  return (
    <Styled.TodoFormContainer data-testid='ToDoPage-component'>
      <FormComponent todo={todo}/>
    </Styled.TodoFormContainer>
  )
}