import './App.css';
import {useState} from 'react'
import TodoHeader from './components/todoHeader';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([])
  const [editableTodo, setEditableTodo] = useState(null)
  const [isEditableState, setEditableState] = useState(false)
  
  return (
    <div className="container">
      <div className="App">
        <TodoHeader/>
        <Form
          todoList = {todoList}
          setTodoList = {setTodoList}
          todoTitle = {todoTitle}
          setTodoTitle = {setTodoTitle}
          isEditableState = {isEditableState}
          setEditableState = {setEditableState}
          editableTodo = {editableTodo}
          setEditableTodo = {setEditableTodo}
        />
        <TodoList
          todoList = {todoList}
          setTodoList = {setTodoList}
          setTodoTitle = {setTodoTitle}
          setEditableTodo = {setEditableTodo}
          setEditableState = {setEditableState}
        />
      </div>
    </div>
  );
}

export default App;
