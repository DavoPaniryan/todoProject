import axios from "axios";
import { useForm } from "react-hook-form";

export function ToDoAdd({ onAddTodo }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    function handleSave(data) {
        axios.post("http://localhost:4000/todos", data)
            .then((res) => {
                onAddTodo(res.data);
                reset();
            });
    }

    return (
        <form
            className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md rounded-lg mb-6 border border-gray-200"
            onSubmit={handleSubmit(handleSave)}
        >
            <div className="flex-1">
                <input
                    type="text"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                        errors.text ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Add a new task"
                    {...register("text", { required: "Please fill text" })}
                />
                {errors.text && (
                    <p className="mt-1 text-sm text-red-500 italic">{errors.text.message}</p>
                )}
            </div>
            <div className="flex-1">
                <input
                    type="text"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
                        errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Add description"
                    {...register("description", { required: "Please fill description" })}
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-500 italic">{errors.description.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 shadow-md transition-all duration-300"
            >
                Save
            </button>
        </form>
    );
}

