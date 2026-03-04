// Tag 3: TypeScript & Typensicherheit

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

let todos: Todo[] = [
    { id: 1, task: "TypeScript lernen", completed: false },
    { id: 2, task: "Interfaces verstehen", completed: true }
];

function addTodo(task: string): void {
    const newTodo: Todo = {
        id: Date.now(),
        task: task,
        completed: false
    };
    todos.push(newTodo);
    console.log(`Zugefügt: ${task}`);
}

function listTodos(): void {
    console.log("Aktuelle To-Do Liste:");
    // using classical for of loop
    for (const todo of todos) {
        console.log(`[${todo.completed ? 'x' : ' '}] ${todo.task} (ID: ${todo.id})`)
    }

    // using .forEach and an arrow function
    todos.forEach(todo => {
        console.log(`[${todo.completed ? 'x' : ' '}] ${todo.task} (ID: ${todo.id})`);
    });
}

// Demo
addTodo("Praxisbeispiel entwickeln");
listTodos();
