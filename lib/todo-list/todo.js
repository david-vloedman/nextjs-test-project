import {makeObservable, observable, action } from 'mobx'
import {v4 as uuid } from "uuid"

export default class Todo { 
    id = uuid()
    title = ''
    finished = false
    details = ''

    constructor(){
        makeObservable(this, {
            finished: observable,
            title: observable,
            details: observable,
            toggle: action
        })
        
    }

    /**
     * @param {string} value
     */
    set title(value){
        this.title = value
    }

    // Actions
    toggle(){
        this.finished = !this.finished
    }
}