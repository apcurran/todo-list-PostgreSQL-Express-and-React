import React, { useState, useEffect } from 'react';

export default function TodosList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                // Make req to API
                const API_URL = "/todos";
                const result = await fetch(API_URL);
                const data = await result.json();

                setTodos(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Todos List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.todo_id}>{todo.description}</li>
                ))}
            </ul>
        </div>
    )
}
