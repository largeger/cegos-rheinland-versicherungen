import { useState } from 'react'
import './App.css'
import TodoList from "./components/TodoList.jsx";
import AddTodo from "./components/AddTodo.jsx";

function App() {
    //state to store todos in an array
    const [todos, setTodos] = useState([]);

    /**
     * Adds a new to-do item to the list.
     * @param {string} task - The task description.
     */
    const addTodo = (task) => {
        const newTodo = {
            id: Date.now(),
            task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    /**
     * Toggles the completion status of a to-do item.
     * @param {number} id - The unique identifier of the to-do item.
     */
    const toggleComplete = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}; // keep all other props of the object, just toggle the boolean!
            } else {
                return todo;
            }
        });
        setTodos(updatedTodos);
    };

    /**
     * Deletes a to-do item from the list by filtering all elements with a different id
     * @param {number} id - The unique identifier of the to-do item.
     */
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>To-Do List 📝</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App
