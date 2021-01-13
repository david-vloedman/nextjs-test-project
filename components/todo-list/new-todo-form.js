import { action } from "mobx";
import { observer } from "mobx-react-lite";
import Todo, { todo } from '../../lib/todo-list/todo';

export default function AddNewTodoForm({ todoList }) {
  return <FormElement todoList={ todoList }/>;
}

const FormElement = observer(({ todoList, todo }) =>
    {
        const updateProperty = action((key,value) => {
            todo[key] = value
        })

        const onChange = action((event) => {
            console.log(event.target.name)
            updateProperty(event.target.name, event.target.value)
        })

        const onSubmit = (event) => {
            event.preventDefault()
            todoList.addTodoItem(todo)
        }
        
        return (
            
        <form>
            <h2>Create new task</h2>
            <label>
                Title
                <input type="text" 
                name="title" 
                value={ todo.title }
                 onChange={action(e => onChange(e)) }/>
            </label>


            <label>
                Details
                <input type="text" name="details" value={ todo.details } onChange={ onChange }/>
            </label>

            <input type="Submit" onClick={ onSubmit }/>
        </form>
        )
    }
 );

 


