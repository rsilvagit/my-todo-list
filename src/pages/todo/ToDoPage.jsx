import { useParams } from "react-router-dom"
import { FormComponent } from "../../components/form/FormComponent"
import { useEffect, useState } from "react";
import { MockUtils } from '../../utils/mock'




export const ToDoPage = () => {
   const { id } = useParams(); // useParams obtem se a query passada na url
   const [todo, setTodo] = useState();
   
   useEffect(() => {
    if(id) {
        setTodo(MockUtils.Todos.find(item => item.id === Number(id)))
    }
   }, [])

    return (
        <div className="TodoFormContainer">
            { id ? 'Existe Tarefa' : 'Não existe tarefa' }
           <FormComponent todo={todo}/>
        </div>
        
    )
}