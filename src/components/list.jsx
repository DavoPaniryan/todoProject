import { ToDoItem } from "./Todo-item";

export function List({ items ,onHandleComplete,onDeleteTodo}) {
    return (
        <div className="p-4 bg-gray-50 rounded shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Task List</h2>
            {items.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} onHandleComplete={onHandleComplete} onDeleteTodo={onDeleteTodo} />
            ))}
        </div>
    );
}
