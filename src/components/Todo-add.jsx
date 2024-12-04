import { useState } from "react";

export function ToDoAdd({onAddTodo}) {
    const [text,setText] = useState('');
    const [error,setError] = useState(null)

    function handleSave() {
        if(!text.trim()) {
            return setError('please fill all the fildes')
        }
            setError(null) 
            onAddTodo({id:Date.now(),text,completed:false})
    };
    return (
        <div className="flex items-center gap-2 p-4 bg-gray-100 rounded shadow mb-4">
            {error && <p className="bg-red-400 p-2 my-2">{error}</p>}
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new task"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};
