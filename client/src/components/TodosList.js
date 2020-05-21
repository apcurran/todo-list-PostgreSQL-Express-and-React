import React from 'react';

export default function TodosList({ todos, deleteTodo }) {
    return (
        <div>
            <h2 className="todos-title">Todos List</h2>
            <ul className="todos-list">
                {todos.map(todo => (
                    <li key={todo.todo_id} className="todo-item">
                        <span className="todo-item__desc">{todo.description}</span>
                        <button onClick={() => deleteTodo(todo.todo_id)} className="todo-item__delete">delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
