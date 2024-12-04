import { ToDoList } from './components/Todo-list'

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <ToDoList />
      </div>
    </div>
  )
}

export default App
