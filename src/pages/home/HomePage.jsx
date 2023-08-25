import CardComponent from '../../components/card/CardComponent'
import { todos } from '../todo/ToDoPage'

export const HomePage = () => {
    return (
        <div className="HomeContainer">
            <div className="CardsContainer">
                 {todos.map(todo => 
                    <CardComponent todo={todo} key={todo.id} />
                )}
            </div>
        </div>
    )
}