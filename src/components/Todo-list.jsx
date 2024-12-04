import { ToDoAdd } from "./Todo-add";
import { ToDoFilter } from "./Todo-filter";
import { List } from "./list";

import { useState } from "react";

export function ToDoList() {
    const [todos, setTodos] = useState([
        { id: 101, text: "Read a book", completed: false },
        { id: 102, text: "Eat a burger", completed: true },
        { id: 103, text: "Buy flowers", completed: false },
    ]);

    function addTodo(todo) {
        setTodos([...todos,todo])
    }

    function handleComplete(id) {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    };
    

    return (
        <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded shadow">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
            <div className="mb-4">
                <ToDoAdd onAddTodo={addTodo}/>
            </div>
            <div className="mb-4">
                <ToDoFilter />
            </div>
            <div>
                <List items={todos} onHandleComplete={handleComplete} onDeleteTodo={deleteTodo} />
            </div>
        </div>
    );
}
