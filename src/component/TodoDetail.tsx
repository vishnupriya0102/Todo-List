import React, { useEffect, useState } from 'react';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoDetailProps {
    id: number;
}

const TodoDetail: React.FC<TodoDetailProps> = ({ id }) => {
    const [todo, setTodo] = useState<Todo >();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((data) => setTodo(data))
            .catch((error) => console.error('Error fetching todo:', error))
            .finally(() => console.log('Todo fetched'));
    }, [id]);
  
    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Todo Detail</h2>
            <p>User ID: {todo.userId}</p>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default TodoDetail;
