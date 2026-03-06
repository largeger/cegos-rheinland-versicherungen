import {useState} from "react";

/**
 * Component to add new to-do items.
 * @param {Object} props - Component props.
 * @param {function} props.addTodo - Function to add a new to-do item.
 */
const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState('');

    /**
     * Handles adding a new to-do item.
     */
    const handleAddTodo = () => {
        if (task.trim()) {
            addTodo(task); // props callback
            setTask(''); // reset input value
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default AddTodo
