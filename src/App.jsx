import React from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-pink-100 to-yellow-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10 border border-indigo-200 flex flex-col md:flex-row gap-10">
        
        {/* Cột trái: Thêm task */}
        <div className="flex-1">
          
          <AddTask />
        </div>

        {/* Cột phải: Danh sách task */}
        <div className="flex-1">
          
          <TaskList />
        </div>
        
      </div>
    </div>
  )
}

export default App
