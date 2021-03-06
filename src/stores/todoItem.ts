import { action, makeObservable, observable } from "mobx";
import { nanoid } from "nanoid";


export default class TodoItem {
    id = nanoid();

    @observable text: string = "";
    @observable isDone: boolean = false;

    constructor (text: string) {
        makeObservable(this);
        this.text = text
    }

    @action
    toggleIsDone = () => {
        this.isDone = !this.isDone
    }
    
    
    @action 
    updateText = (text: string) => {
        this.text = text
    }
}




