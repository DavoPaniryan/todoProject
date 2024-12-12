import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToDoItem({ todo: { id, description, text, completed }, onHandleComplete, onDeleteTodo }) {
    const notify = () => toast(`Todo: ${id} was deleted`);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg mb-4 border border-blue-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-left w-full sm:w-2/3">
                <p className={`text-lg font-semibold ${completed ? "line-through text-gray-400" : "text-blue-900"} mb-2`}>
                    {text}
                </p>
                <p className={`text-sm ${completed ? "line-through text-gray-400" : "text-gray-700"} italic`}>
                    {description}
                </p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
                    onClick={() => onHandleComplete(id)}
                >
                    {completed ? 'Undo' : 'Completed'}
                </button>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md"
                    onClick={() => {
                        notify();
                        onDeleteTodo(id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
