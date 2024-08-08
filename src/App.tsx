import React from 'react'
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom'
import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'
import TodoDetail from './component/TodoDetail'

export default function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <Link to="/">Todo list</Link>
      </ul>
      <ul>
        <Link to="/add">Add Todo</Link>
      </ul>
      <ul>
        <Link to="/todo">Todo Details</Link>
      </ul>
    </nav>



    <Routes>
      <Route path='/' element={<TodoList/>}/>
      <Route path='/add' element={<AddTodo />}/>
      <Route path='/todo' element={<TodoDetail/>}/>



    </Routes>
    </BrowserRouter>

  )
}
