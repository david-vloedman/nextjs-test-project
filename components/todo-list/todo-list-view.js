import { observer } from 'mobx-react-lite'
import NewTodoForm from './new-todo-form'

export default function TodoListView({todoList}){
    return (
        <div>
            <TodoListDiv todoList={todoList} />
            <NewTodoForm todoList={todoList} />
        </div>
    )
}

const TodoListDiv = observer(({todoList}) => (
    <div>
        <ul>
            {todoList.todos.map(todo => 
                <TodoView todo={todo} key={todo.id}  />
            )}
        </ul>
        Unfinished tasks: { todoList.unfinishedTodoCount }
    </div>
))

const TodoView = observer(({todo}) => (
    <li>
        <input type="checkbox"
         checked={todo.finished} 
         onChange={() => todo.toggle()} 
         />
         { todo.title }
         <br/>
         Details: { todo.details }
    </li>
))




