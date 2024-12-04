export function ToDoItem({ todo: {id, text, completed },onHandleComplete,onDeleteTodo }) {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow rounded mb-2">
            <p className={`text-lg ${completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                {text}
            </p>
            <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => onHandleComplete(id)}>
                    {completed ? 'Undo': 'Completed'}
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => onDeleteTodo(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}
