
function TodoList(props) {

    const editHandler = (todo) => {
        props.setEditableTodo(todo);
        props.setTodoTitle(todo.title);
        props.setEditableState(true);
    }

    const deleteTodo = (id) => {
        props.setTodoList(props.todoList.filter(todo => todo.id !== id));
      }
    
    const taskComplete = (todo) => {
        props.setTodoList(props.todoList.map((task) => {
            if (task.id === todo.id){
              if (!todo.isCompleted){
                  todo.isCompleted = true;
              }else{
                  todo.isCompleted = false;
              }
            }
            return task;
        }))
    }

    return (
        <ul className="todoList">
          {props.todoList.map((todo) => (
            <li className="todoList__item">
              {todo.isCompleted? 
                (<input type="checkBox" onClick={() => taskComplete(todo)} checked/>) : 
                (<input type="checkBox" onClick={() => taskComplete(todo)}/>)
              }
              <span className="todoTitle" >
                {todo.isCompleted? <del>{todo.title}</del> : todo.title}   
              </span>
              {todo.isCompleted? 
                (<small>Completed</small>) : 
                (<div>
                  <button className='editBtn' onClick={() => editHandler(todo)}>
                    <i className="fa-solid fa-file-pen"></i></button>
                  <button className='delBtn' onClick={() => deleteTodo(todo.id)}>
                    <i className="fa-solid fa-trash-can"></i></button>
                </div>)
              }
            </li>
          ))}
          {props.todoList.length > 0 ? 
            (<div className='todoFooter'>
              <button className='clearBtn' onClick={() => props.setTodoList([])}>Clear All</button>
            </div>) : ('')
          }
        </ul>
    )
}

export default TodoList;