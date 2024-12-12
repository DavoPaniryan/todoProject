import { useState } from "react";

export function ToDoFilter({onFilter}) {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
        onFilter(event.target.value)
    };

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-100 rounded shadow-md">
            <label className="flex items-center gap-2 text-gray-700">
                <input
                    type="radio"
                    name="filter"
                    value="all"
                    checked={selectedFilter === "all"}
                    onChange={handleFilterChange}
                />
                All
            </label>
            <label className="flex items-center gap-2 text-gray-700">
                <input
                    type="radio"
                    name="filter"
                    value="completed"
                    checked={selectedFilter === "completed"}
                    onChange={handleFilterChange}
                />
                Completed
            </label>
            <label className="flex items-center gap-2 text-gray-700">
                <input
                    type="radio"
                    name="filter"
                    value="notCompleted"
                    checked={selectedFilter === "notCompleted"}
                    onChange={handleFilterChange}
                />
                Not Completed
            </label>
        </div>
    );
}
