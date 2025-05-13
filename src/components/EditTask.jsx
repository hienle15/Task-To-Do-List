import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/taskSlice'

const EditTask = ({ task }) => {
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const dispatch = useDispatch()
    const [isEdit, setEditing] = useState(false)
    const handleSaveEdit = () =>{
         dispatch(editTask({id: task.id, title, description, status}))
         setEditing(false)
    }

    return (
        <div>
            {isEdit ? (
                <div className='absolute bg-white b-4 border rounded-md shadow-lg z-10 p-4'>
                    <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Edit Task</h2>
                    <div className='mb-4'>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Task Title' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ' />
                    </div>
                    <div className='mb-4'>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Task Description' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' rows="3"></textarea>
                    </div>
                    <div className='mb-4'>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'>
                            <option value="To Do">To Do</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <button onClick={handleSaveEdit} type='submit' className=' bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700'>Save</button>
                        <button className="bg-gray-300 px-3 py-2 rounded-md" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => setEditing(true)} className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Edit</button>
            )}
        </div>
    )
}

export default EditTask
