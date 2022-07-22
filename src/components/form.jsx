import { useState } from "react";
import Alert from "./alert";

function Form(props) {
    const [errorMassage, setErrorMassage] = useState("");
    
    const addToTodoList = (event) =>{
        event.preventDefault();
        if (props.todoTitle){
            const todo = {
            id: Date.now(),
            title: props.todoTitle,
            isCompleted: false
            }
            props.setTodoList([todo, ...props.todoList]);
            props.setTodoTitle("");
        }else{
            setErrorMassage("Task title is empty...!");
        }
    }

    const updateTodo = (event) => {
        event.preventDefault();
        if (props.todoTitle){
            props.editableTodo.title = props.todoTitle;
            props.setTodoTitle("");
            props.setEditableState(false);
            props.setEditableTodo(null);
        }else{
            setErrorMassage("Task title is empty...!");
        } 
    }

    return (
        <form className="form">
          <input value={props.todoTitle} type="text" name="todoTitle" id="" placeholder="New task" 
            onChange={(e) => props.setTodoTitle(e.target.value)}/>
          <button className='formBtn' onClick={(e) => props.isEditableState? updateTodo(e) : addToTodoList(e)}>
            {props.isEditableState? 
              (<i className="fa-solid fa-arrows-rotate"></i>) : 
              (<i className="fa-solid fa-plus"></i>)
            }
          </button>
          <Alert 
            errorMassage = {errorMassage}
            setErrorMassage = {setErrorMassage}
          />
        </form>
    )
}

export default Form;