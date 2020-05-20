import React from 'react';

export default function AddTodo({ newTodo, setNewTodo, addTodo }) {
    return (
        <form onSubmit={addTodo} className="form">
            <div className="form-group">
                <label htmlFor="description" className="form-group__label">Todo Description</label>
                <input
                 onChange={(event) => setNewTodo(event.target.value)}
                 value={newTodo}
                 type="text"
                 id="description"
                 name="description"
                 className="form-group__input"
                />
            </div>
            <button className="form__submit" type="submit">Add</button>
        </form>
    )
}
