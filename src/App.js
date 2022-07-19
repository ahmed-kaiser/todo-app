import './App.css';
import {useState} from 'react'

function App() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "September", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date()
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([])
  const [editableTodo, setEditableTodo] = useState(null)
  const [isEditableState, setEditableState] = useState(false)
  // const [errorMassage, setErrorMassage] = useState(undefined)

  const addToTodoList = (event) =>{
    if (todoTitle){
      event.preventDefault()

      const todo = {
        id: Date.now(),
        title: todoTitle,
        complete: false
      }

      setTodoList([todo, ...todoList])
      setTodoTitle("")
    }else{
      // setErrorMassage("Task title is empty...!")
    }
  }

  const editHandler = (todo) => {
    setEditableTodo(todo)
    setTodoTitle(todo.title)
    setEditableState(true)
  }

  const updateTodo = (event) => {
    if (todoTitle){
      event.preventDefault()
      editableTodo.title = todoTitle
      setTodoTitle("")
      setEditableState(false)
      setEditableTodo(null)
    }else{
      // setErrorMassage("Task title is empty...!")
    } 
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const taskComplete = (todo) => {
    if (!todo.complete){
      todo.complete = true;
    }else{
      todo.complete = false;
    }
    setTodoList([...todoList])
  }

  return (
    <div className="container">
      <div className="App">
        {/* --------Todo Header start------  */}
        <div className="todoHeader">
          <p><span>{days[date.getDay()]}</span>,
            <small> {date.getDate()} {months[date.getMonth()]}</small></p>
        </div>
        {/* --------Todo Header end------ */}

        {/* --------Todo form start-------- */}
        <form className="form">
          <input value={todoTitle} type="text" name="todoTitle" id="" placeholder="Add new task" 
            onChange={(e) => setTodoTitle(e.target.value)}/>
          <button onClick={(e) => isEditableState === true? updateTodo(e) : addToTodoList(e)}>
            {isEditableState === true? 
              (<i className="fa-solid fa-arrows-rotate"></i>) : 
              (<i className="fa-solid fa-plus"></i>)
            }
          </button>
        </form>
        {/* --------Todo form end-------- */}

        {/* --------Error massage start-------- */}
        {/* {errorMassage !== undefined? 
          (<div className='errorText'>
            <p>{errorMassage}</p>
          </div>) : (<span></span>)
        } */}
        
        {/* --------Error massage end-------- */}

        {/* --------Todo list start-------- */}
        <ul className="todoList">
          {todoList.map((todo) => (
            <li className="todoList__item">
              {todo.complete? 
                (<input type="checkBox" onClick={() => taskComplete(todo)} checked/>) : 
                (<input type="checkBox" onClick={() => taskComplete(todo)}/>)
              }

              <span className="todoTitle" >
                {todo.complete === true? <del>{todo.title}</del> : todo.title}   
              </span>

              {todo.complete? 
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
        </ul>
        {/* --------Todo list start-------- */}

        {todoList.length > 1 ? 
          (<div className='todoFooter'>
            <button className='clearBtn' onClick={() => setTodoList([])}>Clear All</button>
          </div>) : ('')
        }

      </div>
    </div>
  );
}

export default App;
