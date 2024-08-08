import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Todo={
    userId:number
    id:number
    title:string
    completed:boolean
}

export default function TodoList() {

    const[todos,setTodos]= useState <Todo[]>([])

    useEffect(()=> {
        
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then((response)=> response.json())   //parse
          .then((data)=>setTodos(data))
          .finally(()=>console.log('Todos fetched'))
    },[])

  return (
    <div>
      <h1>Todo List</h1>
      {
          todos.map((todo,index) => (
          <div >
          <Link to= "/todo"></Link>
                <h1>{index}</h1>
                <h3>{todo.title}</h3>
                <p>{todo.completed}</p>
            </div>
          ))

        }
    </div>
  )
}