import { useContext, useEffect} from 'react';

import { CardComponent } from '../../components/card/CardComponent';
import { ApiService } from '../../services/ApiService';
import { TodosContext } from '../../context/TodosContext';

import * as Styled from "./HomePage.Style";

export const HomePage = () => {
    const {todos, setTodos} = useContext(TodosContext);
    const service = new ApiService('tasks');

    const getTasks = async () => {
            service.Get('tasks').then(response => {
                setTodos(response);
            })
        }

    useEffect(()=>{
        getTasks();
    },[]);

    return (
        <Styled.HomeContainer>
            <Styled.CardsContainer>
                 {todos.map(todo => 
                    <CardComponent todo={todo} key={todo.id} />
                )}
            </Styled.CardsContainer>
        </Styled.HomeContainer>
    )
}