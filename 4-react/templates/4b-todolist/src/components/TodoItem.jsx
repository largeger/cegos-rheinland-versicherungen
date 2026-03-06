/**
 * Displays an individual to-do item in a table row.
 * @param {Object} props - Component props.
 * @param {TodoItem} props.todo - The to-do item to display.
 * @param {function} props.toggleComplete - Function to toggle the completion status of the to-do item.
 * @param {function} props.deleteTodo - Function to delete the to-do item.
 */
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
            </td>
            <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TodoItem;
