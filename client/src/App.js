import React, { useState, useEffect } from 'react';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';

function App() {
  // Lifted todos state to share with various child components via props
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

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

  async function addTodo(event) {
    event.preventDefault();

    try {
      const API_URL = "/todos";
      const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description: newTodo
        })
    };

      const result = await fetch(API_URL, options);
      const addedTodo = await result.json();

      setTodos([
        ...todos,
        addedTodo
      ]);

      setNewTodo(""); // Clear input
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTodo(id) {
    try {
      setTodos(todos.filter(todo => todo.todo_id !== id));

      const API_URL = `/todos/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };

      await fetch(API_URL, options);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodosList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
