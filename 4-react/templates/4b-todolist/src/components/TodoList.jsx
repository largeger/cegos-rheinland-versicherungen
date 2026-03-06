import TodoItem from "./TodoItem.jsx";

/**
 * Displays the list of to-do items in a table.
 * @param {Object} props - Component props.
 * @param {TodoItem[]} props.todos - The array of to-do items.
 * @param {function} props.toggleComplete - Function to toggle the completion status of a to-do item.
 * @param {function} props.deleteTodo - Function to delete a to-do item.
 */
const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <table>
            <tbody>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
            </tbody>
        </table>
    );
};

export default TodoList;
