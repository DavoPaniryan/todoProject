import axios from "axios";
import { ToDoAdd } from "./Todo-add";
import { ToDoFilter } from "./Todo-filter";
import { List } from "./list";

import { useEffect, useState } from "react";

export function ToDoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/todos')
        .then(res => {
            setTodos([...res.data]);
        });
    },[]);

    function handleAdd(todo) {
        setTodos([...todos,todo])
    };

    function handleComplete(id) {
        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed }; 
    
        axios.patch(`http://localhost:4000/todos/${id}`, updatedTodo)
            .then(() => {
                const updatedTodos = todos.map(todo => 
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                );
                setTodos(updatedTodos);
            })
            .catch(error => {
                console.error('Error updating todo:', error);
            });
    }
    
    function handleFilter(value) {
        axios.get('http://localhost:4000/todos')
            .then(res => {
                switch (value) {
                    case "all":
                        setTodos(res.data); 
                        break;
                    case "completed":
                        setTodos(res.data.filter(todo => todo.completed)); 
                        break;
                    case "notCompleted":
                        setTodos(res.data.filter(todo => !todo.completed)); 
                        break;
                    default:
                        setTodos(res.data);
                }
            })
            .catch(err => {
                console.error("Error fetching todos:", err);
            });
    }
    

    function deleteTodo(id) {
        axios.delete(`http://localhost:4000/todos/${id}`)
            .then(() => {
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
            });
    }
    

    return (
        <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded shadow">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
            <div className="mb-4">
                <ToDoAdd onAddTodo={handleAdd} />
            </div>
            <div className="mb-4">
                <ToDoFilter onFilter={handleFilter}/>
            </div>
            <div>
                <List items={todos} onHandleComplete={handleComplete} onDeleteTodo={deleteTodo} />
            </div>
        </div>
    );
}
