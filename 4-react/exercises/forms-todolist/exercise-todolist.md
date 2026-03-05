### Exercise: Create a To-Do List App

#### Task Description:
Build a basic to-do list application using React. The app should allow users to add tasks, mark tasks as completed, and delete tasks.

#### Step-by-Step Tasks:

1. **Setup React App:**
    - Set up a new React application using Create React App or any other preferred method.

2. **Create Components:**
    - Create a `TodoList` component to display the list of tasks.
    - Create a `TodoItem` component to represent each individual task.
    - Create an `AddTodo` component to add new tasks.

3. **Implement State:**
    - Create state variables to manage the list of tasks.
    - Initialize the state with an array of tasks (objects with properties like `id`, `task`, `completed`).

4. **Display Tasks:**
    - Render the list of tasks in the `TodoList` component using the `TodoItem` component for each task.
    - Include buttons or checkboxes to mark tasks as completed or delete tasks.

5. **Add New Task:**
    - Implement functionality in the `AddTodo` component to add new tasks to the list when the user enters a task and clicks an "Add" button.

6. **Mark Task as Completed:**
    - Implement functionality in the `TodoItem` component to toggle the `completed` state of a task when clicked.

7. **Delete Task:**
    - Implement functionality in the `TodoItem` component to delete a task from the list when a delete button associated with that task is clicked.

