import React from 'react';

export default function TodosList({ todos }) {
    return (
        <div>
            <h2>Todos List</h2>
            <ul className="todos-list">
                {todos.map(todo => (
                    <li key={todo.todo_id} className="todo-item">
                        <span className="todo-item__desc">{todo.description}</span>
                        <button className="todo-item__delete">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
