import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fectchTodo, setFilterStatus } from '../features/taskSlice'
import EditTask from './EditTask'
import { FaEdit, FaTrash } from 'react-icons/fa'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)
  const loading = useSelector((state) => state.tasks.loading)
  const error = useSelector((state) => state.tasks.error)
  const filterStatus = useSelector((state) => state.tasks.filterStatus)

  useEffect(() => {
    dispatch(fectchTodo())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleFilterChange = (e) => {
    dispatch(setFilterStatus(e.target.value))
  }

  const filteredTasks =
    filterStatus === 'All'
      ? tasks
      : tasks.filter((task) => task.status === filterStatus)

  if (loading) {
    return <p className="text-center text-indigo-600 font-medium">Loading tasks...</p>
  }

  if (error) {
    return <p className="text-center text-red-500 font-medium">There was an error: {error}</p>
  }

  return (
    <div>

      <div className='flex justify-between align-items-center'>
        <h2 className='text-xl font-semibold text-indigo-600'>📝 Tasks</h2>
        <select
          value={filterStatus}
          onChange={handleFilterChange}
          className='px-3 padding-2 border rounded-md focus:outline-none focus:ring-2 text-sm'
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <ul className="space-y-5 mt-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="bg-white border border-gray-200 p-5 rounded-xl shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{task.title}</h3>
              {task.description && (
                <p className="text-gray-600 text-sm mb-1">{task.description}</p>
              )}
              <p className="text-sm font-medium mt-4">
                Status:{' '}
                <span
                  className={`px-2 py-1 rounded-md text-white ${task.status === 'Completed'
                    ? 'bg-green-500'
                    : task.status === 'Pending'
                      ? 'bg-yellow-500'
                      : 'bg-gray-500'
                    }`}
                >
                  {task.status}
                </span>
              </p>
            </div>

            <div className='flex space-x-2'>
              {/* Nút Edit */}
              <EditTask task={task} />

              {/* Nút Delete với icon màu trắng */}
              <button
                onClick={() => handleDelete(task.id)}
                className='px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center justify-center'
              >
                <FaTrash className="text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
