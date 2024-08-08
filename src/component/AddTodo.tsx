import React, { useState, FormEvent } from 'react';

type Todo = {
    userid: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function AddTodo() {
    const [todo, setTodo] = useState<Todo>({
        userid: 0,
        id: 0,
        title: '',
        completed: false,
    });

    const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle the submission logic here, such as adding the todo to a list or sending it to a server
        console.log(todo);
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={onSubmitData}>
                <input
                    type='number'
                    name='id'
                    placeholder='Enter the id'
                    value={todo.id}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            id: Number(e.target.value),
                        });
                    }}
                />

                <input
                    type='number'
                    name='userid'
                    placeholder='Enter the userid'
                    value={todo.userid}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            userid: Number(e.target.value),
                        });
                    }}
                />

                <input
                    type='text'
                    name='title'
                    placeholder='Enter the title'
                    value={todo.title}
                    onChange={(e) => {
                        setTodo({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />

                <label>
                    Completed:
                    <input
                        type='checkbox'
                        name='completed'
                        checked={todo.completed}
                        onChange={(e) => {
                            setTodo({
                                ...todo,
                                completed: e.target.checked,
                            });
                        }}
                    />
                </label>

                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
