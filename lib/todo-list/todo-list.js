import {makeObservable, observable, computed, action} from "mobx"
import Todo from '../todo-list/todo'

export default class ToDoList{
    // master list of 'todos'
    todos = []

    /**
     *  Return all 'todos' that are marked as not finished
     */
    get unfinishedTodoCount(){
        return this.todos.filter(todo => !todo.finished).length
    }

    get unfinishedTodos(){
        return this.todos.filter(todo => !todo.finished)
    }

    get finishedTodos(){
        return this.todos.filter(todo => todo.finished)
    }

    /**
     *  @param {Todo} todo
     */
    addTodoItem(todo){
        return this.todos.push(todo)
    }

    /**
     *  Initialize state with any existing 'todos'
     *  Setup MobX
     * @param {Array<Todo>} todos 
     */
    constructor(todos){
        this.todos = todos ?? [];
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed,
            unfinishedTodos: computed,
            finishedTodos: computed,
            addTodoItem: action
        })
    }
}



